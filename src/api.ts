function fetchDisney(){
    return fetch(`https://disney_api.nomadcoders.workers.dev/characters`).then(response => response.json())
}
export default fetchDisney;