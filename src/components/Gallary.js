import React from 'react'
import Header from "./Header"
import { product } from './Data'
import { useState } from 'react'
export default function Gallary() {
    const [data , setData]=useState(product)
    const [image , setImage]=useState([])
    const searchResult=()=>{
        let checkdata = data?.filter((elem)=>{
          return elem.title.toLowerCase().includes(image.toLowerCase())
        })
        setData(checkdata)
        //let checkdata = cimage.includes(image)
        console.log("checkdata",checkdata)
        console.log("image",image)
    }
    const onChangevalue=(e)=>{
      setImage(e.target.value)
         if(image )
          console.log("e",e)

    }
  return (
    <>
      <Header />
      <div>Gallary</div>
      <input type="text"  placeholder='search here' onChange={onChangevalue}/>
      <button onClick={()=>searchResult()}>search</button>
      {
        data?.map((item)=>{
            return(
              
            <div>
            <img src={item.image} style={{width:50 , height:50}}/>
        </div>
            )
        })
      }
    </>
  )
}


