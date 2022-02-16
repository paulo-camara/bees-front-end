import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import toastr from "toastr";
import { UserContext } from "../../../contexts/userContext";

export const Home = () => {
    const history = useHistory();

    const actionUserContext = useContext(UserContext);

    const [name, setName] = useState<string>("");
    const [olderThan, setOlderThan] = useState<boolean>(false);

    const verifyContitions = () => {
        if (name && olderThan) {
            actionUserContext.setUserName(name);
            history.push('/list');
        } else if (!name) {
            toastr.error("Fill in the fields correctly");
        } else {
            toastr.warning("Oh! That sad! You must be +18 to access this content.");
        }
    };

    const handleChangeName = (name: string, key: any) => {
        const isAlphabetical = /^[a-zA-Z- ]+$/.test(name) || name === "";

        if (isAlphabetical) {
            setName(name);
        }
    };

    return (
        <div className="container-list-page">
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
                        placeholder="Full name"
                        value={name}
                        onChange={(event) => handleChangeName(event.target.value, event)}
                    />
                </div>
                <div className="inputs">
                    <input
                        className="input-field-older-than"
                        type={"checkbox"}
                        checked={olderThan}
                        onChange={({ target }) => setOlderThan(target.checked)}
                    />
                    <label>Are you older than 18 years old?</label>
                </div>
                <button
                    className="action-enter" 
                    onClick={verifyContitions}
                >
                    Enter
                </button>
            </div> 
            <div className="image-bees">
                <img src="/logo_bees.png" />
            </div>
        </div>
    );
};
