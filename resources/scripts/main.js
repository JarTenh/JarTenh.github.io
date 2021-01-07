const showElement = (elementId) => {
    let element = document.querySelector("#" + elementId);
    element.style.display = "block";
}

const hideElement = (elementId) => {
    let element = document.querySelector("#" + elementId);
    element.style.display = "none";
}

let info = document.querySelectorAll(".show-info");
for (let i = 0; i < info.length; i++) {
    info[i].addEventListener("mouseover", function () {
        showElement("info-" + i);
    });
    info[i].addEventListener("mouseout", function () {
        hideElement("info-" + i);
    });
}
