import React, { useState, useEffect } from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;

  console.log(result);

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if(!result) {
      return null;
  }
  
  return (
   <View>
     <Text>{result.name}</Text>
     <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.imageStyle} />
        }}
     />
   </View>
  );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,

    }
});

export default ResultsShowScreen;