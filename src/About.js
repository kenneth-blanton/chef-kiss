import HeadShot from './pics/IMG_0753.jpeg';

const About = () => {
    return ( 
        <div className="About">
            <div className="mainRunner">
                <img src={HeadShot} alt="headshot"/>
                <div id="Bio">
                Self taught chef specializing in <br/> Seasoned Cuisine and Stress Free Dining. <br/> Sit back and relax while Chef Moody handles <br/> your game night, girls night, and date night appetite. <br/> From finger foods to fine dining, all meals provide <br/> that homemade feel and a stress reliving mood.
                </div>
            </div>
        </div>
     );
}
 
export default About;