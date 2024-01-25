// Creates a new list item when clicking on the "Add" button
function newElement() {
    console.log(document.getElementById("myInput").nodeValue);
    if (document.getElementById("myInput").value.length > 0){
        const node = document.createElement("li");
        node.setAttribute("onclick", "checkElement(event)")
        const textNode = document.createTextNode(document.getElementById("myInput").value);
        node.appendChild(textNode);
        document.getElementById("myUL").appendChild(node);
    }
}

function checkElement(e) {
    e.target.classList.toggle("checked")

}