import User from '~/img/userIcon.svg'
import { Link } from 'react-router-dom';

export default function UserNav() {
    return(
        <Link className='accountUser'>
            <img src={User}/>
            <h4>Hesabım</h4>
        </Link>
    )
}