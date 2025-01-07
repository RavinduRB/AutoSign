document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const fontSelect = document.getElementById('font-select');
    const generateButton = document.getElementById('generate-btn');
    const clearButton = document.getElementById('clear-btn');
    const saveButton = document.getElementById('save-btn');
    const signatureDiv = document.getElementById('signature');
    const canvas = document.getElementById('signature-canvas');
    const ctx = canvas.getContext('2d');

    generateButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const selectedFont = fontSelect.value;
        if (name) {
            signatureDiv.textContent = name;
            signatureDiv.style.fontFamily = `"${selectedFont}", cursive`;
        } else {
            alert('Please enter your name.');
        }
    });

    clearButton.addEventListener('click', () => {
        nameInput.value = '';
        signatureDiv.textContent = '';
    });

    saveButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const selectedFont = fontSelect.value;
        if (name) {
            canvas.width = 600;
            canvas.height = 200;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = `48px "${selectedFont}", cursive`;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(name, canvas.width / 2, canvas.height / 2);

            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'signature.png';
            link.click();
        } else {
            alert('Please enter your name.');
        }
    });
});