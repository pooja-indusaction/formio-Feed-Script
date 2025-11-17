const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx"); // Install this package with `npm install xlsx`

function csvOrXlsxToJs(filePath, jsFilePath) {
  const fileExtension = path.extname(filePath).toLowerCase();
  let translations = [];

  if (fileExtension === ".csv") {
    // Read CSV file
    const data = fs.readFileSync(filePath, "utf8");
    const lines = data.split("\n").filter((line) => line.trim() !== ""); // Remove empty lines
    const [header, ...rows] = lines;

    // Skip header and process rows
    rows.forEach((row) => {
      const [key, value] = row.split(",").map((col) => col.trim());
      if (key && value) {
        translations.push({ key, value });
      }
    });
  } else if (fileExtension === ".xlsx") {
    // Read Excel file
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assume first sheet
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
    });

    // Skip header row and process data
    sheetData.slice(1).forEach((row) => {
      const [key, value] = row;
      if (key && value) {
        translations.push({ key, value });
      }
    });
  } else {
    throw new Error(
      "Unsupported file type. Please provide a .csv or .xlsx file."
    );
  }

  // Write to JS file
  const jsContent = `const translations = ${JSON.stringify(
    translations,
    null,
    4
  )};`;
  fs.writeFileSync(jsFilePath, jsContent, "utf8");

  console.log(`Translations have been successfully saved to ${jsFilePath}`);
}

// Replace with your file paths
const filePath = "Lakhpati_Didi_Hindi_translations - Sheet1.csv"; // Input file path (.csv or .xlsx)
const jsFilePath = "translationsUDID.js"; // Output JS file path. This will create a new file if it does not exist within the folder

try {
  csvOrXlsxToJs(filePath, jsFilePath);
} catch (error) {
  console.error(error.message);
}
