import logo from '../images/icons_assets/Logo.svg'
import Nav from './Nav';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/"><img src={logo} height={41}/></Link>
            <Nav />
        </header>
    )
};

export default Header;