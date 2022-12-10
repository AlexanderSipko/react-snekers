
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search--blcok d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt='search' />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

      <div className="snekers d-flex">
        <Card 
          titel='Мужские Кроссовки Nike Kyrie 7'
          img="/img/Card/UnHeart.svg"
          img2="/img/Sneakers/image 5-2.svg"
          price='11 299'
          type='false'
        />

        <Card 
          titel='Мужские Кроссовки Nike Blazer Mid Suede'
          img="/img/Card/UnHeart.svg"
          img2="/img/Sneakers/image 5-1.svg"
          price='12 999'
          type='true'
        />

        <Card 
          titel='Мужские Кроссовки Nike Kyrie Flytrap IV'
          img="/img/Card/Heart.svg"
          img2="/img/Sneakers/image 5-3.svg"
          price='11 299'
          type='false'
        />

        <Card 
          titel='Мужские Кроссовки Jordan Air Jordan 11'
          img="/img/Card/Heart.svg"
          img2="/img/Sneakers/image 5-4.svg"
          price='10 799'
          type='false'
        />
      </div>
      
      </div>
    </div>
  );
}

export default App;
