import Merchandise from './merch.json';

const Merch = () => {
    return ( 
        <div className="home">
            {Merchandise && Merchandise.map((merch) => {
                        return(
                            <div className='bigCard' key={merch.id}>
                                    <img src={merch.image} alt=""/>
                                    <p>{merch.caption}</p>
                                    <button>Coming Soon ({merch.cost})</button>
                            </div>
                            )
                        }
                        )}
        </div>
     );
}
 
export default Merch;