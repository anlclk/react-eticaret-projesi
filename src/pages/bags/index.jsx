import { useEffect, useState } from "react";
import supabase from "~/assets/supabase/supabase";


export default function BagProducts() {
    const [bags, setBags] = useState([]);

    useEffect(() => {
        async function getBags() {
            const { data: product, error } = await supabase.from('product').select('*').eq('type', 'Çanta');
            setBags(product);
        }
        getBags();
    }, [])

    return(
        bags.map(x => (
            <div key={x.id} className="card">
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