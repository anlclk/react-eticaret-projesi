import Logo from './logo'
import UserNav from './navuser'
import BasketNav from './basketnav'

export default function HeaderBar() {
    return(
        <header className="header">
           <Logo />
           <ul className='headerNav'>
             <UserNav />
             <BasketNav />
           </ul>
           
        </header>
    )
}