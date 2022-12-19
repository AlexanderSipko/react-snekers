
import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
 
function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false);

  const onOpenCard = () => {
    setCardOpened(!cardOpened)
  }

  React.useEffect( () => {
    //   fetch('https://639f645c5eb8889197fbd54a.mockapi.io/items').then( res => {
    //   return res.json()
    // }).then( json => { setItems(json) })
    axios.get('https://639f645c5eb8889197fbd54a.mockapi.io/items').then( (res) => setItems(res.data) )
  }, [])

  const onAddToCard = (obj) => {

    setCartItems( prev => [...prev, obj] )
  }

  function CreateCard() {
    // создание списка компонентов с помощью массива
    return (items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
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
 
  const onChangeSearchInput = (event) => {
    setSearchValue( event.target.value )
  }

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={ cartItems }  onClose={ onOpenCard } /> }
      <Header onClickCard={ onOpenCard } />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
        <h1>{ searchValue ? `Поиск по запросу: "${ searchValue }"` : 'Все кроссовки' } </h1>
          
          <div className="search--blcok d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt='search' />

            { searchValue && (
              <img 
                onClick={ () => setSearchValue('') }
                className="clear cu-p"
                src="/img/Card/btn-remove.jpg"
                alt='Clear'
              />
            )}
            <input onChange={ onChangeSearchInput } value={ searchValue } placeholder="Поиск..."></input>
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
