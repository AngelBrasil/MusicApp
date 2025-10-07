import useFetchArtist from "../../hooks/useFetchArtist";
import Song from "./Song";

const SearchResults = ({artistSearch ,onTrack}) => {
    const {songs , isLoading , error} = useFetchArtist(artistSearch);

    const renderSearchResults = () =>{
        if (isLoading){
            return (<p>Cargando la información, espere un momento...</p>)
        }
        else if( !(error === null)){
            return (<p>{error}</p>)
        }
        return (songs.map( (songApi) => {
                    return(
                        <Song key={songApi.idTrack} 
                              song={songApi} 
                              onTrack={onTrack}/>
                    )
                }))
    } 

   return (
        <section>
            <h2>Resultados de búsqueda </h2>
            {
                renderSearchResults()
            }
        </section>
   )
};

export default SearchResults;