import './style.css'

const Song = ({song}) =>{
    const {intTrackNumber,strAlbum , strArtist , strTrack,intDuration} = song;
    return(
        <section className="main__tabla">
            <section className="main__detalle">
                <article className="number__list">
                    <p>{intTrackNumber}</p>
                </article>
                <article className="album">
                    <p>{strAlbum}</p>
                </article>
                <article className="title__list">
                    <p>{strArtist}</p>
                    <p>{strTrack}</p>
                </article>
            </section>
            <section>
                <p>{intDuration}</p>
            </section>
        </section>
    )
}


export default Song;