console.log("API MARVEL")
//import fetch from "node-fetch"

const llavePublic = "f22d691e3da9c4ebc7d2482e7e78a994"
const hash = "aeffdf45e13571f8b73c5067ce762bc2"
//nameStartsWith=spider&
var nameWith = "Spider"
var urlMarvel = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameWith}&ts=1&apikey=${llavePublic}&hash=${hash}`
async function fotosTodas(url){
    const respuestaApi = await fetch (urlMarvel)
    var respuestaApiJson = await respuestaApi.json()
    var contenedor = document.getElementById("contenedorCartas")
    contenedor.innerHTML = ""
for(const hero of respuestaApiJson.data.results){
    contenedor.innerHTML += `

    <div class="id-card">
    <div class="profile-row">
      <div class="dp">
        <div class="dp-arc-outer"></div>
        <div class="dp-arc-inner"></div>
        <img src="${hero.thumbnail.path +"." + hero.thumbnail.extension}">
      </div>
      <div class="desc">
        <h1>${hero.name}</h1>
            <p>Descripcion: ${hero.description}</p>
      </div>
    </div>
  </div>
    
            `
}

}
console.log(fotosTodas(urlMarvel))

async function fotosMarvel(marvels){
    var urlApi = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${marvels}&ts=1&apikey=${llavePublic}&hash=${hash}`
    const respuestaApi = await fetch (urlApi)
    var respuestaApiJson = await respuestaApi.json()
    var contenedor = document.getElementById("contenedorCartas")
    contenedor.innerHTML = ""
for(const hero of respuestaApiJson.data.results){
    contenedor.innerHTML += `<    <div class="id-card">
    <div class="profile-row">
      <div class="dp">
        <div class="dp-arc-outer"></div>
        <div class="dp-arc-inner"></div>
        <img src="${hero.thumbnail.path +"." + hero.thumbnail.extension}">
      </div>
      <div class="desc">
        <h1>${hero.name}</h1>
            <p>Descripcion: ${hero.description}</p>
      </div>
    </div>
  </div>
            `
}
}


 function buscar(){
     var personajes = document.getElementById("personaje");
     var busqueda = personajes.value
     fotosMarvel(busqueda)
 }