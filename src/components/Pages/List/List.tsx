import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Request, RequestModel } from "../../../scripts/Request";
import { Layout } from "../../Layout/Layout";
import { Card } from "../../shared/Card/Card";

type DataItemModel = {
    name?: string;
}

export const List = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const params = {
            endpoint: 'https://api.openbrewerydb.org/breweries',
            payload: {},
            onSuccess: getDataSuccess,
            onFail: getDataFail,
            method: "get"
        };

        Request(params as RequestModel)
    };

    const getDataSuccess = (data: any) => {
        setData(data);

        toastr.error("Message");
    };

    const getDataFail = () => { 
        toastr.error("Message");
        history.push('/error');
    };

    return (
        <Layout>
            <div className="container-list">{data.map(({ name, phone, postal_code, brewery_type }, index) => {
                return (
                    <Card
                        key={index}
                        title={name}
                        phone={phone}
                        postalCode={postal_code}
                        type={brewery_type}
                        address={"400 Brown Cir Knox, Indiana - United States"} />
                )
            })}</div>
        </Layout>
    )
};