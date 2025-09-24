import Song from "./SongSearch";

const SearchResults = ({songs , onAdd}) => {

   return (
        <section>
            {
                songs.map( (song) => {
                    return(
                        <Song key={song.idSong} 
                              song={song} 
                              onAdd={onAdd} />
                    )
                })
            }
        </section>
   )
};

export default SearchResults;