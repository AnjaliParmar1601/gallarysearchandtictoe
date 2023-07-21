import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { product } from './Data'
import '../App.css';
export default function Home() {
  const [image,setImage]=useState("")
  const [data,setData]=useState(product)
  
  const searchResult=()=>{
     let checkdata = data?.filter((elem)=>{
       return elem.title.toLowerCase().includes(image.toLowerCase())
     })
     setData(checkdata)
     console.log("checkdata",checkdata)
     if (checkdata.length === 0 ){
      setData(product)
      alert ("no match found")
    }
  }
  const onChangevalue=(e)=>{
    setImage(e.target.value)
    console.log("image",e.target.value.length)
    if(e.target.value.length == 0){
      setData(product)
    }
  }
  return (
    <>
    <Header/>
   <div className='container'>
   <input type="text"  placeholder="search here" onChange={onChangevalue}/>
     <button onClick={searchResult}>Search</button>
      <div className='main-div'>
      
    {
      data?.map((item)=>{
        return(
         <>
          <div><img src={item.image} style={{width:100,height:100}}/></div>
          
         </>
        )
      })
    }
  
      </div>
   </div>
    </>
  )
}
