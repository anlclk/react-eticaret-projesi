import { useState } from "react";
import products from "~/data"

export default function BagProducts() {
    const [cart, setCart] = useState([]);
    const addToCart = (products) => {
        setCart([...cart, products]);
    }
    const bagProductsList = products.filter(x => x.type === 'Çanta');
    return(
        bagProductsList.map(product => (
            <div key={product.id} className="card">
                <img src={product.url}/>
                <h3>{product.name}</h3>
                <div className="cardDetails">
                    <p>{product.price} TL</p>
                    <button className="basketBtn" onClick={() => addToCart(products)} ></button>
                </div>
            </div>
        ))
    )
}