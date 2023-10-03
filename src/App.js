// import './App.css';
// import Card from './components/Card.jsx';
// import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';

// function App() {
//    return (
//       <div className='App'>
//          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
//          <Cards characters={characters} />
//          <Card
//             id={Rick.id}
//             name={Rick.name}
//             status={Rick.status}
//             species={Rick.species}
//             gender={Rick.gender}
//             origin={Rick.origin.name}
//             image={Rick.image}
//             onClose={() => window.alert('Emulamos que se cierra la card')}
//          />
//       </div>
//    );
// }

// export default App;
///////////////////////////////////////////////////////////



import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/details/Detail';
import Form from './components/Form/Form';

// const URL_BASE = 'htpps://be-a-rym.up.railway.app/api/character'
// const API_KEY = '921c53ed19ee.c07a3c34e20b05d4765f'

const email = 'luischima689@gmail.com'
const password = '12345abc'



function App() {

   const location = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if(userData.password === password && userData.email === email){
         setAccess(true);
         navigate('/home');
      }
   }
 
   useEffect(() => {
      !access && navigate('/')
   }, [access])

      const onSearch = (id)=>{
         // Otra opción para usar axios:
         // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {}
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(response=> response.data).then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
      }

      const onClose= (id)=> {   
             const filteredCharacters = characters.filter(character => character.id!== Number(id))
             setCharacters(filteredCharacters)
      }

      return (
         <div className='App'>    
            {
               location.pathname !== '/' && <Nav onSearch= {onSearch} />
            }
                 
               <Routes>
                  <Route path="/" element={<Form login={login}/>} />      
                  <Route path="/home" element={<Cards characters={characters} onClose={onClose} /> } />
                  <Route path="/about" element ={<About />} />
                  <Route path="/detail/:id" element={<Detail/>} />                      
               </Routes>
                
         </div>
      );
}

export default App;
