function createParagraph(number) {
    if (number == 0) {
        const para = document.createElement("p");
        para.textContent = "I once felt uninspired";
        document.body.appendChild(para);
    } else if (number == 1) {
        const para1 = document.createElement("p");
        para1.textContent = "But my brain got rewired";
        document.body.appendChild(para1);
    } else if (number == 2) {
        const para2 = document.createElement("p");
        para2.textContent = "When my mouth filled with fire";
        document.body.appendChild(para2);
    } else if (number == 3) {
        const para3 = document.createElement("p");
        para3.textContent = "And my skin began to perspire";
        document.body.appendChild(para3);
    } else if (number == 4) {
        const para4 = document.createElement("p");
        para4.textContent = "My circumstances so dire";
        document.body.appendChild(para4);
    } else if (number == 5) {
        const para5 = document.createElement("p");
        para5.textContent = "How could this have transpired";
        document.body.appendChild(para5);
    } else if (number == 6) {
        const para6 = document.createElement("p");
        para6.textContent = "Only one thing I desired";
        document.body.appendChild(para6);
    } else if   (number == 7) {
        const para7 = document.createElement("p");
        para7. textContent = "But the milk was expired";
        document.body.appendChild(para7);
    }
}

const buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(i) {
        createParagraph(i);
    }.bind(this,i));
}

