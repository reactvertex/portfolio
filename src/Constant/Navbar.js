import {ReactComponent as Home} from '../Assest/home.svg';
import {ReactComponent as Person} from '../Assest/person.svg';
import {ReactComponent as Blog} from '../Assest/blog.svg';
import {ReactComponent as Contact} from '../Assest/contact.svg';
import {ReactComponent as Portfolio} from '../Assest/portfolio.svg';


export const NavIconsList = [
    {   
        index : 1,
        label : 'Home',
        path : '/',
        Icon : <Home />
    },
    {
        index : 2,
        label : 'About',
        path : '/about',
        Icon : <Person />
    },
    {
        index : 3,
        label : 'Portfolio',
        path : '/portfolio',
        Icon : <Portfolio />
    },
    {
        index : 4,
        label : 'Contact',
        path : '/contact',
        Icon : <Contact />
    },
    {
        index : 5,
        label : 'Blog',
        path : '/blog',
        Icon : <Blog />
    }
]