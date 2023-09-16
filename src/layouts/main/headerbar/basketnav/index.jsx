import { Link } from 'react-router-dom';
import Basket from '~/img/shoppingBasket.svg';

export default function BasketNav() {
    return(
        <Link className='accountBasket'>
            <img src={Basket}/>
            <h4>Sepetim</h4>
        </Link>
    )
}