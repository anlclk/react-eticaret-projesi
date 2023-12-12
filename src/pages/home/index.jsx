import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient('https://rceavizwdfumfwcligdo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c')




export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const { data, error } = await supabase.from('product').select()
            console.log(data);
            if(error) {
                console.log(error);
            }
            setProducts(data);
        }
        getProducts();
    }, []);

  return(
    products.map(x => (
        <div key={x.id} className='card'>
            <img src={x.image} />
            <div className='cardCaption'>
                <h3>{x.name}</h3>
                <h6>{x.description}</h6>
            </div>
            <div className='cardDetails'>
                <h4>{x.price} TL</h4>
                <button className='basketBtn'>Sepete Ekle</button>
            </div>
        </div>
    ))
  );
}