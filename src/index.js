const panels=document.querySelectorAll(".panel");

const addActive=(e)=>{
    removeActive();
    e.target.classList.add("active");
}

panels.forEach((panel)=>{
    panel.addEventListener('click',addActive);
})
const removeActive=()=>{
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    })
}

// removeActive();