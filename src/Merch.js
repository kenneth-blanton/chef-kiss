import Merchandise from "./merch.json";

const Merch = () => {
  return (
    <div className="home">
      {Merchandise &&
        Merchandise.map((merch) => {
          return (
            <div className="bigCard" key={merch.id}>
              <img src={merch.image} alt="" />
              <p>{merch.caption}</p>
              <a href={merch.link}>
                <button>{merch.cost}</button>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default Merch;
