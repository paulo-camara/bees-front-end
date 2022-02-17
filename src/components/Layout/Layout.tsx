import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

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

    return <div className="layout">
        <header>
            <div className="go-back" onClick={goBack}>
                <img data-testid="button-go-back" className="icon_trash" src="/images/icon_back.png" alt="Go Back"/>
                <span className="back-page-label">Go back</span>
            </div>
            <span data-testid="full-username" className="userName">{actionUserContext.userName}</span>
        </header>
        <div style={{height: "100%"}}>
            {children}
        </div>
    </div>
};
