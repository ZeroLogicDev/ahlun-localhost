const commandInput = document.getElementById("command-input");
const outputArea = document.getElementById("output");

function printOutput(message) {
    outputArea.innerHTML += `<div>${message}</div>`;
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = () => {
    printOutput("<br>Welcome to <strong>ahlun@localhost</strong>!");
    printOutput(
        "Type <span style='color: #e5c07b;'>'help'</span> to see the list of available commands.<br><br>",
    );
};

commandInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const rawInput = commandInput.value.trim().toLowerCase();
        const inputParts = rawInput.split(" ");
        const command = inputParts[0];
        const args = inputParts.slice(1);
        printOutput(
            `<div><span style="font-weight: bold; color: #c9d1d9;"><span style="color: #3fb950;">ahlun@localhost</span>:<span style="color: #58a6ff;">~</span><span style="font-weight: bold; color: #c9d1d9;">$ ${rawInput}</span></div>`,
        );

        switch (command) {
            case "help":
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
            case "whoami":
                printOutput(`
                    Hi, I'm <strong>Ahlun</strong>.<br><br>
                    I'm a full-stack web developer and a relentless tinkerer. I enjoy exploring new technologies, building innovative web applications, and sharing my knowledge with the community. My passion lies in creating seamless user experiences and efficient backend systems.<br><br>
                    When I'm not coding, you can find me experimenting with new programming languages, contributing to open-source projects, or indulging in my love for music and gaming. I believe in continuous learning and strive to stay updated with the latest trends in the tech world.<br><br>
                    Feel free to connect with me on my social media platforms or check out my projects on GitHub.
                    `);
                break;
            case "music":
                if (args.length === 0 || args[0] === "lists") {
                    printOutput(`
                    <span style='color: #58a6ff; font-weight: bold;'>=== Favorite Music Tracks ===</span><br><br>
                    <span style='color: #3fb950;'>[1]</span> Memories<br>
                    <span style='color: #3fb950;'>[2]</span> Lose You To Love Me<br>
                    <span style='color: #3fb950;'>[3]</span> Rumors<br>
                    <span style='color: #3fb950;'>[4]</span> Supercut<br>
                    <span style='color: #3fb950;'>[5]</span> Somebody That I Used To Know<br>
                    <span style='color: #3fb950;'>[6]</span> I Won't Cry Anymore<br>
                    <span style='color: #3fb950;'>[7]</span> Traitor<br>
                    <span style='color: #3fb950;'>[8]</span> Happier<br>
                    <span style='color: #3fb950;'>[9]</span> Flowers<br>
                    <span style='color: #3fb950;'>[10]</span> Self Healing<br><br>
                    <em>Note: These are just a few of my favorite tracks. I have a diverse taste in music and enjoy exploring different genres and artists.</em>
                    `);
                } else if (args[0] === "play") {
                    const trackNo = args[1];
                    if (trackNo === "1") {
                        printOutput("Loading track: Memories...<br>");
                        printOutput(`
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5UXJzLFdBn6u9FJTCnoHrH?utm_source=generator&theme=0&si=3dc170a1a1624549" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            `);
                    } else if (trackNo === "2") {
                        printOutput("Loading track: Lose You To Love Me...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4l0Mvzj72xxOpRrp6h8nHi?utm_source=generator&theme=0&si=c61a1a7ccd07440d" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "3") {
                        printOutput("Loading track: Rumors...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4JMxLi40wVqq9To1QPSr4L?utm_source=generator&theme=0&si=c894513a5d704324" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "4") {
                        printOutput("Loading track: Supercut...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6K8VQ84MqhsoakN5MjrnVR?utm_source=generator&theme=0&si=ea268c28e41b4edd" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "5") {
                        printOutput("Loading track: Somebody That I Used To Know...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1qDrWA6lyx8cLECdZE7TV7?utm_source=generator&theme=0&si=b92c157b29a14b62" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "6") {
                        printOutput("Loading track: I Won't Cry Anymore...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0cQdt3fQ4yRvDmPdXhf51V?utm_source=generator&theme=0&si=af6f3fc31c0f4d2f" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "7") {
                        printOutput("Loading track: Traitor...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5CZ40GBx1sQ9agT82CLQCT?utm_source=generator&theme=0&si=fe05ef8fe3584206" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "8") {
                        printOutput("Loading track: Happier...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2tGvwE8GcFKwNdAXMnlbfl?utm_source=generator&theme=0&si=509788ed9e554d6b" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "9") {
                        printOutput("Loading track: Flowers...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7DSAEUvxU8FajXtRloy8M0?utm_source=generator&theme=0&si=31bcbebf7b434e9a" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else if (trackNo === "10") {
                        printOutput("Loading track: Self Healing...<br>");
                        printOutput(`
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/42ofgqIDT5yol8oPmG9UKc?utm_source=generator&theme=0&si=7c01e90b77b04868" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `);
                    } else {
                        printOutput(
                            `<span style="color: #f85149;">Invalid track number. Please use 'music play [track number]' to play a track.</span>`,
                        );
                    }
                } else {
                    printOutput(
                        `<span style="color: #f85149; font-weight: bold;">Usage: music [lists|play [track number]]</span>`,
                    );
                }
                break;
            case "network":
                printOutput(`
                    <span style='color: #58a6ff; font-weight: bold;'>=== Network & Social Links ===</span><br><br>
                    <span style='color: #3fb950;'>[+]</span> <strong>Github</strong>: <a href='https://github.com/ZeroLogicDev' target='_blank' style='color: #c9d1d9; text-decoration: underline;'>github.com</a><br>
                    <span style='color: #3fb950;'>[+]</span> <strong>LinkedIn</strong>: <a href='https://linkedin.com/in/ahlun-najarrudin' target='_blank' style='color: #c9d1d9; text-decoration: underline;'>Ahlun Najarrudin</a><br>
                    <span style='color: #3fb950;'>[+]</span> <strong>Instagram</strong>: <a href='https://instagram.com/lelouch.ln' target='_blank' style='color: #c9d1d9; text-decoration: underline;'>@lelouch.ln</a><br>
                    <br>
                    <em>Click link above to open in a new tab.</em>
                    `);
                break;
            case "neofetch":
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
         .oossssso- \`\`\`\ /ossssss+\`
        -osssssso.       :ssssssso.
       :osssssss/         osssso+++.
      /ossssssss/          +ssssooo/-
     \`/ossssso+/:          :/+osssso+-
    \`+sso+:-\`\                 \`.-/+oso:
   \`++:.                           \`-/+/
   .\`                                 \`/
                    </pre>
                    <div style="line-height: 1.5; white-space: nowrap;">
                    <span  style="color: #3fb950; font-weight: bold;">ahlun</span>@<span style="color: #3fb950; font-weight: bold;">localhost</span><br>
                    -------------------------<br>
                    <span style="color: #58a6ff; font-weight: bold;">OS</span>: Arch Linux<br>
                    <span style="color: #58a6ff; font-weight: bold;">Kernel</span>: 7.1.11-arch1-1<br>
                    <span style="color: #58a6ff; font-weight: bold;">Uptime</span>: 7 hour, 23 minutes<br>
                    <span style="color: #58a6ff; font-weight: bold;">Packages</span>: 1234 (pacman)<br>
                    <span style="color: #58a6ff; font-weight: bold;">Shell</span>: bash 5.2.15<br>
                    <span style="color: #58a6ff; font-weight: bold;">Display</span>: 1920x1080 144Hz 17"<br>
                    <span style="color: #58a6ff; font-weight: bold;">WM</span>: hyprland<br>
                    <span style="color: #58a6ff; font-weight: bold;">Terminal</span>: Alacritty<br>
                    <span style="color: #58a6ff; font-weight: bold;">CPU</span>: AMD Ryzen 9 9950X (16) @ 5.70GHz<br>
                    <span style="color: #58a6ff; font-weight: bold;">GPU 1</span>: NVIDIA GeForce RTX 5090<br>
                    <span style="color: #58a6ff; font-weight: bold;">GPU 2</span>: AMD Radeon Graphics (integrated)<br>
                    <span style="color: #58a6ff; font-weight: bold;">Memory</span>: 32GB<br>
                    <span style="color: #58a6ff; font-weight: bold;">Swap</span>: 8GB<br>
                    <span style="color: #58a6ff; font-weight: bold;">Disk</span>: 1TB NVMe SSD<br>
                    <span style="color: #58a6ff; font-weight: bold;">Battery</span>: 100% (Charging)<br>
                    </div>
                    </div>
                    `);
                break;
            case "":
                break;
            case "motd":
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
                    Last updated: <span style='color: #58a6ff;'>30 aug 2026</span><br>
                    `);
                break;
            case "clear":
                outputArea.innerHTML = "";
                break;
            case "date":
                const currentDate = new Date();
                printOutput(`Current date and time: ${currentDate.toLocaleString()}`);
                break;
            case "sudo":
                printOutput(
                    `<span style="color: #f85149;">You not allowed to use sudo command here. This incident will be reported.</span>`,
                );
                break;
            default:
                printOutput(
                    `<span style="color: #f85149;">${command}: command not found</span>`,
                );
        }
        commandInput.value = "";
    }
});
