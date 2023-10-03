import Card from '../card/Card';
import '../cards/cards.css'
// import './styles.css';

export default function Cards({characters, onClose}) {
   return (
      <div className = "card-container"> {
         characters.map(({id, name, status, species, gender, origin, image})=> {
            return (
               <Card
                  key = {id}
                  id = {id}
                  name = {name}
                  species = {species}
                  status = {status}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image}
                  onClose = {onClose}
               />)
            })
         }      
      </div>
   );
   
}
