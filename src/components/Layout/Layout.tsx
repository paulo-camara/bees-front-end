import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import styled from "styled-components";

/** Para que não seja necessário usar repetidamente 
 * componentes em cada tela, foi feito um layout padrão
 * que cada tela é implementada dentro dele
 */
export const Layout = ({ children }: any) => {
    const actionUserContext = useContext(UserContext);
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <Header>
                <GoBackContainer onClick={goBack}>
                    <img
                        data-testid="button-go-back"
                        src="/images/icon_back.png"
                        alt="Go Back"
                    />
                    <span>Go back</span>
                </GoBackContainer>
                <DisplayFullName data-testid="full-username">{
                    actionUserContext.userName}
                </DisplayFullName>
            </Header>
            {children}
        </>
    )
};

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #f2ec54;
    height: 40px;
    font-size: 22px;
    padding: 10px 15px;
    position: fixed;
    width: 100%;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const GoBackContainer = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
`;

const DisplayFullName = styled.span`
    padding-right: 30px;
`;
