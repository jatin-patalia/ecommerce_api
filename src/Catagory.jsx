import React from 'react'

function Catagory({ finalCategory, setCatName }) {
  const cat = finalCategory.map((value, index) => {
    return (
      <li key={index} onClick={()=>setCatName(value)} className='p-[7px] bg-[#ccc] cursor-pointer text-[20px] font-serif font-500 mb-2'>
        {value}
      </li>
    )
  })

  return (
    <>
      <div className='font-500 text-[25px] p-[10px]'>Catagory</div>
      <ul>
        {cat}
      </ul>
    </>
  )
}

export default Catagory