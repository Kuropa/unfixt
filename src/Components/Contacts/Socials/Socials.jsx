import React from "react";
import style from './Socials.module.css';
import {i18n} from "../../../lib/i18n/i18n";

const Socials = (props) => {
    let socialsList = props.socials.map(el => (
        <p><a href={el.href} target='_blank'>
            <div className={style.iconWrapper}>
                <img className={style.icon} src={el.img} alt={el.title}/>
                <p className={style.title}>{el.title}</p>
            </div>
        </a></p>
    ))
    return (
        <div className={style.socials}>
            <h2 className={style.header}>{i18n.text("contacts/title_2")}</h2>
            <div className={style.paddindWrap}>
                { socialsList }
            </div>
        </div>
    )
}

export default Socials