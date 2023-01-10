//receta para consumir un api con react

export async function servicioCancionesTop(){
    //1. pa donde vas y a que vas
    //escribir la url del servicio de api

    const URL= "https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"

    //2. que operacion vas a hacer en la base de datos
    // configurar la peticion  de envio hacia el servidor 
    const PETICION ={
        method: "GET",
        Headers: {Authorization: "Bearer BQDUz3N6Lx0n9MifcDhhjMaTKWby3SW6dvAbUFbQfTODGfxA5maCNlUn5XWdx8XLjJcBNrvRa42CdJz_ea5hdIiexfK__27JKNdgrSsr0aRTJo4dzD1N5ZFlwi5UfQGUw__9Gyxm1ws3miQYcPzbFrAjRMAqSWH9kn14beQfOILbdSAy02qtH9mNRYpH4r_ZYis"}
    }

    // 3. nos vamos pal restaurante
    // consumir el api
    let respuesta= await fetch(URL, PETICION)
    let canciones =await respuesta.json()

    console.log(canciones)


}