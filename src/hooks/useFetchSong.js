import { useEffect, useState } from "react";
import axios from 'axios';

const APITRACK = 'https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=';

const useFetchSong = (strArtist , strTrack) =>{
    const [songState , setSongState] = useState({songs:[] , isLoading:true , error:null});

    useEffect( () =>{
        const fetchArtist = async () =>{
            if (strArtist.lenght===0 || strTrack.lenght===0){
                setSongState({songs:[] , isLoading:false , error:"Ingrese un artista"});
            }
            else{
                try {
                    const response = await axios.get(APITRACK + strArtist + '&t=' + strTrack);
                    console.log(response.data.track);
                    setSongState({songs:response.data.track , isLoading:false , error:null});
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

export default useFetchSong;