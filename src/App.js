


function App() {


  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt='logo' />
          <div>
            <h3 className="text-uppercase">React snekers</h3>
            <p>Магазин лучших кросовок</p>
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
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="content--card">
          <img width={133} height={112} src="/img/Sneakers/image 5-1.svg" alt='heart' />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/Plus--card.svg" alt='plus--card' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
