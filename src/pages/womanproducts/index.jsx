import { useState } from "react";
import products from "~/data";



export default function WomanProducts() {
    const [cart, setCart] = useState([]);
    const addToCart = (products) => {
        setCart([...cart, products]);
    }
    const womanProductsList = products.filter(x => x.gender === 'Kadın');
    return(
        womanProductsList.map(product => (
            <div key={product.id} className="card">
                <img src={product.url}/>
                <h3>{product.name}</h3>
                <div className="cardDetails">
                    <p>{product.price} TL</p>
                    <button className="basketBtn" onClick={() => addToCart(products)}>Sepete Ekle</button>    
                </div>
            </div>
        ))
    )
}