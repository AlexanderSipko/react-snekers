


function App() {


  return (
    <div className="wrapper">
      <heder>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg" alt='logo' />
          <div className="headerInfo">
            <h3>React snekers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
          <img width={18} height={18} src="/img/heart.svg" alt='heart' />
            <span>1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt='user' />
          </li>
        </ul>
      </heder>
      <div className="content">
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
