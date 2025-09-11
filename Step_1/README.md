# Step 1: Extract Form Labels to CSV for Translation

This step extracts all form labels from a FormIO JSON structure and converts them into a CSV format suitable for translation workflows. The generated CSV will contain English labels in the first column, with empty columns for Hindi, English, and Telugu translations to be filled by the operations team.

## Overview

The `extractLabelsToCSV.js` script processes FormIO form JSON data and creates a translation-ready CSV file with the following structure:
- **Column 1**: English labels (extracted from form components)
- **Column 2**: Empty column for Hindi translations
- **Column 3**: Empty column for English translations  
- **Column 4**: Empty column for Telugu translations

## Prerequisites

- Node.js installed on your system
- Access to the FormIO platform at [https://formio.indusaction.org](https://formio.indusaction.org)

## Step-by-Step Instructions

### 1. Obtain Form JSON Data

1. Navigate to the FormIO platform: [https://formio.indusaction.org/#/form/<FORM_ID>](https://formio.indusaction.org/#/form/<FORM_ID>)
   - Replace `<FORM_ID>` with the actual form ID you want to process
   
2. Copy the complete JSON structure of the form
   - This JSON contains all form components, labels, and configuration data

### 2. Prepare the Script

1. Open `Step_1/extractLabelsToCSV.js` in your preferred text editor
2. Locate the `sampleData` object in the `main()` function (around line 120)
3. Replace the sample data with your copied form JSON

### 3. Run the Extraction Script

Execute the script using Node.js:

```bash
node Step_1/extractLabelsToCSV.js
```

### 4. Review Output

The script will:
- Extract all meaningful labels from the form components
- Automatically filter out common values like "Yes" and "No"
- Generate a CSV file named `form_labels.csv`
- Display a summary of extracted labels in the console

## Output Format

The generated CSV file will have the following structure:

```csv
English Labels,,,
,,
"Form Title",,,
"Question 1",,,
"Option A",,,
"Option B",,,
"Question 2",,,
...
```
