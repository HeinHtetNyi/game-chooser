import { FunctionComponent } from "react";

interface AlertProps {
    children: string,
    color: "primary" | "success" | "warning" | "danger",
    onClose: () => void,
}
 
const Alert: FunctionComponent<AlertProps> = ({
    children,
    color="warning",
    onClose,
}) => {
    return (  
        <div className={`alert alert-${color}`} role="alert">
            {children}
            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}
 
export default Alert;