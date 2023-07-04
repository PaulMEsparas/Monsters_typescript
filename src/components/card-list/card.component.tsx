import "./card-list.css";
import { Monster } from "../../App";

type CardProps = {
  monsters: Monster[];
};

const Card = ({ monsters }: CardProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <div key={monster.id} className="card-container">
            <img
              src={`https://robohash.org/${monster.id}?set=set2`}
              alt={`monster ${monster.name}`}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
