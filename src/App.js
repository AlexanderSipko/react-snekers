


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
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
