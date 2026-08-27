const commandInput = document.getElementById('command-input');
const outputArea = document.getElementById('output');

function printOutput(message) {
    outputArea.innerHTML += `<div>${message}</div>`;
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = () => {
    printOutput("<br>Welcome to <strong>ahlun@localhost</strong>!");
    printOutput("Type <span style='color: #e5c07b;'>'help'</span> to see the list of available commands.<br><br>");
}

commandInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const command = commandInput.value.trim().toLowerCase();
        printOutput(`<div><span style="font-weight: bold; color: #c9d1d9;"><span style="color: #3fb950;">guest@localhost</span>:<span style="color: #58a6ff;">~</span><span style="color: #c9d1d9;">$ ${command}</span></div>`);

        switch (command) {
            case 'help':
                printOutput(`
                    Available commands: <br> 
                    <span style="color: #e5c07b;">motd</span> - Show this the massage of the day<br>
                    <span style="color: #e5c07b;">whoami</span> - Learn more about me<br>
                    <span style="color: #e5c07b;">music</span> - View my favorite tracks<br>
                    <span style="color: #e5c07b;">neofetch</span> - Display my system & daily setup<br>
                    <span style="color: #e5c07b;">network</span> - My internet links (Github, etc.)<br>
                    <span style="color: #e5c07b;">clear</span> - Clear the terminal output<br>
                `);
                break;
            case 'whoami':
                printOutput("Hi, I'm <strong>Ahlun</strong>, I'm a tech enthusiast who loves to tinker with Linux and custom setups. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or chilling with some games.<br>");
                break;
            case 'music':
                printOutput("Loading playlist... (coming soon)<br>");
                break;
            case 'network':
                printOutput("fetching network links... (coming soon)<br>");
                break;
            case 'neofetch':
                printOutput("Loading system info... (coming soon)<br>");
                break;
            case '':
                break;
            case 'motd':
                printOutput("Welcome to my personal terminal! Type <span style='color: #e5c07b;'>'help'</span> to see the list of available commands.<br>");
                break;
            case 'clear':
                outputArea.innerHTML = '';
                break;
            default:
                printOutput(`<span style="color: #f85149;">${command}: command not found</span>`);
        }
        commandInput.value = '';
    }
});

