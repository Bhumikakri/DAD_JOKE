let btn = document.querySelector("button");
let show = document.querySelector("p");
let audio = document.querySelector("audio");

let object = {
    headers: { 'X-Api-Key': 'LyrhNCT9F5Tw3DoDayCpLA==IoH8Tk3Tc9mSzEuL'},
    method: 'GET',
}

btn.addEventListener("click", ()=>{
    // console.log("hello");
    btn.innerText = "Loading...."
    show.innerText = "Loading....joke😁";
    setTimeout(async function() {
        let data = await fetch('https://api.api-ninjas.com/v1/dadjokes', object);
        let reselt = await data.json();
        // console.log(res);
        show.innerText = reselt[0].joke;
        btn.innerText = "JOKE😁";
        audio.play();
    }, 1000);

})