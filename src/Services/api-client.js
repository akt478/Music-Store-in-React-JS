import axios from 'axios';
export async function getSongs(artistName){
    const URL = `https://itunes.apple.com/search?term=${artistName}`
    const response= await axios.get(URL)
    console.log(response.data['results'])
    return response.data['results']
}