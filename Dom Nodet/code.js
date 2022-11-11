//lisää sivun loppuun hr-elementti
//lisää hr-elementin jälk h3-otsikokkona oma nimesi

let content = document.getElementById("content");
let hr = document.createElement("hr");
let h3 = document.createElement("h3");
h3.textContent = "Mila Kimpimäki";
content.appendChild(hr);
content.appendChild(h3);

//lisää sunnuntai
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent="Sunnuntai";
ul.appendChild(li);

//poista "turhake" lista item //

let turha = document.querySelector("ul li:first-child");
turha.remove();


//3.lihavoituna viikonpäivä

let items = document.querySelectorAll("ul:first-child li");
for (item of items) {
    let text = item.textContent;
    item.textContent = "";

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);

}
//muokataan tyyliä

function changeColor() {
    let elems = document.querySelectorAll("ul:first-chil li");
    for (elem of elems) {
        elem.classList.toggle("colored");
    }
}


function changeSize() {
    let elems = document.querySelectorAll("li");
    for (const e of elems) {
        if(e.textContent.length < 10){
            e.classList.add("sizeup");
            
        }
    }
}

