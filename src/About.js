import HeadShot from './pics/IMG_0753.jpeg';

const About = () => {

    return ( 
        <div className="About">
                <figure className='front'>
                    <img src={HeadShot} alt="headshot" id='headshot'/>
                    <figcaption className='frontCap'><p>Self taught chef specializing in Seasoned Cuisine and Stress Free Dining. 
                        Sit back and relax while Chef Moody handles your game night, girls night, 
                        and date night appetite. From finger foods to fine dining, all meals provide 
                        that homemade feel and a stress reliving mood.</p></figcaption>
                </figure>
        </div>
     );
}
 
export default About;