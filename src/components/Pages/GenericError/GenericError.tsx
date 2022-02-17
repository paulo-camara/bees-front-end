import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const GenericError = () => {
    const history = useHistory();

    const retry = () => {
        history.goBack();
    };

    return (
        <GenericErrorContainer>
            <MessageError>
                <span>Oops! An unexpected error has occurred. Try again.</span>
                <span onClick={retry}>Click here</span>
            </MessageError>
            <div className="image-bees">
                <img data-testid="image-bees" src="/images/logo_bees.png" />
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