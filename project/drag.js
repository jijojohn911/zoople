let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
for (list of lists) {
    list.addEventListener("dragstart", function (hi) {
        let selected = hi.target;
        rightBox.addEventListener("dragover", function (hi) {
            hi.preventDefault();
        })
        rightBox.addEventListener("drop", function (hi) {
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", function (hi) {
            hi.preventDefault();
        })
        leftBox.addEventListener("drop", function (hi) {
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}