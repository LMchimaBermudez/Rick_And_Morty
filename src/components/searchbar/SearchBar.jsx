// export default function SearchBar(props) {
//    return (
//       <div>
//          <input type='search' placeholder="Buscar personaje"/>
//          <button onClick={props.onSearch}>Agregar</button>
//       </div>
//    );
// }
import { useState } from "react"; 

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('')

      const handleChange = (event) => {         
         setId(event.target.value);                 
      } 

   return (
      <div>
         <input type='search'  placeholder= 'Buscar personaje por ID' onChange= {handleChange} value={id} />
         <button onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}