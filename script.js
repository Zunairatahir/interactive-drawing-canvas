// Get canvas and context
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Variables
let drawing = false;
let brushColor = "#000000";

// Change brush color
document.getElementById("colorPicker").addEventListener("input", function () {
    brushColor = this.value;
});

// Start drawing
canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    draw(e);
});

// Draw on canvas
canvas.addEventListener("mousemove", draw);

// Stop drawing
canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});

// Stop drawing if mouse leaves canvas
canvas.addEventListener("mouseleave", () => {
    drawing = false;
    ctx.beginPath();
});

// Drawing function
function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

// Clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
