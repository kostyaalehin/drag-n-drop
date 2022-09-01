const item = document.querySelector(".item")
const placeholderes = document.querySelectorAll(".placeholder")

item.addEventListener("dragstart", dragstart) 
item.addEventListener("dragend", dragend)

for (const placeholder of placeholderes) {
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", dragdrop)
}

function dragstart(event) {
    event.target.classList.add("hold")
    setTimeout(() => event.target.classList.add("hide"), 0)
}

function dragend(event) {
    event.target.classList.remove("hold", "hide")
    // event.target.className = "item" //альтернативный метод
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add("hovered")
}

function dragleave(event) {
    event.target.classList.remove("hovered")
}

function dragdrop(event) {
    event.target.classList.remove("hovered")
    event.target.append(item)
}