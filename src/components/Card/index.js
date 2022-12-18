
import React from 'react';
import styles from './Card.module.scss'


function Card(props) {
    let img="/img/Card/UnHeart.svg"
    const PlusBtn = "/img/Card/PlusBtn.png"
    const CheckBtn = "/img/Card/CheckBtn.svg"
    const [isAdded, setIsAdded] = React.useState(false)
    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img width={40} height={40} src={img} alt='UnHeart' />
            </div>
            <img width={133} height={112} src={props.imgeUrl} alt='heart' />
            <h5>{props.titel}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? CheckBtn: PlusBtn} alt='plus--card' />
            </div>
        </div> 
    )
}

export default Card;

