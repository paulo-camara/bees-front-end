import styled from "styled-components";
import { Link } from "react-router-dom";

export const GenericError = () => {
    return (
        <GenericErrorContainer>
            <MessageError>
                {`Oops! An unexpected error has occurred `}
                <Link to={'/'}>Click here</Link>
                {` to try again.`}
            </MessageError>
            <div className="image-bees">
                <img src="https://nfa-blob-storage.global.ssl.fastly.net/nfa-static/prod/home/benefits-image.png" />
            </div>
        </GenericErrorContainer>
    )
};


const GenericErrorContainer = styled.div`
    display: grid;
    justify-content: center;

    .image-bees {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
`;

const MessageError = styled.div`
    font-size: 30px;
    margin-top: 50px;
    width: 400px;
    text-align: center;
    
    a {
        color: black;
    }
`;