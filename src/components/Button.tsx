import { FunctionComponent } from "react";

interface ButtonProps {
    children: string,
    color: "primary" | "success" | "warning" | "danger",
    onClick: () => void
}
 
const Button: FunctionComponent<ButtonProps> = ({
    children,
    color="primary",
    onClick,
}) => {
    return (  
        <button type="button" className={`btn btn-${color}`} onClick={onClick} >
            {children}
        </button>
    );
}
 
export default Button;