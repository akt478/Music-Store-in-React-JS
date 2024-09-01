import { useRef } from "react";
export const Search= ({fn}) =>{
    const artist=useRef();
    return(
        <>
        <label><h3>Artist Name</h3></label>
    <input ref={artist} type= 'text'className="form-control" placeholder="Type to Search Song for Artist"/>
    <button className="btn btn-success" onClick={()=>{
        fn(artist.current.value)
    }}>Search For It</button>
    </>
    )
}