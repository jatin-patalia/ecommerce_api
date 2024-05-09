import { useEffect, useState } from 'react';
import './App.css';
import Catagory from './Catagory';
import axios from 'axios';

function App() {
  const [finalCategory, setFinalCategory] = useState([])
  const [finalProduct, setFinalProduct] = useState([])
  const [catName, setCatName]=useState('')

  const getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      })
  }

  const getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finalProRes) => {
        setFinalProduct(finalProRes.products);
      })
  }

  useEffect(() => {
    getCategory();
    getProducts();
  }, [])

  useEffect(()=>{
    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes) => proRes.data)
      .then((finalProRes) => {
        console.log(finalProRes.products);
        setFinalProduct(finalProRes.products);
      })

    }
  },[catName])

  const pItems = finalProduct.map((item, index) => {
    return (
      <ProductsItems key={index} pData={item} />
    )

  })
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center font-bold text-[30px] mb-[30px]'>Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Catagory finalCategory={finalCategory} setCatName={setCatName} />
            </div>

            <div className='grid grid-cols-3 gap-6 h-[300px]'>
              {
              finalProduct.length>=1 ? pItems:
              <img src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' alt='loader'/>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductsItems({ pData }) {
  return (
    <div className='shadow-lg text-center pb-4 w-[100%] h-[300px]'>
      <img alt="necklace " src={pData.thumbnail} className='w-[100%] h-[200px]' />
      <h4>{pData.title} </h4>
      <b> Rs. {pData.price} </b>
    </div>
  )
}
