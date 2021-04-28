function drawTable(context, height, width) {
    context.fillStyle='#35654d';
    context.fillRect(0, 0, width, height);
}

const canvas = document.getElementById('poker-canvas')
const context = canvas.getContext('2d')
drawTable(context, canvas.height, canvas.width)