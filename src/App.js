
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import { useState } from 'react';

//Crea arrays
const initialSong = [{idSong:1, titleSong:"Te lo pido por favor" , artistSong:"Jaguares" , albumSong:"El primer insitnto" , durationSong:"3.27"},
                  {idSong:2, titleSong:"No se tú" , artistSong:"Luis Miguel" , albumSong:"Romances" , durationSong:"3.47"},
                  {idSong:3, titleSong:"La sinvergüenza" , artistSong:"Cristian Nodal" , albumSong:"Forajido" , durationSong:"3.31"},
                  {idSong:4, titleSong:"Clavado en un bar" , artistSong:"Maná" , albumSong:"Sueños liquidos" , durationSong:"4.22"},
                  {idSong:5, titleSong:"Perdoname" , artistSong:"Pepe Aguilar" , albumSong:"Por una mujer bonita" , durationSong:"3.28"},
                  {idSong:6, titleSong:"Lamento boliviano" , artistSong:"Enanito verdes" , albumSong:"Big bang" , durationSong:"3.43"},
];
let arrayLibrary = [];

function App() {

  const [library , setLibrary] = useState(arrayLibrary);

  const handleAddToLibrary = (song) =>{
    setLibrary((prev) => {
        const exist = prev.some( (s) => s.idSong === song.idSong);
        return exist ?prev : [...prev , song];
      });
  };

  const handleRemoveFromLibrary = (idToDelete) => {
    setLibrary(prevItems => prevItems.filter(library => library.idSong !== idToDelete));
  }

  return (
    <div className="App">
      <Header appName="Biblioteca musical"/>
      <main className='main'>
          <section className='search-results'>
            <h2>Resultados de búsqueda </h2>
            <SearchResults songs={initialSong} 
                           onAdd={handleAddToLibrary}/>
          </section>
          <section className='library'>
            <h2>Biblioteca personalizada </h2>
            <Library library={library} onDel={handleRemoveFromLibrary} />
          </section>
        </main>
    </div>
  );
}

export default App;
