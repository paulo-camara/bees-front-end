import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { Request, RequestModel } from "../../../scripts/Request";
import { Layout } from "../../Layout/Layout";
import { Card } from "../../shared/Card/Card";
import { MessageDataEmpty } from "../../shared/MessageDataEmpty/MessageDataEmpty";
import styled from "styled-components";

export const List = () => {
    const actionUserContext = useContext(UserContext);
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        /**This validation prevents the user from entering the brewery 
         * listing page directly without having filled in the fields in Home */
        actionUserContext.userName ? getData() : history.push('/');

        return () => actionUserContext.reset();
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
    };

    const getDataFail = () => {
        history.push('/error');
    };

    const onDeleteItem = (teste: string) => {
        /** the removal is done in such a way that we manage the state and remove what 
         * the user wants to delete, given that the api has no way to effectively delete it. */
        const newData = data.filter(({ id }) => id !== teste);

        setData(newData);
    };

    return (
        <Layout>
            <ContainerList>
                {data.map(({ id, name, phone, postal_code, brewery_type, street, city, knox, country }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={name}
                            phone={phone}
                            postalCode={postal_code}
                            type={brewery_type}
                            address={`${street} ${knox}, ${city} - ${country}`}
                            onRemove={onDeleteItem} />
                    )
                })}
                {data.length === 0 && <MessageDataEmpty>No items to show</MessageDataEmpty>}
            </ContainerList>
        </Layout>
    )
};

const ContainerList = styled.div`
    background-color: #fffef0;
    padding: 60px;
    padding-top: 90px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;
