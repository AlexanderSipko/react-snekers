


function App() {
  return (
    <div className="wrapper">
      <heder>
        <div className="headerLeft">
          <img src="/img/logo.svg" alt='logo' />
          <div className="headerInfo">
            <h3>React snekers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>1205 руб.</span>
          </li>
          <li>
            <svg />
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
