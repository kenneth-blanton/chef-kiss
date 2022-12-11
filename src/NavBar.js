import logo from './pics/favicon.jpeg';
import twitter from './pics/Twitter Logo.png';
import instagram from './pics/IG Logo.png';
import linkedin from './pics/LinkedIn.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <div className='navi'>
            <div className='top'>
                <div className='title'><Link to="/chef-kiss/">Chef Kiss</Link></div>
                <Link to="/chef-kiss/"><img src={logo} className="logo" id='logo' alt="logo" /></Link>
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
                <Link to="/chef-kiss/about">About</Link>
                <a href="about.html">About</a>
                <a href="merch.html">Merch</a>
                <a href="Recipes.html">Recipes</a>
                <a href="contact.html">Contact</a>
		    </div>
        </div>
     );
}
 
export default NavBar;