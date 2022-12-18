

function Drawer(props) {

    return (
        <div  className="overLay">
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
                            <img className="remove--btn" src="/img/Card/btn-remove.jpg" alt='btn--remove' />
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

    </div>
    )
}


export default Drawer;

