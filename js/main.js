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
