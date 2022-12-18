
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
 
function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);

  const onOpenCard = () => {
    setCardOpened(!cardOpened)
  }

  React.useEffect( () => {
      fetch('https://639f645c5eb8889197fbd54a.mockapi.io/items').then( res => {
      return res.json()
    }).then( json => { setItems(json) })
  }, [])

  const onAddToCard = (obj) => {

    setCartItems( prev => [...prev, obj] )
  }

  function CreateCard() {
    // создание списка компонентов с помощью массива
    return (items.map((item) =>
      <Card
        key={item.id}
        titel={item.name}
        price={item.price}
        imgeUrl={item.imgeUrl}
        onFavorite = {() => console.log(item.id + ' favorite')}
        onPlus = { (obj) => { onAddToCard(obj) } }
      />
    )
    )
  };

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={ cartItems }  onClose={ onOpenCard } /> }
      <Header onClickCard={ onOpenCard } />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search--blcok d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt='search' />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="snekers d-flex">

          { CreateCard() }
        
        </div>
      </div>
    </div>
  );
}

export default App;
