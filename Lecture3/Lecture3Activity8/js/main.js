
document.querySelector(".links").addEventListener("click", (event) => {
    if (!confirm('You are about to leave this page')) {
        event.preventDefault();
    }
})