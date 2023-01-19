import Card from './Card';
import style from "./Cards.module.css";


export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         <ul className={style.cards}>
            {characters.map(character => (
               <Card
               name={character.name} 
               species={character.species} 
               gender={character.gender} 
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            ))}
         </ul>
      </div>
   );
}
