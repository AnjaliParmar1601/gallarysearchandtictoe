import React, { useState } from 'react'
import '../App.css'
import Header from './Header'
export default function Tictoe() {
    const [box , setBox]= useState(Array(9).fill(''))
    const [move,setMove]=useState('x')
    const onClickchange=(n)=>{
        console.log("clicked",n)
        let square = [...box]
        if (box[n] !== ''){
            alert("already filled")
            return
        }
        square[n]=move
        setBox(square)
        console.log("move",move)
        
        
        if(move === 'x'){
            setMove('o')
        }
        else{
            setMove('x')
        }
       if( checkIn(square)){
          if (move == 'x'){
            alert("x is winner")
            setBox(" ")
          }
          else{
            alert("o is winner")
            setBox(" ")
          }
       }

    }
    const checkIn = (box)=>{
        const conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag = false;
        conditions.forEach(element=>{
            console.log(element)
            if(box[element[0]] !== '' && box[element[1]] !== '' && box[element[2]]!== ''){
              if (box[element[0]]===box[element[1]] && box[element[1]]===box[element[2]]){
               flag=true;
        }
    }
        });
        return(flag)
        console.log(flag);
    }
  return (
    <>
    <Header />
    <h1 className='text-center'>Tic Tac Toe </h1>
    <table>
        <tbody>
            <tr>
                <td onClick={()=>onClickchange(0)}>{box[0]}</td>
                <td onClick={()=>onClickchange(1)}>{box[1]}</td>
                <td onClick={()=>onClickchange(2)}>{box[2]}</td>
            </tr>
            <tr>
                <td onClick={()=>onClickchange(3)}>{box[3]}</td>
                <td onClick={()=>onClickchange(4)}>{box[4]}</td>
                <td onClick={()=>onClickchange(5)}>{box[5]}</td>
            </tr>
            <tr>
                <td onClick={()=>onClickchange(6)}>{box[6]}</td>
                <td onClick={()=>onClickchange(7)}>{box[7]}</td>
                <td onClick={()=>onClickchange(8)}>{box[8]}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}
