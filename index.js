import './styles/main.scss';
document
.getElementById("power-button-overlay")
.addEventListener("click", () => {
document.getElementById("windows-shutDown").style.fill = "black";
setTimeout(() => {
    document.querySelectorAll(".windows").forEach(node => {
    node.classList.add("active");
    });
}, 1000);
setTimeout(() => {
    document.querySelectorAll(".windows").forEach(node => {
    node.classList.remove("active");
    });
}, 3000);
setTimeout(() => {
    document.getElementById("windows-shutDown").style.fill = "none";
}, 3500);
});

