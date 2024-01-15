function hoverEffect(element) {
    element.querySelector('img').style.transform = 'scale(1.1)';
}

// You can add more JavaScript for additional interactivity as needed
function updateVisitorCount() {
    if (typeof (Storage) !== "undefined") {
        let count = localStorage.getItem("visitorCount") || 0;
        count++;
        localStorage.setItem("visitorCount", count);
        document.getElementById("visitorCount").textContent = `Page views: ${count}`;
    } else {
        document.getElementById("visitorCount").textContent = "LocalStorage is not supported, unable to track visitors.";
    }
}

updateVisitorCount();