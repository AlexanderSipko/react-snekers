


function Card(props) {

    function b(props) {
        if (props.type === 'true') {
            return (<button className="button">
                        <img src="/img/Card/Plus--card.svg" alt='plus--card' />
                    </button>)
        } else {
            return (<img width={32} height={32} src="/img/Card/Check.svg" alt='Check' />)
        }
    }
    let img="/img/Card/UnHeart.svg"

    return (
        <div className="content--card mb-40">
            <div className="favorite">
                <img width={40} height={40} src={img} alt='UnHeart' />
            </div>
            <img width={133} height={112} src={props.imgeUrl} alt='heart' />
            <h5>{props.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                {b(props)}
                
            </div>
        </div>
    )
}


export default Card;

