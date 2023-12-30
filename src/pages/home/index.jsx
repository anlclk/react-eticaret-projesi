import { useEffect, useState } from 'react';
import supabase from '~/assets/supabase/supabase';



export default function Home() {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);
    const [totell, setTotalPrice] = useState(0);

    async function handleAddBasket(basketProducts) {
        if(basket.some(item => item.id === basketProducts.id)) {
            return;
        }
        console.log(basketProducts.id)
        const { data: product, error } = await supabase.from('product').select('*').eq('id', basketProducts.id);
        
        const updateStock = product[0].stock - 1;

        const { data, error: updateError } = await supabase.from('product').update({ stock: updateStock }).eq('id', product[0].id)
        .select('id')
        if(basket.id === basketProducts.id) {
            return;
        }else {
            setBasket([...basket, basketProducts]);
        }
        
    }

    useEffect(() => {
        async function getProducts() {
            const { data, error } = await supabase.from('product').select().order('created_at')
            if(error) {
                console.log(error);
            }
            setProducts(data);
        }
        getProducts();
    }, []);

    useEffect(() => {
        totalPriceInBasket();
    }, [basket]);

    const totalPriceInBasket = () => {
        const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(totalPrice)
    }
    

  return(
    <>
        {products.map(x => (
            <div key={x.id} className={x.stock > 0 ? 'card' : 'softCard'}>
                <img src={x.image} />
                <div className='cardCaption'>
                    <h3>{x.name}</h3>
                    <h6>{x.description}</h6>
                </div>
                <div className='cardDetails'>
                    <h4>{x.price} TL</h4>
                    {x.stock > 0 ? ( <button className='basketBtn' onClick={() => handleAddBasket(x)}>Sepete Ekle</button> ) : ( <button disabled className='stockBtn'>Ürün tükendi</button> )
                    }
                </div>
            </div>
        ))}
        <details className="basketArea">
            <summary>Sepetim</summary>
            <ul>
                {basket.map((x) => <li key={x.id} className='basketinProduct'>
                    <img src={x.image} className='basketinImg' alt="" />
                    <h4>{x.name}</h4>
                    <p>{x.description}</p>
                    <p>{x.price} TL</p>
                </li>)}
                
            </ul>
            <h3>Toplam Tutar: {totell} TL</h3>
            <button className='completeOrder'>Siparişi Tamamla</button>
        </details>
    </>
  );
}