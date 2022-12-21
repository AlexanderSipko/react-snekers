

function Drawer(props) {

    return (
        <div className="overLay">
        
        { props.items.length < 1 ?
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between align-center">
                    Корзина
                </h2>
                <div className="drawer--empty">
                <div className="cartEmty d-flex justify-between align-center flex-column flex">
                        <img className="mb-20" src="/img/Card/empty--card.png"  alt='Clear' />
                    <h2>Корзина пустая</h2>
                    <p className="opacity-6 mb-20">добавьте хотябы одну пару кроссовок, чтобы сделать заказ</p>
                    <button onClick={props.onClose} className="greenButton--1">
                        <img className="gb--btn--1" src="/img/Card/left_stire.svg" alt='string' />Вернуться назад
                    </button>
                </div> 
                </div>
                
            </div>
            :
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between align-center">
                    Корзина
                    <img onClick={props.onClose} className="remove--btn cu-p" src="/img/Card/btn-remove.jpg" alt='btn--remove' />
                </h2>

            <div className="items">
                { props.items.map( (obj) => {
                    return (
                        <div className="cartItem d-flex align-center mb-20">
                            <div style={{ backgroundImage: `url("${ obj.imgeUrl }")` }} className="cartItemImg"></div>
                            <div className="mr-20">
                                <p className="mb-5">{ obj.titel }</p>
                                <b>{obj.price} руб. </b>
                            </div>
                            <img onClick={ () => props.onRemove(obj.id) } className="remove--btn" src="/img/Card/btn-remove.jpg" alt='btn--remove' />
                        </div>
                    )
                })}
            </div>
            <div className="catrTotalBlock">
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>
                           12 999
                             руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/Card/string.svg" alt='string' />
                </button>
            </div>
        </div>
        }
    </div>
    )
}


export default Drawer;

