let to_do_list = document.getElementById("to-do-list")

let add_button = document.getElementById("add")

let text_input = document.getElementById("text-input")

function add_activity(){

    let child =document.createElement('li');
    child.innerText = text_input.value;
    to_do_list.appendChild(child);
    let delete_button = document.createElement('button')
    delete_button.innerText = "DELETE"
    child.appendChild(delete_button)
    delete_button.style.marginLeft = "10px"
    delete_button.classList.toggle("deleteButton")
    delete_button.addEventListener('click', () =>{

        delete_button.parentElement.remove();

    } )

    child.addEventListener('click', ()=>{


        child.classList.toggle("strike-text")

    })

}

add_button.addEventListener("click", add_activity)

