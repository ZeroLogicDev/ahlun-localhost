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
        printOutput(`<div><span style="font-weight: bold; color: #c9d1d9;"><span style="color: #3fb950;">ahlun@localhost</span>:<span style="color: #58a6ff;">~</span><span style="color: #c9d1d9;">$ ${command}</span></div>`);

        switch (command) {
            case 'help':
                printOutput(`
                    Available commands: <br> 
                    <span style="color: #e5c07b;">motd</span> - Show this the massage of the day<br>
                    <span style="color: #e5c07b;">whoami</span> - Learn more about me<br>
                    <span style="color: #e5c07b;">music</span> - View my favorite tracks<br>
                    <span style="color: #e5c07b;">neofetch</span> - Display my dream system & daily setup<br>
                    <span style="color: #e5c07b;">network</span> - My internet links (Github, etc.)<br>
                    <span style="color: #e5c07b;">clear</span> - Clear the terminal output<br>
                `);
                break;
            case 'whoami':
                printOutput(`
                    Hi, I'm <strong>Ahlun</strong>.<br><br>
                    I'm a full-stack web developer and a relentless tinkerer. I enjoy exploring new technologies, building innovative web applications, and sharing my knowledge with the community. My passion lies in creating seamless user experiences and efficient backend systems.<br><br>
                    When I'm not coding, you can find me experimenting with new programming languages, contributing to open-source projects, or indulging in my love for music and gaming. I believe in continuous learning and strive to stay updated with the latest trends in the tech world.<br><br>
                    Feel free to connect with me on my social media platforms or check out my projects on GitHub. I'm always open to collaboration and new opportunities!
                    `);
                break;
            case 'music':
                printOutput("Loading playlist... (coming soon)<br>");
                break;
            case 'network':
                printOutput(`
                    <span style='color: #58a6ff; font-weight: bold;'>=== Network & Social Links ===</span><br><br>
                    <span style='color: #3fb950;'>[+]</span> <strong>Github</strong>: <a href='https://github.com/ZeroLogicDev' target='_blank' style='color: #c9d1d9; text-decoration: underline;'>github.com</a><br>
                    <span style='color: #3fb950;'>[+]</span> <strong>LinkedIn</strong>: <a href='https://linkedin.com/in/ahlun-najarrudin' target='_blank' style='color: #c9d1d9; text-decoration: underline;'>Ahlun Najarrudin</a><br>
                    <span style='color: #3fb950;'>[+]</span> <strong>Instagram</strong>: <a href='https://instagram.com/lelouch.ln' target='_blank' style='color: #c9d1d9; text-decoration: underline;'>@lelouch.ln</a><br>
                    <br>
                    <em>Click link above to open in a new tab.</em>
                    `);
                break;
            case 'neofetch':
                printOutput(`
                    <div style="display: flex; gap: 35px; align-items: center; font-size: 1.15em;">
                    <pre style="color: #58a6ff; font-weight: bold; margin: 0; line-height: 1.1;">
                     -\`
                    .o+\`
                   \`ooo/
                  \`+oooo:
                 \`+oooooo:
                 -+oooooo+:
               \`/:-:++oooo+:
              \`/++++/+++++++:
              \`/++++++++++++++:
            \`/+++ooooooooooooo/\`
           ./ooosssso++osssssso+\`
         .oossssso- \`\`\`\` /ossssss+\`
        -osssssso.         :ssssssso.
       :osssssss/           osssso+++.
     /ossssssss/             +ssssooo/-
   \`/ossssso+/:-             -:/+osssso+-
  \`+sso+:-\`\                      \`.-/+oso:
 \`++:.                                \`-/+/
 .\`                                      \`/
                    </pre>
                    <div style="line-height: 1.5; white-space: nowrap;">
                    <span  style="color: #3fb950; font-weight: bold;">ahlun</span>@<span style="color: #3fb950; font-weight: bold;">localhost</span><br>
                    -------------------------<br>
                    <span style="color: #58a6ff;" font-weight: bold;">OS</span>: Arch Linux<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Kernel</span>: 6.5.11-arch1-1<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Uptime</span>: 1 hour, 23 minutes<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Packages</span>: 1234 (pacman)<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Shell</span>: bash 5.2.15<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Resolution</span>: 1920x1080<br>
                    <span style="color: #58a6ff;" font-weight: bold;">WM</span>: hyprland<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Theme</span>: Dracula<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Icons</span>: Papirus<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Terminal</span>: Alacritty<br>
                    <span style="color: #58a6ff;" font-weight: bold;">CPU</span>: Intel i7-9700K (8) @ 4.90GHz<br>
                    <span style="color: #58a6ff;" font-weight: bold;">GPU</span>: NVIDIA GeForce RTX 5090<br>
                    <span style="color: #58a6ff;" font-weight: bold;">Memory</span>: 32GB<br>
                    </div>
                    </div>
                    `);
                break;
            case '':
                break;
            case 'motd':
                printOutput(`
                    <pre style="color: #3fb950; font-weight: bold; margin: 0; line-height: 1.2;">
       _    _   _ _    _   _ _   _ 
      / \\  | | | | |  | | | | \\ | |
     / _ \\ | |_| | |  | | | |  \\| |
    / ___ \\|  _  | |__| |_| | |\\  |
   /_/   \\_\\_| |_|_____\\___/|_| \\_|
                                   
 _   _     _          _     _    ____  ____  _   _  ____  ___  _   _ 
| \\ | |   / \\        | |   / \\  |  _ \\|  _ \\| | | ||  _ \\|_ _|| \\ | |
|  \\| |  / _ \\    _  | |  / _ \\ | |_) | |_) | | | || | | || | |  \\| |
| |\\  | / ___ \\  | |_| | / ___ \\|  _ <|  _ <| |_| || |_| || | | |\\  |
|_| \\_|/_/   \\_\\  \\___/ /_/   \\_\\_| \\_\\_| \\_\\\\___/ |____/|___||_| \\_|
                    </pre>
                    
                    Welcome to my personal terminal! Type <span style='color: #e5c07b;'>'help'</span> to see the list of available commands.<br>
                    Last updated: <span style='color: #58a6ff;'>27 aug 2026</span><br>
                    `);
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

