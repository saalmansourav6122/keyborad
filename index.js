const showKey = document.querySelector(".para");
console.log(showKey);

// function keyShow(event){
//     const keys = event.code;
//     showKey.innerHTML = keys;
//     console.log(keys);
// };
window.addEventListener("keydown", (event)=>{
    const keys = event.key;
    showKey.innerHTML = keys;
    console.log(keys);
});