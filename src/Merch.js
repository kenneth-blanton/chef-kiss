import Merchandise from "./merch.json";

const Merch = () => {
  return (
    <div className="home">
      {Merchandise &&
        Merchandise.map((merch) => {
          return (
            <div className="bigCard" key={merch.id}>
              <img src={merch.image} alt="" />
              <h4>{merch.caption}</h4>
              <a href={merch.link}>
                <button>${merch.cost}</button>
              </a>
              <ul>
                {merch.notes.map((note) => {
                  return <li>{note}</li>;
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Merch;
