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
                <img className="icon_trash" src="/icon_back.png" />
                <span className="back-page-label">Go back</span>
            </div>
            <span>{actionUserContext.userName}</span>
        </header>
        {children}
    </div>
};
