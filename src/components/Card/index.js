
import styles from './Card.module.scss'


function Card(props) {
    let img="/img/Card/UnHeart.svg"

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img width={40} height={40} src={img} alt='UnHeart' />
            </div>
            <img width={133} height={112} src={props.imgeUrl} alt='heart' />
            <h5>{props.titel}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={props.onPlus}>
                    <img src="/img/Card/Plus--card.svg" alt='plus--card' />
                </button>
            </div>
        </div>
    )
}

export default Card;

