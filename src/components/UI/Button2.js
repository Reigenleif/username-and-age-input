import style from "./Button2.module.css"

const Button2 = props => {
    return (
        <button type={props.type} onClick={props.onClick} className={style.button}>
            {props.children}
        </button>
    )
}

export default Button2