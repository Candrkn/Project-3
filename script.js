const kiloInput = document.querySelector("#kiloInput");
const select = document.querySelector("select");
const btnHesapla = document.querySelector("#btnHesapla");
const img = document.querySelector("#for-img");
const sonuc = document.querySelector("#sonuc");

const hesapla = () => {

    let kilo = Number(kiloInput.value);
    kilo = (kilo / 9.81);
    console.log(kilo);

    let gezegen = select.value;
    console.log(gezegen);
    if(kiloInput.value != "" && select.value != "Choose a Planet"){
        if(gezegen == "Earth"){
            img.setAttribute("src", "img/earth.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 9.81).toFixed(2)}kg.
            `
        }else if(gezegen == "Jupiter"){
            img.setAttribute("src", "img/jupiter.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 24.79).toFixed(2)}kg.
            `
        }else if(gezegen == "Mars"){
            img.setAttribute("src", "img/mars.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 3.71).toFixed(2)}kg.
            `
        }else if(gezegen == "Mercury"){
            img.setAttribute("src", "img/mercury.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 3.70).toFixed(2)}kg.
            `
        }else if(gezegen == "Moon"){
            img.setAttribute("src", "img/moon.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 1.62).toFixed(2)}kg.
            `
        }else if(gezegen == "Neptune"){
            img.setAttribute("src", "img/neptune.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 11.15).toFixed(2)}kg.
            `
        }else if(gezegen == "Pluto"){
            img.setAttribute("src", "img/pluto.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 0.62).toFixed(2)}kg.
            `
        }else if(gezegen == "Saturn"){
            img.setAttribute("src", "img/saturn.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 10.44).toFixed(2)}kg.
            `
        }else if(gezegen == "Uranus"){
            img.setAttribute("src", "img/uranus.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 8.87).toFixed(2)}kg.
            `
        }else if(gezegen == "Venus"){
            img.setAttribute("src", "img/venus.png");
            sonuc.innerHTML = `
            Choosen Planet is ${gezegen}. 
            <br>
            Your weight in this planet is : ${(kilo * 8.87).toFixed(2)}kg.
            `
        }
    }else{
        sonuc.innerHTML = "Please choose a Planet !!!"
        sonuc.classList.remove("text-white");
        sonuc.classList.add("text-danger");

        setTimeout(() =>{
            sonuc.classList.remove("text-danger");
            sonuc.classList.add("text-white");
            sonuc.innerHTML = "Choose a Planet"
        },2000)
    }

}

btnHesapla.addEventListener("click", hesapla)