import React, { useState } from 'react'
import cardData from "./cardsdata"
import './cards.css'


function Cards() {
    const [items,setItmes] = useState(cardData);
    

    const [expendedItems,setExpendedItems] = useState([0])
    const toReadmore = (id)=>{
        setExpendedItems((prev)=>
            
            prev.includes(id) ? prev.filter((itemId)=> itemId !==id) : [...prev, id]
        )

     }
    

  return (
    <div className="sec">
    <div className='container'>
        <div>
            <h1> latest post</h1>

        </div>
        <div className="food_cards">
            {items.map((item)=>(
                <div key={item.id} className="product_cards">
                
                <div  className='cardsContent'>
                    <div className="cardImg">
                        <img className='foodIMG' src={require(`./cardsimage/${item.img}`)} alt="" />
                    </div>
                        <div className="content_sec">
                            <h5 className='head'>{item.head}</h5>
                            <h6>{expendedItems.includes(item.id) ? item.text : `${item.text.slice(0,80)}...`}</h6>
                            <button onClick={()=> toReadmore(item.id)} className='readBtn'>
                                {expendedItems.includes(item.id) ? "show less" : "readMore"}
                            </button>
                        </div>
                </div>
            </div>


            )) }
            
        </div>
    </div>
    </div>
  )
}

export default Cards
