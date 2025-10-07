import './App.css';
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import SongDetail from './components/SongDetail';
import { useState } from 'react';

function App() {
    const [strArtist , setStrArtist] = useState('');
    const [strTrack , setStrTrack] = useState('');
 
  const handleChildInputChange = (searchArtist) => {
    setStrArtist(searchArtist);
  }
  const handleChildLink = ({strTrack})=>{
    setStrTrack(strTrack);
  }

  return(
    <div className='App'>
      <Header className='Bibiioteca musical'/>
        <Routes>
          <Route path='/' element={<SearchBar onInputChange={handleChildInputChange} onTrack={handleChildLink} strArtist={strArtist}/>}/>
          <Route path='/song/:idTrack' element={<SongDetail strArtist={strArtist} strTrack={strTrack}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
