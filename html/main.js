let id = 1;
const uiElements = {};

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    const menuItems = document.querySelectorAll('.menu-text');
    menuItems.forEach(item => {
        const text = item.textContent;
        if (text.includes('^')) {
            const parts = text.split('^');
            if (parts.length === 2) {
                item.innerHTML = parts[0] + '<sup>' + parts[1] + '</sup>';
            }
        }
    });

    window.addEventListener('message', (event) => {
        if (event.data.type === "show") {
            container.classList.add("fade");
            setTimeout(() => {
                document.querySelectorAll('.menu-item').forEach(item => {
                    item.style.animationPlayState = 'running';
                });
            }, 100);

        } else if (event.data.type === "hide") {
            container.classList.remove("fade");
        } else if (event.data.type === "openLink") {
            window.invokeNative("openUrl", event.data.link);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fetch(`https://futr-pausemenuv2/menuEvent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                type: 'exit'
            })
        });
    }
});

function menuClicked(type) {
    const clickedElement = event.currentTarget;
    clickedElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickedElement.style.transform = '';
    }, 150);
    
    fetch(`https://futr-pausemenuv2/menuEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            'type': type
        })
    });
}
