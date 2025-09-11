function addRowAndFill(index) {
  return new Promise((resolve) => {
    const addFieldButton = document.querySelector(
      'button[ref="datagrid-translations-addRow"]'
    );

    if (!addFieldButton) {
      console.error("Add field button not found!");
      return;
    }

    // Click "Add Another" button
    addFieldButton.click();

    // Wait for row to be added before filling it
    setTimeout(() => {
      const rows = document.querySelectorAll(
        'tr[ref="datagrid-translations-row"]'
      );
      const newRow = rows[rows.length - 1]; // Get the last added row

      if (newRow) {
        const keyInput = newRow.querySelector(
          'td[ref="datagrid-translations"] input[type="text"]'
        );
        if (keyInput) {
          keyInput.value = translations[index].key;
          keyInput.dispatchEvent(new Event("input"));
        }

        const valueInput = newRow.querySelectorAll(
          'td[ref="datagrid-translations"] input[type="text"]'
        )[1];
        if (valueInput) {
          valueInput.value = translations[index].value;
          valueInput.dispatchEvent(new Event("input"));
        }
      }
      resolve(); // Resolve the promise after filling
    }, 500);
  });
}

// Function to add rows sequentially
async function addAllRows() {
  for (let i = 0; i < translations.length; i++) {
    await addRowAndFill(i); // Wait for each row to be added & filled before continuing
  }
}

// Start adding rows
addAllRows();
