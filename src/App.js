


function App() {


  return (
    <div className="wrapper clear">

      <div className="overLay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="items">

            <div className="cartItem d-flex align-center mb-20">

                <div style={{backgroundImage: 'url("/img/Sneakers/image 5-2.svg")'}} className="cartItemImg"></div>
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Kyrie 7</p>
                  <b>11 299 руб.</b>
                </div>
              <img className="remove--btn" src="/img/Card/btn-remove.jpg" alt='btn--remove' />
            </div>

            <div className="cartItem d-flex align-center mb-20">

                <div style={{backgroundImage: 'url("/img/Sneakers/image 5-1.svg")'}} className="cartItemImg"></div>
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>12 999 руб.</b>
                </div>
              <img className="remove--btn" src="/img/Card/btn-remove.jpg" alt='btn--remove' />
            </div>

          </div>

          <div className="catrTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>

            <button>Оформить заказ</button>
          </div>
        </div>

      </div>




      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt='logo' />
          <div>
            <h3 className="text-uppercase">React snekers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-10">
          <img width={18} height={18} src="/img/card.svg" alt='card' />
            <span>1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/heart.svg" alt='heart' />
          <img width={18} height={18} src="/img/user.svg" alt='user' />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search--blcok d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt='search' />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

      <div className="snekers d-flex">
        {/* карточка товара */}
        <div className="content--card">
          <div className="favorite">
            <img width={40} height={40} src="/img/Card/UnHeart.svg" alt='UnHeart' />
          </div>
          <img width={133} height={112} src="/img/Sneakers/image 5-2.svg" alt='heart' />
          <h5>Мужские Кроссовки Nike Kyrie 7</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>11 299 руб.</b>
            </div>
            <button className="button">
              <img src="/img/Card/Plus--card.svg" alt='plus--card' />
            </button>
          </div>
        </div>

        {/* карточка товара */}
        <div className="content--card">
          <div className="favorite">
            <img src="/img/Card/Heart.svg" alt='Heart' />
          </div>
          <img width={133} height={112} src="/img/Sneakers/image 5-1.svg" alt='heart' />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img src="/img/Card/Plus--card.svg" alt='plus--card' />
            </button>
          </div>
        </div>

        {/* карточка товара */}
        <div className="content--card">
          <img width={133} height={112} src="/img/Sneakers/image 5-3.svg" alt='heart' />
          <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>11 299 руб.</b>
            </div>
            {/* <button className="button">
              <img width={11} height={11} src="/img/Plus--card.svg" alt='plus--card' />
            </button> */}
            <img width={32} height={32} src="/img/Card/Check.svg" alt='Check' />
          </div>
        </div>

        {/* карточка товара */}
        <div className="content--card">
          <img width={133} height={112} src="/img/Sneakers/image 5-4.svg" alt='heart' />
          <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>10 799 руб.</b>
            </div>
            <button className="button">
              <img src="/img/Card/Plus--card.svg" alt='plus--card' />
            </button>
          </div>
        </div>

        </div>
      
      </div>
    </div>
  );
}

export default App;
