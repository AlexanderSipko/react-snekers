
import React from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
// import Card from "./components/Card";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home'
import Favorites from './pages/Favorites'
 
function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartFavorits, setCartFavorits] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false);

  // добавлен хук для подсчета количества фаворитов
  // const [countItemsFavorites, setCountItemsFavorites] = React.useState(0);

  const onOpenCard = () => {
    setCardOpened(!cardOpened)
  }

  React.useEffect( () => {
    //   fetch('https://639f645c5eb8889197fbd54a.mockapi.io/items').then( res => {
    //   return res.json()
    // }).then( json => { setItems(json) })
    axios.get('https://639f645c5eb8889197fbd54a.mockapi.io/items').then( 
      (res) => setItems(res.data) 
    )
    axios.get('https://639f645c5eb8889197fbd54a.mockapi.io/cart').then( 
      (res) => setCartItems(res.data) 
    )
    axios.get('https://639f645c5eb8889197fbd54a.mockapi.io/favorites').then( 
      (res) => {
        setCartFavorits(res.data);
        // setCountItemsFavorites(res.data.length)
      }
    )
  
  }, [])

  const onAddToCard = (obj) => {
    axios.post('https://639f645c5eb8889197fbd54a.mockapi.io/cart', obj)
    setCartItems( prev => [...prev, obj] )
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://639f645c5eb8889197fbd54a.mockapi.io/cart/${id}`)
    setCartItems( (prev) => prev.filter( item => item.id !== id) )
  }

  const onAddToFavorites = async (obj) => {
    // TODO сделать два разных методоа для добавления в массив и для удаления
    try {
      if (cartFavorits.find( item => item.id === obj.id )) {
        axios.delete(`https://639f645c5eb8889197fbd54a.mockapi.io/favorites/${obj.id}`)
        // setCartFavorits( (prev) => prev.filter( item => item.id !== obj.id) )
        // setCartFavorits( (prev) => [...prev]  )
        // setCountItemsFavorites( (prev) => prev - 1)

      } else {
        const { data } = await axios.post('https://639f645c5eb8889197fbd54a.mockapi.io/favorites', obj)
        setCartFavorits( prev => [...prev, data] )
        // setCountItemsFavorites( (prev) => prev + 1)
      }
    } catch( error ) {
      alert('Не удалось добавить в фавориты')
    }
    
  }
 
  const onChangeSearchInput = (event) => {
    setSearchValue( event.target.value )
  }

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={ cartItems }  onClose={ onOpenCard } onRemove={onRemoveItem} /> }
      
      <Header onClickCard={ onOpenCard } />

      <Routes>
        <Route exact path="/" element={
          <Home
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            items={items}
            onAddToFavorites={onAddToFavorites}
            onAddToCard={onAddToCard}
            favorite={false}
          />
        }></Route>
        <Route exact path='/favorites' element={
          <Favorites
            items={cartFavorits}
            onAddToFavorites={onAddToFavorites}
            onAddToCard={onAddToCard}
            favorite={true}
            // countItemsFavorites={countItemsFavorites}
          />
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
