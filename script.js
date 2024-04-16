/*HistorySideBarCloseOpen*/
document.addEventListener('DOMContentLoaded', function () {
    const HistorySideBarButton = document.getElementById('HistorySideBarButton');
    const sidebar = document.querySelector('.HistorySideBar');

    HistorySideBarButton.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
    });

    const codeInput = document.querySelector('.CodeInput');
    const lineNumberArea = document.querySelector('.LineNumberArea');

    function updateLineNumbers() {
        const lines = codeInput.value.split('\n').length;
        lineNumberArea.innerHTML = '';
        for (let i = 1; i <= lines; i++) {
            lineNumberArea.innerHTML += `${i}<br>`;
        }
    }

    codeInput.addEventListener('input', updateLineNumbers);
    updateLineNumbers(); // Initial update on page load

    const checkAndRepairBtn = document.getElementById('CheckAndRepair');
    const codeOutput = document.querySelector('.CodeOutput');

    // Function to copy text from coding box to repair box
    function copyTextToRepairBox() {
        codeOutput.value = codeInput.value; // Copy the input text to output
    }

    // Add event listener to the "Check and Repair" button
    checkAndRepairBtn.addEventListener('click', copyTextToRepairBox);

});
