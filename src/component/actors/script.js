// document.querySelector(document).ready(function () {
// document.querySelector(".valve").addEventListener("click", function () {
//   document.querySelector(this).classList.add("valve-rotate");

//   setTimeout(function () {
//     document.querySelector(".valve").classList.add("valve-rotate-reverce");
//   }, 1000);
// });
//   });
export const rotate_valve = () => {
    // debugger
    const valve = document.querySelector(".valve");
    valve.classList.add("valve-rotate");
}