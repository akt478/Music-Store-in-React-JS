export const Player=({fn,song})=>{
    return(<div className="Player">
        <button className="btn btn-success" onClick={()=>
            fn(false,null)
        }>Back To Songs</button>
        <p>
        <img src={song?.artworkUrl100} alt=""/>
        <br/>
        {song?.artistName} 
        {song?.trackName} 
        </p>
        <br/>
    <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"></source>
        </audio>
        </div>
    )
} 