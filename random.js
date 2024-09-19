const btn = document.querySelector(".lol");
const hero = document.querySelector(".hero");
const newjoke = document.querySelector(".newjoke");

btn.addEventListener("click",async() => {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    btn.classList.add("hide");

    let newdiv = document.createElement("div");
    newdiv.className = "tex";
    newdiv.innerHTML = `${data.setup}${data.punchline}`;
    hero.append(newdiv);

    newjoke.classList.remove("hide");
})

newjoke.addEventListener("click",async(data)=>{
    console.log("Loading more joke buttons");
    let newresponse = await fetch("https://official-joke-api.appspot.com/random_joke");
    let newdata = await newresponse.json();

    const newJokeDiv = document.createElement("div");
    newJokeDiv.className = "tex";
    newJokeDiv.innerHTML = `${newdata.setup} ${newdata.punchline}`;
    hero.replaceChild(newJokeDiv,hero.lastChild);
    newdiv = newJokeDiv;
})







