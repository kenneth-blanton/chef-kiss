import Recipes from './recipes.json';
const Carousel = () => {
    
    return ( 
        <div className="Carousel">
                <div className="slide-track">
                    {Recipes && Recipes.map((recipe) => {
                        return(
                            <div className='card' key={recipe.id}>
                                    <img src={recipe.image} alt=""/>
                                    <p>{recipe.shortcap}</p>
                            </div>
                            )
                        }
                        )}
                    {Recipes && Recipes.map((recipe) => {
                        return(
                            <div className='card' key={recipe.id}>
                                    <img src={recipe.image} alt=""/>
                                    <p>{recipe.shortcap}</p>
                            </div>
                            )
                        }
                        )}
                    {Recipes && Recipes.map((recipe) => {
                    return(
                        <div className='card' key={recipe.id}>
                                <img src={recipe.image} alt=""/>
                                <p>{recipe.shortcap}</p>
                        </div>
                        )
                    }
                    )}
                    {Recipes && Recipes.map((recipe) => {
                    return(
                        <div className='card' key={recipe.id}>
                                <img src={recipe.image} alt=""/>
                                <p>{recipe.shortcap}</p>
                        </div>
                        )
                    }
                    )}
                    {Recipes && Recipes.map((recipe) => {
                    return(
                        <div className='card' key={recipe.id}>
                                <img src={recipe.image} alt=""/>
                                <p>{recipe.shortcap}</p>
                        </div>
                        )
                    }
                    )}
                </div>
        </div>
     );
}
 
export default Carousel;