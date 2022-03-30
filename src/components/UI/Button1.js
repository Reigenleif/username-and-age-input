import style from "./Button1.module.css"

const Button1 = (props) => {
    return (
        <button className={style.button}>
            {props.children}
        </button>
    )
}

export default Button1