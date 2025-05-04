import logo from './logo.svg';
import './App.css';
import Navbar from './Mini parts/Navbar';
import Home from './Mini parts/Home';
import Footer from './Mini parts/Footer';
import React,{useEffect,useState} from 'react';
import axios from 'axios';

export const productContext= React.createContext()
export const productContext2= React.createContext()

function App() {
  const URL1 = `https://fakestoreapi.in/api/products`;
  const URL2 = `https://fakestoreapi.com/products`;
  const URL3 = `https://fakestoreapi.com/products`;

    const [products, setProducts] = useState(``);
    const [products2, setProducts2] = useState(``);
    const [products3, setProducts3] = useState(``);

useEffect(()=>{
  axios
  .get(`https://fakestoreapi.in/api/products`)
  .then((response) => {
    setProducts(response.data.products);
  })
  .catch((error) => {
    console.log(error);
  });
axios
  .get(URL2)
  .then((response) => {
    setProducts2(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
axios
  .get(`https://api.escuelajs.co/api/v1/products`)
  .then((response) => {
    setProducts3(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

},[])

  return (
    <>
    <productContext.Provider value={products}>
    <productContext2.Provider value={products2}>
    <Navbar />
    <Home/>
    <Footer/>
    </productContext2.Provider>
    </productContext.Provider>
    </>
  );
}

export default App;
