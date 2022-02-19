import { useState } from "react";

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
        <div className="container-fields">
            <div className="message-rules">
                <span>Please, enter your full name bellow</span>
            </div>
            <div className="message-rules">
                <span> only alphabetical characters are accepted</span>
            </div>

            <div className="inputs">
                <input
                    className="input-field-name"
                    data-testid="input-field"
                    placeholder="Full name"
                    value={name}
                    onChange={(event) => handleChangeName(event.target.value)}
                />
            </div>
            <div className="inputs">
                <input
                    className="input-field-older-than"
                    data-testid="input-check-box"
                    type={"checkbox"}
                    checked={olderThan}
                    onChange={({ target }) => setOlderThan(target.checked)}
                />
                <label>Are you older than 18 years old?</label>
            </div>
            <input
                className="action-enter"
                type={"button"}
                value={"Enter"}
                data-testid="button-enter"
                onClick={() => {
                    onConfirm({ name, setName, olderThan, setOlderThan } as DataOnConfirmModel)
                }}
            />
        </div>
    )
};
