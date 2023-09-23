import products from "~/data"



export default function Home() {
    return(
        products.map(product => (
            <div key={product.id} className="card">
                <img src={product.url}/>
                <h3>{product.name}</h3>
                <div className="cardDetails">
                    <p>{product.price} TL</p>
                    <button className="basketBtn">Sepete Ekle</button>
                </div>
            </div>
        ))
    )
}