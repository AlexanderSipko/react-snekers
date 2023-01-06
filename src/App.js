
import React from "react";
import axios from "axios";
import { Route, Routes, Link } from 'react-router-dom';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
 
function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartFavorits, setCartFavorits] = React.useState([]);
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
    axios.get('https://639f645c5eb8889197fbd54a.mockapi.io/cart').then( (res) => setCartItems(res.data) )
  }, [])

  const onAddToCard = (obj) => {
    axios.post('https://639f645c5eb8889197fbd54a.mockapi.io/cart', obj)
    setCartItems( prev => [...prev, obj] )
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://639f645c5eb8889197fbd54a.mockapi.io/cart/${id}`)
    setCartItems( (prev) => prev.filter( item => item.id !== id) )
  }

  const onAddToFavorites = (obj) => {
    axios.post('https://639f645c5eb8889197fbd54a.mockapi.io/favorites', obj)
    setCartFavorits( prev => [...prev, obj] )
    console.log(cartFavorits)
  }

  function CreateCard() {
    // создание списка компонентов с помощью массива
    return (items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
        <Card
          key={item.imgeUrl}
          id={item.id}
          titel={item.name}
          price={item.price}
          imgeUrl={item.imgeUrl}
          
          addFavorites = { onAddToFavorites }
          onPlus = { onAddToCard }
        />
      )
    )
  };
 
  const onChangeSearchInput = (event) => {
    setSearchValue( event.target.value )
  }

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={ cartItems }  onClose={ onOpenCard } onRemove={onRemoveItem} /> }
      
      <Header onClickCard={ onOpenCard } />

      <Routes>
        {/* <Route path="/" exact  element={<Header onClickCard={ onOpenCard } />}></Route> */}
        <Route path='/favorites' element={
          <Link to='/' >
            hi i'm link router and i can turn the back :)
          </Link>
          }></Route>
      </Routes>

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
