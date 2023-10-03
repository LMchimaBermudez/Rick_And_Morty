import React from "react"
import SearchBar from '../searchbar/SearchBar'
import { Link } from "react-router-dom"


export default function Nav({ onSearch }){
   return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/about'>ABOUT ME</Link>
            </button>
            <button>  
                <Link to='/home'>HOME</Link>
            </button>
        </nav> 
    )    
}