const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 0, 1, .2)"
        header.style.backdropFilter = "blur(10px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(5px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})

