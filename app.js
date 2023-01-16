/* const user="Junior"
console.log("dfg")
localStorage.setItem("username",user)

const userStorage=localStorage.getItem("username")
console.log(userStorage) */

const bg = document.querySelector("body");
const btn = document.querySelectorAll(".btn");

document.addEventListener("click", (e) => {
  if ((e.target.match = ".btn")) {
    bg.style.backgroundColor = e.target.textContent;
    localStorage.setItem("color", e.target.textContent);
  }
});

(()=>{
    const storage = localStorage.getItem("color");
    bg.style.backgroundColor=storage
})()

