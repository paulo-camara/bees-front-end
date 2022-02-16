import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
    const history = useHistory();

    const [name, setName] = useState<string>("");
    const [olderThan, setOlderThan] = useState<boolean>(false);

    const verifyContitions = () => {
        if (name && olderThan) {
            history.push('/list');
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
                    disabled={!name || !olderThan}
                    onClick={verifyContitions}
                >
                    Enter
                </button>
            </div> 
            <div className="image-bees">
                <img src="https://nfa-blob-storage.global.ssl.fastly.net/nfa-static/prod/home/benefits-image.png" />
            </div>
        </div>
    );
};
