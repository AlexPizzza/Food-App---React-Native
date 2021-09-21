import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
      console.log("Hi there!");
    try {
        const res = await yelp.get("/search", {
            params: {
                limit: 50,
                term: searchTerm,
                location: "san jose"
            }
        });
        setResults(res.data.businesses);
        setErrorMessage("");
    } catch(err){
        setErrorMessage("Something went wrong!");
    }
    console.log(results);
  }

  useEffect(() => {
      searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage]; 
};