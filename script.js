const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const box = document.querySelector(".box")
const body = document.querySelector("body")
const todo = document.querySelector(".todo")
const balls = document.querySelector(".balls")



red.addEventListener("click", () => (

    box.style.backgroundColor = "red", 
    body.style.backgroundColor = "pink"
))

green.addEventListener("click", () => (

    box.style.backgroundColor = "green", 
    body.style.backgroundColor = "blueviolet"
))

blue.addEventListener("click", () => (

    box.style.backgroundColor = "blue", 
    body.style.backgroundColor = "orange"
))

yellow.addEventListener("click", () => (

    box.style.backgroundColor = "yellow", 
    body.style.backgroundColor = "bisque"

))