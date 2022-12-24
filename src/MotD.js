import wings from './pics/198594927_636978533929362_5895823369253501036_n.jpg';
import blackened from './pics/247517404_592283551982612_2788117762222762960_n.jpg';
import hggs from './pics/Honey Garlic Glazed Salmon.png';
import sliders from './pics/185357711_237301591503396_204375435692852698_n.jpg';
import Recipes from './recipes.json';

const MotD = () => {

    console.log(Recipes);

    var captions = ["Air fried Lemon Pepper Buffalo Wings served with baked Cajun Parmesan fries!!! 🥵🔥🐓",
                "Blackened Salmon, Shrimp Fettuccine drizzled with Gouda White Wine Sauce, Asparagus, and Garlic Bread!🤤👨🏾‍🍳.",
                "Honey Garlic Glazed Salmon 🍽",
                "Salmon, Lettuce, Pepper Jack Cheese, Onions, and Pickles, Honey Mustard on toasted Sweet Hawaiian Rolls! 👌🏾👌🏾👌🏾"];
    var images = [wings, blackened, hggs, sliders];
    var links = ["Recipes.html"];
    var d = new Date().getDay();

    if (d > captions.length) {
        d = Math.floor(Math.random() * captions.length);
    }
    console.log(d = Math.floor(Math.random() * captions.length))

    return ( 
        <div className="motd">
            <div className='mealTitle'><h1>Meal of the Day</h1></div>
            <div className='meal'>
                <img src={images[d]} alt="mealPic" id='mealPic'/>
                <div className='mealText'>
                    <p className='mealCap'>{captions[d]}</p>
                    <button className='mealLink'>{links}</button>
                </div>
            </div>
        </div>
     );
}
 
export default MotD;