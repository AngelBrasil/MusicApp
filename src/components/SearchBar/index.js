import React, { useState } from "react";
import './style.css'
import SearchResults from "../SearchResults";

const SearchBar = ({onInputChange,onTrack , strArtist}) =>{
  const [searchInput, setSearchInput] = useState(strArtist);
  const [searchResult , setSearchResult] = useState(strArtist);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setSearchInput(newValue);
        setSearchResult('');
      };
    const handleChangeKey = (event) =>{
      if (event.key === 'Enter'){
        onInputChange(searchInput);
        setSearchResult(searchInput);
      }
    }

    const renderContent = () =>{
      if (searchResult.length!==0){
         return (
          <SearchResults artistSearch={searchResult} onTrack={onTrack}/>
        )
      }
    }

  return(
        <article>
          <fieldset>
            <legend>Buscar por artista</legend>
            <input 
                type="text" 
                name='search' 
                placeholder="Ingrese un artista"
                value={searchInput}
                onChange={handleChange}
                onKeyDown={handleChangeKey}/>
          </fieldset>
          <hr/>
          {
            renderContent()
          }
          
        </article>
    )
}

export default SearchBar;