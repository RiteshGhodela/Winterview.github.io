let doc = document.title;
window.addEventListener("blur", ()=>{
    document.title = "☹ Come Back ☹"
});

window.addEventListener("focus", ()=>{
    document.title = doc;
})