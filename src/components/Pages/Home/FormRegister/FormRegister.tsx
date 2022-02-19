import { useState } from "react";
import styled from "styled-components";
import { ButtonAction } from "../../../shared/FormComponents/ButtonAction";
import { InputCheckbox } from "../../../shared/FormComponents/InputCheckbox";
import { InputField } from "../../../shared/FormComponents/InputField";

interface FormRegisterModelInterface {
    onConfirm: Function;
};

export type DataOnConfirmModel = {
    name: string;
    setName: Function;
    olderThan: boolean;
    setOlderThan: Function;
};

export const FormRegister = ({ onConfirm }: FormRegisterModelInterface) => {
    const [name, setName] = useState<string>("");
    const [olderThan, setOlderThan] = useState<boolean>(false);

    const handleChangeName = (name: string) => {
        const isAlphabetical = /^[a-zA-Z- ]+$/.test(name) || name === "";

        if (isAlphabetical) {
            setName(name);
        }
    };

    return (
        <ContainerForm>
            <MessageRules>Please, enter your full name bellow</MessageRules>
            <MessageRules>Only alphabetical characters are accepted</MessageRules>

            <div>
                <InputField
                    data-testid="input-field"
                    placeholder="Full name"
                    value={name}
                    onChange={(event) => handleChangeName(event.target.value)}
                />
            </div>
            <div>
                <InputCheckbox
                    data-testid="input-check-box"
                    type={"checkbox"}
                    checked={olderThan}
                    onChange={({ target }) => setOlderThan(target.checked)}
                />
                <label>Are you older than 18 years old?</label>
            </div>
            <ButtonAction
                value={"Enter"}
                data-testid="button-enter"
                onClick={() => {
                    onConfirm({ name, setName, olderThan, setOlderThan } as DataOnConfirmModel)
                }}
            >
                Enter
            </ButtonAction>
        </ContainerForm >
    )
};

const ContainerForm = styled.div`
    height: 62vh;
`;

const MessageRules = styled.div`
    margin-top: 10px;
`;
