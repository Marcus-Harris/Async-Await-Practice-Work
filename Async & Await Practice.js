// Write an asynchronous function and call it with async/await
function getRandomNumber() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor((Math.random() * 100) + 1);
            resolve(num)
        }, 500);
    });
};


async function callFunction() {
    let promise = await getRandomNumber();
    console.log(promise);
};

callFunction();

// Fetch remote data using async/await
async function getCities(cityName) {
    const cityObject = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    const jsonConvert = await cityObject.json();
    console.log("The latitude is: " + jsonConvert.latt +
        " The longitude is: " + jsonConvert.longt);
}

getCities("charlotte");
