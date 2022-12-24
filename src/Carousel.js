import Recipes from './recipes.json';
console.log(Recipes[0].image)
const Carousel = () => {
    
    return ( 
        <div className="Carousel">

            {Recipes && Recipes.map((recipe) => {
                    return(
                        <div className='card' key={recipe.id}>
                            <div className='cardImage'>
                                <img src={recipe.image} alt=""/>
                            </div>
                            <div className='cardBody'>
                                <p>{recipe.shortcap}</p>
                            </div>
                        </div>
                    )
                }
                )}
        </div>
     );
}
 
export default Carousel;