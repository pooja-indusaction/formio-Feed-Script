// Function to click the "Add Another" button and add a new row
function addRow() {
    const addFieldButton = document.querySelector('button[ref="datagrid-translations-addRow"]');
    
    if (!addFieldButton) {
        console.error("Add field button not found!");
        return;
    }

    // Click the "Add Another" button
    addFieldButton.click();
}

// Function to fill the rows with translation values and trigger input events
function fillRows() {
    const rows = document.querySelectorAll('tr[ref="datagrid-translations-row"]');
    
    rows.forEach((row, index) => {
        if (index < translations.length) {
            // Fill the key input
            const keyInput = row.querySelector('td[ref="datagrid-translations"] input[type="text"]');
            if (keyInput) {
                keyInput.value = translations[index].key;
                keyInput.dispatchEvent(new Event('input')); // Trigger the input event
            }
            
            // Fill the value input (second input inside the same row)
            const valueInput = row.querySelectorAll('td[ref="datagrid-translations"] input[type="text"]')[1];
            if (valueInput) {
                valueInput.value = translations[index].value;
                valueInput.dispatchEvent(new Event('input')); // Trigger the input event
            }
        }
    });
}

// Add rows based on translations array length and fill them with values
for (let i = 0; i < translations.length; i++) {
    addRow();  // Add a new row
    setTimeout(fillRows, 500); // Fill rows after they are added (wait for DOM update)
}
