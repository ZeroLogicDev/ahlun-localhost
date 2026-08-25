const commandInput = document.getElementById('command-input');
const outputArea = document.getElemenById('output');
function printOutput(message) {
    outputArea.innerHTML += `<div>${message}</div>`;
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = () => {
    printOutput("<br>Welcome to <strong>ahlun@localhost</strong>!");
    printOutput("Type <span style='color: #e5c07b;'>'help</span>to see the list of available commands.<br><br>");
}
