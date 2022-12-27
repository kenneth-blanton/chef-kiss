
import HeadShot from './images/Headshot.jpeg';

const About = () => {

    return ( 
        <div className="About">
                <div className='front'>
                    <img src={HeadShot} alt="headshot" id='headshot'/>
                    <div className='frontCap'>
                        <p>Self taught chef specializing in Seasoned Cuisine and Stress Free Dining. 
                        Sit back and relax while Chef Moody handles your game night, girls night, 
                        and date night appetite. From finger foods to fine dining, all meals provide 
                        that homemade feel and a stress reliving mood.</p>
                        </div>
                </div>
        </div>
     );
}
 
export default About;