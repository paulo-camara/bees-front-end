import { useHistory } from "react-router-dom";

/** Para que não seja necessário usar repetidamente 
 * componentes em cada tela, foi feito um layout padrão
 * que cada tela é implementada dentro dele
 */
export const Layout = ({ children }: any) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return <div className="layout">
        <header>
            <div className="go-back" onClick={goBack}>
                <i className="fa fa-arrow-alt-circle-left"/>
                <span className="back-page-label">Go back</span>
            </div>
            <span>Full name</span>
        </header>
        {children}
    </div>
};
