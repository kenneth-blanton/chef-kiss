import logo from './images/favicon.jpeg';
import twitter from './images/Twitter Logo.png';
import instagram from './images/IG Logo.png';
import linkedin from './images/LinkedIn.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    return (
        <div className='navi'>
            <div className='top'>
                
                <Link className='title' to="/">Chef Kiss</Link>
                <Link to="/"><img src={logo} className="logo" id='logo' alt="logo" /></Link>
                <div className='socials'>
                <a href="https://twitter.com/ChefKiss_ULTD">
                        <img src={twitter} alt='twitter'/>
                    </a>

                    <a href="https://www.instagram.com/chef.kiss_/">
                        <img src={instagram} alt='instagram'/>
                    </a>
                    <a href="https://www.linkedin.com/in/chef-kiss-unlimited-llc-6359b4232/">
                        <img src={linkedin} alt='linkedin'/>
                    </a>
                </div>
            </div>
            <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/merch">Merch</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/contact">Contact</Link>
		    </div>
        </div>
     );
}
 
export default NavBar;