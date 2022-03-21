async function hello() {
    return "hola mundo";
}
hello();

hello().then(msg => console.log(msg));

function getWeather() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve("Mostly cloudy: 13C"), 2000);
    })
}

function getTraffic() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve("Traffic fluid"), 2000); //si quiero forzar el error pongo reject en alguna de las 2 promesas
        //por consola sale el error que meta entre los parentesis
    })
}

async function travelPlan() {

    //PARA RESOLVER LOS ERRORES try and catch:

    try {
        //el await en cada promesa hace q vaya más lento pero si falla una no falla la otra por consiguiente
    const weather = /*await*/ getWeather();
    const traffic = /*await*/ getTraffic();

    /*
    unifica las dos promesas. Si una falla no resuelve ninguna de las dos. Tira las dos a la vez,
    de la otra manera la segunda esperaba a que se tirase la primera, por tanto era más lento 
    MANERa rápida:
    */
    const plan = await Promise.all([weather, traffic]); 
    

    //manera lenta
    //return [weather, traffic];
    return plan;
    } catch (error) {
        alert("error")
        throw error; //tira el nombre del error q pone en el reject
    }
    
}
travelPlan().then(data => console.log(data))
.catch(error => console.error(error)); //esto escucha el try and catch y tira el error
