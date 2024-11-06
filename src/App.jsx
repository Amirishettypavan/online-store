
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import './App.css'
import Wishlist from './components/Wishlist'
import Category from './components/Category'
import Item from './components/Item'
// import style from './app.css'


function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/item' element={<Item/>}/>
      </Routes>
    </div>
  )
}

export default App
