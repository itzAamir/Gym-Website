function changeBgL() {
    let rightBtn = document.getElementsByClassName("btnR")[0];
    rightBtn.className = "btn btnL";
    // document.getElementById("exploreBtn").style.color = "white";
}

function changeBgR() {
    let leftBtn = document.getElementsByClassName("btnL")[0];
    leftBtn.className = "btn btnR"
    // document.getElementById("exploreBtn").style.color = "var(--secondary-color)";
}

document.querySelector(".btnR").addEventListener("mouseover", ()=>{
    document.getElementById("exploreBtn").style.color = "var(--secondary-color)";
})

document.querySelector(".btnR").addEventListener("mouseout", ()=>{
    document.getElementById("exploreBtn").style.color = "white";
})

let links = document.querySelectorAll("li");
Array.from(links).forEach(elements => {
    elements.addEventListener("mouseover", changeActive); //changeActive is changing state of "Home" link to inactive
    elements.addEventListener("mouseout", revertActive);  //revertActive is changing state of "Home" link to active
});


function changeActive(e){
    elem = e.target.innerText;
    if (elem != "Home"){
        document.querySelector(".active").classList.remove("active");
    }
}

function revertActive(e){
    elem = e.target.innerText;
    if (elem != "Home"){
        document.querySelector("#active").classList.add("active");
    }
}
