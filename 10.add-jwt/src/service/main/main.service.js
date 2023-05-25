import axios from "axios";
import header from "./header";

const main1 = (url,params, res, err) => post(url,params, res, err);
const main2 = (url,params, res, err) => post(url,params, res, err);

const post = (url, params, res, err) => {
    axios   
        .post(url, params, {headers: header()})
        .then(response => {
            if (response.status === 200) return res(response.data)
            else return response
        })
        .catch(error => {
            return err(error)
        }) 
}

const get = (url, params, res, err) => {
    axios   
        .get(url, params, {headers: header()})
        .then(response => {
            if (response.status === 200) return res(response.data)
            else return response
        })
        .catch(error => {
            return err(error)
        }) 
}




export default {
    main1,
    main2
}