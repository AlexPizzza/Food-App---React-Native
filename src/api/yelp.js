import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer z1h96Ivn20ycpm6R398wbA3u_iX8TfYRpE36XH_IQaTWyquxD7QpI2Gm3j5IWls3JcVy0o1fymdNLEBbUjJJmfclL4MkDlbbGGRU-FGtFyUurSN6IyDffCM2aulMYHYx"
    }
});