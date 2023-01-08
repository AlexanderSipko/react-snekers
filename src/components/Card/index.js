
import React from 'react';
import styles from './Card.module.scss'


function Card(props) {
    let UnHeart="/img/Card/UnHeart.svg"
    let Heart="/img/Card/Heart.svg"
    const PlusBtn = "/img/Card/PlusBtn.png"
    const CheckBtn = "/img/Card/CheckBtn.svg"
    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(props.favorite)

    const onClickPlus = () => {
        props.onPlus({ id:props.id, titel:props.titel, imgeUrl:props.imgeUrl, price:props.price });
        setIsAdded(!isAdded)
    }

    const addToFavorites = () => {
        console.log(isFavorite)
        if (!isFavorite) {
            props.addFavorites({ id:props.id, titel:props.titel, imgeUrl:props.imgeUrl, price:props.price })
            setIsFavorite(!isFavorite);
        } else {
            alert('delete')
            props.addFavorites({ id:props.id, titel:props.titel, imgeUrl:props.imgeUrl, price:props.price })
            setIsFavorite(!isFavorite);
        }
    }
    

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img
                    className={!isFavorite ? styles.img: '--'}
                    onClick={ addToFavorites }
                    src={isFavorite ? Heart: UnHeart} alt='UnHeart'
                    width={40}
                    height={40}
                />
            </div>
            <img width={133} height={112} src={props.imgeUrl} alt='heart' />
            <h5>{props.titel}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{props.price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? CheckBtn: PlusBtn}
                    alt='plus--card'
                />
            </div>
        </div> 
    )
}

export default Card;




