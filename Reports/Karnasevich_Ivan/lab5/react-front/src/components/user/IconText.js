import React from 'react'
import s from './IconText.module.css'



const IconText = ({icon, child, link}) => {

    const generateInner = () => {
        return (
            <span>
                <img className={s.inSpan} src={icon} alt={''}/>
                <span className={s.inSpan}>{child}</span>
            </span>
        )
    }

    if (link) {
        return (
            <a href={link}>
                {generateInner()}
            </a>
        )
    }
    return (
        generateInner()
    )
}

export default IconText

