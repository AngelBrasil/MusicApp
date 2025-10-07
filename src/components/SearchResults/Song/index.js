import { Link } from 'react-router-dom';
import './style.css'

const Song = ({song , onTrack}) =>{

    const {idTrack, strArtist,strAlbum, strTrack , intTrackNumber} = song

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
                <Link to={`song/${idTrack}`} onClick={() => onTrack({strTrack})}>Ver cancion</Link>
            </section>
        </section>
    )
}

export default Song;