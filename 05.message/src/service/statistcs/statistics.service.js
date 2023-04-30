import axios from "axios";
import header from "./header";

const statistics1 = (url,params, res, err) => post(url,params, res, err);
const statistics2 = (url,params, res, err) => post(url,params, res, err);

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

export default {
    statistics1,
    statistics2
}