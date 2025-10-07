 import { useNavigate } from 'react-router-dom';
import useFetchSong from '../../hooks/useFetchSong';
import Detail from './Detail'

const SongDetail = ({strArtist , strTrack, }) =>{
    const {songs, isLoading , error} = useFetchSong(strArtist , strTrack);

    const navigate = useNavigate();
    const goToAbout = () => {
        navigate('/'); // Navigate to the '/about' path
      };

    const renderContent = () =>{
        if (isLoading){
            return (<p>Cargando la información, espere un momento...</p>)
        }
        else if( !(error === null)){
            return (<p>{error}</p>)
        }
        return (songs.map( (song) => {
            return(
                <Detail key={song.idTrack} 
                song={song}/>
            )
        }))
    }

    return(
        <>
            {
                renderContent()
            }
            <button className="btn-del" onClick={goToAbout}>Regresar</button>
        </>
    )
}

export default SongDetail;