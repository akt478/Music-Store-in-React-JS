import { Song } from "./Song";

export const Songs=({fn,allSongs})=>{
    //map()
    //allsongs(data)->data->jsx
    return(<>
    {allSongs.map((currentSong,index)=><Song fn={fn} key= {index} song= {currentSong}/>)}
    </>)
}