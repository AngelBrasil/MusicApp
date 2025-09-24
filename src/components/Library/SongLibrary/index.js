import './style.css'

const Song = ({idSong , albumSong , titleSong, artistSong , durationSong , onDel}) =>{
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
            <button className="btn-del" onClick={() => onDel(idSong)}>Eliminar de la biblioteca</button>
        </section>
    )
}


export default Song;