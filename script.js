


//onclick function
function playNote(path){
    let audio = new Audio();
    audio.src =`sounds/${path}.mp3`;
    audio.play();
    audio.currentTime = "0";
    console.log("click")
    document.body.classList.toggle('active')
}

//********onclick function finish******/



window.addEventListener('keypress',e=>{
    
    if (e.keyCode == "122"){
        console.log(e)
        console.log('C')
        let audio = new Audio();
        audio.src = "sounds/C.mp3"
        audio.play()
        audio.currentTime = "0";
    }
})


window.addEventListener('keypress',e=>{
    if (e.keyCode == "115") {
        console.log('Dshrap')
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/Csharp.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})

window.addEventListener('keypress',e=>{
    if (e.keyCode == "120") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/D.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})

window.addEventListener('keypress',e=>{
        if (e.keyCode == "100") {
            console.log(e)
            let audio = new Audio();
            audio.src = "sounds/Dsharp.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})

window.addEventListener('keypress',e=>{
    if (e.keyCode == "99") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/E.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})


window.addEventListener('keypress',e=>{
    if (e.keyCode == "118") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/F.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})


window.addEventListener('keypress',e=>{
    if (e.keyCode == "103") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/Fsharp.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})
 
window.addEventListener('keypress',e=>{
    if (e.keyCode == "98") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/G.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})
 
window.addEventListener('keypress',e=>{
    if (e.keyCode == "104") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/Gsharp.mp3"
        audio.play()
        audio.currentTime = "0"
   }
})

window.addEventListener('keypress',e=>{
    if (e.keyCode == "110") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/A.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})

window.addEventListener('keypress',e=>{
    if (e.keyCode == "106") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/Asharp.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})

window.addEventListener('keypress',e=>{
    if (e.keyCode == "109") {
        console.log(e)
        let audio = new Audio();
        audio.src = "sounds/B.mp3"
        audio.play()
        audio.currentTime = "0"
    }
})