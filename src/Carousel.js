import Recipes from './recipes.json';
const Carousel = () => {
    
    return ( 
        <div className="Carousel">
                <div className="slide-track">
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
        </div>
     );
}
 
export default Carousel;