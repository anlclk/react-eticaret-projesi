import { Link } from 'react-router-dom';
import Basket from '~/img/shoppingBasket.svg';


export default function BasketNav() {
    return(
        <Link className='accountBasket'>
            <div className='basketIcon'>
                <img src={Basket}/>
            </div>
            <h4>Sepetim</h4>
        </Link>
    )
}