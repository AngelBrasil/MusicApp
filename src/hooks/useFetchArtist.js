import { useEffect, useState } from "react";
import axios from 'axios';

const APIALBUM = 'https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=';
const APITRACK = 'https://www.theaudiodb.com/api/v1/json/123/track.php?m=';

const useFetchArtist = (strArtist) =>{
    const [songState , setSongState] = useState({songs:[] , isLoading:true , error:null});

    useEffect( () =>{
        const fetchArtist = async () =>{
            if (strArtist.lenght===0){
                setSongState({songs:[] , isLoading:false , error:"Ingrese un artista"});
            }
            else{
                try {
                    const response = await axios.get(APIALBUM + strArtist);
                    let songApiList = [];
                    for (let album of response.data.album){
                        const responseSong = await axios.get(APITRACK + album.idAlbum);
                        for (let track of responseSong.data.track){
                            songApiList.push(track);
                        }
                        setSongState({songs:songApiList , isLoading:false , error:null});
                    }
                } 
            
                catch (error) {
                    setSongState({songs:[] , isLoading:false , error:"Hubo un problema al cargar los datos. Intenta nuevamente"});
                }
            }

        };
        fetchArtist();
    },[])

    return songState;
}

export default useFetchArtist;