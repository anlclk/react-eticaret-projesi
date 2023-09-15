import Logo from './logo'
import UserNav from './navuser'
import BasketNav from './basketnav'

export default function HeaderBar() {
    return(
        <header className="header">
           <Logo />
           <div>
            <UserNav />
           </div>
           <div>
            <BasketNav />
           </div>
        </header>
    )
}