document.getElementById('copy-email-button').addEventListener('click', function () {
    const display = document.getElementById('email-display');
    const raw = display.innerText.trim(); // get only visible text
    navigator.clipboard.writeText(raw).then(() => {
        document.getElementById('copy-email-feedback').textContent = 'Email copied to clipboard!';
    }).catch(() => {
        document.getElementById('copy-feedback').textContent = 'Failed to copy.';
    });
});