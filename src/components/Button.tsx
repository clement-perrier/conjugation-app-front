import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

interface ButtonProps {
    label?: string,
    icon?: IconDefinition,
    onClick?: () => void,
    buttonClassName?: string,
    linkClassName?: string,
    link?: string
}

export default function Button({label, icon, onClick, buttonClassName, linkClassName, link}: ButtonProps) {

    const iconElement = <FontAwesomeIcon icon={icon}/>

    const buttonElement = 
            <button 
                onClick={onClick} 
                className={'bg-black text-white rounded-md uppercase font-medium py-3 text-xs ' + buttonClassName}>
                {label}
                {icon && iconElement}
            </button>

    return(
        <>
            {link ? <Link to={link} className={linkClassName}>{buttonElement}</Link> : buttonElement }
        </>
    )
}