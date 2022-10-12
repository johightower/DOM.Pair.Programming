//big box
//paragraph
//placeholder text
//expand button
//shrink button

const magnify = document.querySelector("body")
const bigBox = document.createElement("section")
bigBox.style.border = "1px solid green"

const text = document.createElement("p")
text.textContent = "text"
text.style.margin = "10px"


const expand = document.createElement("button")
expand.textContent = "EXPAND"

expand.addEventListener("click", function (){
    text.style.fontSize = "100px"
})


const shrink = document.createElement("button")
shrink.textContent = "shrink"

shrink.addEventListener("click", function(){
    text.style.fontSize = "7px"
})



bigBox.append(text, expand, shrink)
magnify.append(bigBox)