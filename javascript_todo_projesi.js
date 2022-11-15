let domForm = document.querySelector("#userForm");
let domList = document.querySelector("#userList");
const toastLiveExample = document.getElementById('liveToast')

domForm.addEventListener("submit", function(e){
    e.preventDefault();
    domInput = document.querySelector("#nameInput");
    items = localStorage.getItem("itemList") ? JSON.parse(localStorage.getItem("itemList")) : [];
    if (!items.includes(domInput.value) && domInput.value){
        items.push(domInput.value);
        localStorage.setItem("itemList", JSON.stringify(items));
        listElement = document.createElement("li");
        listElement.className = "list-group-item d-flex justify-content-between align-items-start";
        listElement.innerHTML = `<div class="ms-2 me-auto">${domInput.value}</div><button class = "btn btn-warning deleteBtn">X</button>`;
        domList.appendChild(listElement);
        domInput.value = "";
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }
})

items = localStorage.getItem("itemList") ? JSON.parse(localStorage.getItem("itemList")) : [];
items.forEach(function(item){
    listElement = document.createElement("li");
    listElement.className = "list-group-item d-flex justify-content-between align-items-start";
    listElement.innerHTML = `<div class="ms-2 me-auto">${item}</div><button class = "btn btn-warning deleteBtn">X</button>`;
    domList.appendChild(listElement);
})

domList.addEventListener("click", deleteItemFunction)

function deleteItemFunction(e) {
    e.target.classList.forEach(function(item){
        if(item == "deleteBtn"){
            items = JSON.parse(localStorage.getItem("itemList"))
            items.splice(items.indexOf(e.target.previousSibling.innerHTML),1)
            localStorage.setItem("itemList", JSON.stringify(items))
            e.target.parentElement.remove()
        }
    })
}
