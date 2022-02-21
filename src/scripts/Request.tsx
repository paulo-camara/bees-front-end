import axios from "axios";

export interface RequestModel {
    endpoint: string;
    payload?: object;
    onSuccess: Function;
    onFail: Function;
    method: "get" | "post";
    queryString?: object;
};

const endpoint = 'https://api.openbrewerydb.org';

export const api = axios.create({ baseURL: endpoint });

export const Request = ({ endpoint, payload, onSuccess, onFail, method, queryString }: RequestModel) => {
    api[method](endpoint, payload, queryString)
        .then((resp) => onSuccess(resp.data))
        .catch((err) => onFail(err));
};
