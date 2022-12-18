
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [
  { id:1, name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imgeUrl:"/img/Sneakers/image 5-2.svg"},
  { id:2, name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imgeUrl:"/img/Sneakers/image 5-1.svg"},
  { id:3, name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgeUrl:"/img/Sneakers/image 5-9.svg"},
  { id:4, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgeUrl:"/img/Sneakers/image 5-7.svg"}

]

function App() {

  function CreateCard() {
    // создание списка компонентов с помощью массива
    return arr.map((obj) =>
      <Card
        key={obj.id}
        titel={obj.name}
        price={obj.price}
        imgeUrl={obj.imgeUrl}
        onFavorite = {() => console.log(obj.id + ' favorite')}
      />
    )
  }
  
  const [cardOpened, setCardOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cardOpened ? <Drawer onClickCard={ () => { setCardOpened(!cardOpened)}} />: null }
      <Header onClickCard={ () => { setCardOpened(!cardOpened)}} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search--blcok d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt='search' />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="snekers d-flex">

          {CreateCard()}
          {/* <Card 
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
        /> */}
        </div>

      </div>
    </div>
  );
}

export default App;
