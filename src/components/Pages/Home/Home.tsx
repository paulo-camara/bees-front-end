import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { DataOnConfirmModel, FormRegister } from "./FormRegister/FormRegister";
import toastr from "toastr";

export const Home = () => {
    const history = useHistory();
    const actionUserContext = useContext(UserContext);

    const verifyContitions = (data : DataOnConfirmModel ) => {
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
        <div className="container-list-page">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <FormRegister onConfirm={verifyContitions} />
            </div>
            <div className="image-bees">
                <img src="/images/logo_bees.png" alt="Logo Bees" />
            </div>
        </div>
    );
};
