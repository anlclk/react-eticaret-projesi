import products from "~/data"



export default function ManProducts() {
    const manProductsList = products.filter(x => x.gender === 'Erkek');
    return(
        manProductsList.map(product => (
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