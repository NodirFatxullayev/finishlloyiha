let item = document.querySelector(".item");
let body = document.querySelector("body");
let n = 0;

item.addEventListener("click", () => {
    n++;

    if(n === 1 || n % 2 != 0){
        item.style.transform = `translate(20px, 0)`;
        body.style.backgroundColor = `#272727`;
    }
    else{
        item.style.transform = `translate(0px, 0)`;
        body.style.backgroundColor = `#a1a1a1`;
    }
})