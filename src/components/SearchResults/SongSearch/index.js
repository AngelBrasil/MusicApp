import './style.css'

const Song = ({song , onAdd}) =>{

    const {idSong , albumSong , titleSong, artistSong , durationSong} = song
    
    return(
        <section className="main__tabla">
            <section className="main__detalle">
                <article className="number__list">
                    <p>{idSong}</p>
                </article>
                <article className="album">
                    <p>{albumSong}</p>
                </article>
                <article className="title__list">
                    <p>{titleSong}</p>
                    <p>{artistSong}</p>
                </article>
            </section>
            <section>
                <p>{durationSong}</p>
            </section>
            <button className="btn-add" onClick={() => onAdd(song)}>Agregar a mi biblioteca</button>
        </section>
    )
}

export default Song;