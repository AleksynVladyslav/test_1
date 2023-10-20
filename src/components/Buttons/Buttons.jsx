import css from "./Buttons.module.css"
export const Buttons= ({buttons})=>{
return <ul className={css.list} >{buttons.map(button=>{
    return <li className={css.item} key={button}><button className={css.button} type="button">{button}</button></li>
})}</ul>
}