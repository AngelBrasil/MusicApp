import Song from "./SongLibrary";

const Library = ({library , onDel}) => {

    if (library.length === 0){
        return <p>Tu biblioteca está vacía. Agrega canciones desde los resultados</p>;
    }
   return (
        <>
            <section>
                {
                    library.map( ({idSong , titleSong , artistSong , albumSong , durationSong})  => {
                        return(
                            <Song key={idSong} 
                                  idSong={idSong} 
                                  titleSong={titleSong} 
                                  artistSong={artistSong} 
                                  albumSong={albumSong} 
                                  durationSong={durationSong}
                                  onDel={onDel}/>
                        )
                    })
                }
            </section>
        </>
   )
}

export default Library;