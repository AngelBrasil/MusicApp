import spotifyImg from '../../img/spotify.png';
import downloadImg from '../../img/download.png';
import novedadesImg from '../../img/novedades.png'
import './style.css'

const Header = () =>{
return(
        <header>
            <section className="header">
                <section className="header__logo">
                    <i title="Home"><img src={spotifyImg} alt="Spotify"/></i>
                </section>
                
                <section className="header__session">
                    <article>
                        <button title="Click para ver precios">Descubrir Premium</button>
                    </article>
                    <article className="header__download">
                        <i><img src={downloadImg} alt="Descarga"/></i>
                        <p>Instalar app</p>
                    </article>
                    <article className="header__novedades">
                        <i title="Novedades"><img src={novedadesImg} alt="Novedades"/></i>
                    </article>
                    <article className="header__logout">
                        <a href="#">A</a>
                    </article>
                </section>
            </section>
        </header>
    )
}

export default Header;