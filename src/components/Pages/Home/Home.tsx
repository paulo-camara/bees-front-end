import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { DataOnConfirmModel, FormRegister } from "./FormRegister/FormRegister";
import toastr from "toastr";
import styled from "styled-components";

export const Home = () => {
    const history = useHistory();
    const actionUserContext = useContext(UserContext);

    const verifyContitions = (data: DataOnConfirmModel) => {
        if (data.name && data.olderThan) {
            actionUserContext.setUserName(data.name);
            history.push('/list');
        } else if (!data.name) {
            toastr.error("Fill in the fields correctly");
        } else {
            toastr.warning("Oh! That sad! You must be +18 to access this content.");
        }
    };

    return (
        <ContainerListPage>
            <ContainerForm>
                <FormRegister onConfirm={verifyContitions} />
            </ContainerForm>
            <ImageBees>
                <img src="/images/logo_bees.png" alt="Logo Bees" />
            </ImageBees>
        </ContainerListPage>
    );
};

const ContainerListPage = styled.div`
    text-align: center;
    background-color: #f2ec54;
    min-height: 100vh;
`;

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;

    min-height: 90vh;
    flex-direction: column;
    align-items: center;
`;

const ImageBees = styled.footer`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 180px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: auto auto;
`;
