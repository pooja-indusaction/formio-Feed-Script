const fs = require('fs');
const path = require('path');

/**
 * Recursively extract all label values from a JSON object
 * @param {Object} data - The JSON object to extract labels from
 * @param {Array} labels - Array to store extracted labels
 */
function extractLabels(data, labels = []) {
    // Common labels to exclude from extraction
    const excludeLabels = ['Yes', 'No'];
    
    if (typeof data === 'object' && data !== null) {
        if (Array.isArray(data)) {
            // Handle arrays
            data.forEach(item => extractLabels(item, labels));
        } else {
            // Handle objects
            for (const [key, value] of Object.entries(data)) {
                if (key === 'label' && typeof value === 'string' && value.trim() !== '') {
                    const trimmedLabel = value.trim();
                    // Only add if not in exclude list
                    if (!excludeLabels.includes(trimmedLabel)) {
                        labels.push(trimmedLabel);
                    }
                }
                // Recursively search in nested objects
                extractLabels(value, labels);
            }
        }
    }
    return labels;
}

/**
 * Convert labels array to CSV format with translation structure
 * @param {Array} labels - Array of label strings
 * @returns {string} CSV content
 */
function labelsToCSV(labels) {
    if (labels.length === 0) {
        return 'English Labels\n\n';
    }
    
    // Create CSV content with three columns:
    // Column 1: English labels (vertical)
    // Column 2: Empty column for spacing
    // Column 3: Empty column for translations
    const csvRows = [];
    
    // Add header row
    csvRows.push('English Labels,,');
    
    // Add empty row for spacing
    csvRows.push(',,');
    
    // Add each label in a separate row
    labels.forEach(label => {
        // Escape commas and quotes in labels
        const escapedLabel = label.replace(/"/g, '""');
        csvRows.push(`"${escapedLabel}",,`);
    });
    
    return csvRows.join('\n');
}

/**
 * Process JSON data and save to CSV file
 * @param {Object|string} jsonData - JSON object or file path to JSON file
 * @param {string} outputPath - Path for output CSV file
 */
function processJSONToCSV(jsonData, outputPath = 'extracted_labels.csv') {
    try {
        let data;
        
        // Handle both JSON object and file path
        if (typeof jsonData === 'string') {
            // Read from file
            const fileContent = fs.readFileSync(jsonData, 'utf8');
            data = JSON.parse(fileContent);
        } else {
            // Use provided object
            data = jsonData;
        }
        
        // Extract labels
        const labels = extractLabels(data);
        
        if (labels.length === 0) {
            console.log('No labels found in the provided JSON data.');
            return;
        }
        
        // Convert to CSV
        const csvContent = labelsToCSV(labels);
        
        // Write to file
        fs.writeFileSync(outputPath, csvContent, 'utf8');
        
        console.log(`Successfully extracted ${labels.length} labels and saved to ${outputPath}`);
        console.log('CSV format:');
        console.log('- Column 1: English labels (vertical)');
        console.log('- Column 2: Empty column for spacing');
        console.log('- Column 3: Empty column for translations');
        
        return {
            labels,
            csvContent,
            outputPath
        };
        
    } catch (error) {
        console.error('Error processing JSON to CSV:', error.message);
        throw error;
    }
}

/**
 * Main function to run the script
 */
function main() {
    // Example usage with the sample data from extract_labels.py
    const sampleData = {
      "_id": "68bfcacb7f60049439900fef",
      "title": "Identification Stage [Basti Campaign]",
      "name": "IdentificationBastiCampaign-2025090912555",
      "path": "identificationbasticampaign-2025090912555",
      "type": "resource",
      "display": "form",
      "tags": [],
      "submissionAccess": [
        {
          "type": "read_all",
          "roles": [
            "6732e4badd7e70b2cb4bd3be"
          ]
        },
        {
          "type": "update_all",
          "roles": [
            "6732e4badd7e70b2cb4bd3be"
          ]
        },
        {
          "type": "delete_all",
          "roles": [
            "6732e4badd7e70b2cb4bd3be"
          ]
        },
        {
          "type": "create_own",
          "roles": [
            "6732e4badd7e70b2cb4bd3be",
            "6732e4bbdd7e70b2cb4bd3c6"
          ]
        }
      ],
      "owner": "6732e4ed27806befcb7605d0",
      "components": [
        {
          "label": "Date and time of the survey",
          "labelPosition": "top",
          "displayInTimezone": "viewer",
          "useLocaleSettings": false,
          "allowInput": true,
          "format": "yyyy-MM-dd hh:mm a",
          "placeholder": "",
          "description": "",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "hidden": false,
          "hideLabel": false,
          "autofocus": false,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "shortcutButtons": [],
          "enableDate": true,
          "datePicker": {
            "disable": "",
            "disableFunction": "",
            "disableWeekends": false,
            "disableWeekdays": false,
            "minDate": null,
            "maxDate": null,
            "showWeeks": true,
            "startingDay": 0,
            "initDate": "",
            "minMode": "day",
            "maxMode": "year",
            "yearRows": 4,
            "yearColumns": 5
          },
          "enableTime": true,
          "timePicker": {
            "showMeridian": true,
            "hourStep": 1,
            "minuteStep": 1,
            "readonlyInput": false,
            "mousewheel": true,
            "arrowkeys": true
          },
          "multiple": false,
          "defaultValue": "",
          "defaultDate": "moment()",
          "customOptions": {
    
          },
          "persistent": true,
          "protected": false,
          "dbIndex": false,
          "encrypted": false,
          "redrawOn": "",
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "allowCalculateOverride": false,
          "validateOn": "change",
          "validate": {
            "required": true,
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "enableMinDateInput": false,
          "enableMaxDateInput": false,
          "unique": false,
          "errorLabel": "",
          "errors": "",
          "key": "dateAndTimeOfTheSurvey",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "datetime",
          "timezone": "",
          "dataGridLabel": false,
          "input": true,
          "widget": {
            "type": "calendar",
            "displayInTimezone": "viewer",
            "locale": "en",
            "useLocaleSettings": false,
            "allowInput": true,
            "mode": "single",
            "enableTime": true,
            "noCalendar": false,
            "format": "yyyy-MM-dd hh:mm a",
            "hourIncrement": 1,
            "minuteIncrement": 1,
            "time_24hr": false,
            "minDate": null,
            "disabledDates": "",
            "disableWeekends": false,
            "disableWeekdays": false,
            "disableFunction": "",
            "maxDate": null
          },
          "prefix": "",
          "suffix": "",
          "refreshOn": "",
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "datepickerMode": "day",
          "id": "eohzro"
        },
        {
          "label": "Citizen Name",
          "labelPosition": "top",
          "placeholder": "",
          "description": "",
          "tooltip": "",
          "prefix": "",
          "suffix": "",
          "widget": {
            "type": "input"
          },
          "inputMask": "",
          "displayMask": "",
          "applyMaskOn": "change",
          "allowMultipleMasks": false,
          "customClass": "",
          "tabindex": "",
          "autocomplete": "",
          "hidden": false,
          "hideLabel": false,
          "showWordCount": false,
          "showCharCount": false,
          "mask": false,
          "autofocus": false,
          "spellcheck": true,
          "disabled": false,
          "tableView": true,
          "modalEdit": false,
          "multiple": false,
          "persistent": true,
          "inputFormat": "plain",
          "protected": false,
          "dbIndex": false,
          "case": "",
          "truncateMultipleSpaces": false,
          "encrypted": false,
          "redrawOn": "",
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "value = (data.firstName || data.lastName) \n  ? `${data.firstName?data.firstName: ''} ${data.lastName? data.lastName: ''}`\n  : data.citizenName ?data.citizenName: '';",
          "calculateServer": false,
          "allowCalculateOverride": false,
          "validateOn": "change",
          "validate": {
            "required": false,
            "pattern": "",
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "minLength": "",
            "maxLength": "",
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "unique": false,
          "validateWhenHidden": false,
          "errorLabel": "",
          "errors": "",
          "key": "citizenName",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "textfield",
          "dataGridLabel": false,
          "input": true,
          "refreshOn": "",
          "addons": [],
          "inputType": "text",
          "id": "epz5hak",
          "defaultValue": null
        },
        {
          "label": "Are you the above mentioned citizen or related to them?",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "description": "",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "inline": false,
          "hidden": false,
          "hideLabel": false,
          "autofocus": false,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "dataSrc": "values",
          "values": [
            {
              "label": "I am above mentioned citizen (self)",
              "value": "I am above mentioned citizen (self)",
              "shortcut": ""
            },
            {
              "label": "I am related to them",
              "value": "I am related to them",
              "shortcut": ""
            },
            {
              "label": "I am not related to them but I know them",
              "value": "I am not related to them but I know them",
              "shortcut": ""
            },
            {
              "label": "I don't know them",
              "value": "I don't know them",
              "shortcut": ""
            }
          ],
          "dataType": "",
          "valueProperty": "",
          "persistent": true,
          "protected": false,
          "dbIndex": false,
          "encrypted": false,
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "allowCalculateOverride": false,
          "validate": {
            "required": false,
            "onlyAvailableItems": false,
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "validateWhenHidden": false,
          "errorLabel": "",
          "errors": "",
          "key": "areYouTheAboveMentionedCitizenOrRelatedToThem",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "radio",
          "dataGridLabel": false,
          "data": {
            "url": ""
          },
          "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
          "authenticate": false,
          "ignoreCache": false,
          "redrawOn": "",
          "input": true,
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "unique": false,
          "refreshOn": "",
          "widget": null,
          "validateOn": "change",
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "inputType": "radio",
          "fieldSet": false,
          "id": "ex354ov",
          "defaultValue": null
        },
        {
          "label": "Can you please provide their phone number",
          "labelPosition": "top",
          "widget": "choicesjs",
          "placeholder": "",
          "description": "",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "hidden": false,
          "hideLabel": false,
          "uniqueOptions": false,
          "autofocus": false,
          "disabled": false,
          "tableView": true,
          "modalEdit": false,
          "multiple": false,
          "dataSrc": "values",
          "data": {
            "values": [
              {
                "label": "Yes",
                "value": "Yes"
              },
              {
                "label": "No",
                "value": "No"
              }
            ],
            "resource": "",
            "url": "",
            "json": "",
            "custom": ""
          },
          "dataType": "",
          "idPath": "id",
          "valueProperty": "",
          "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
          "refreshOn": "",
          "refreshOnBlur": "",
          "clearOnRefresh": false,
          "searchEnabled": true,
          "selectThreshold": 0.3,
          "readOnlyValue": false,
          "customOptions": {
    
          },
          "useExactSearch": false,
          "persistent": true,
          "protected": false,
          "dbIndex": false,
          "encrypted": false,
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "allowCalculateOverride": false,
          "validateOn": "change",
          "validate": {
            "required": false,
            "onlyAvailableItems": false,
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "unique": false,
          "errorLabel": "",
          "errors": "",
          "key": "canYouPleaseProvideTheirPhoneNumber",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": true,
            "when": "areYouTheAboveMentionedCitizenOrRelatedToThem",
            "eq": "I am not related to them but I know them",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "select",
          "indexeddb": {
            "filter": {
    
            }
          },
          "dataGridLabel": false,
          "lazyLoad": true,
          "selectFields": "",
          "searchField": "",
          "searchDebounce": 0.3,
          "minSearch": 0,
          "filter": "",
          "limit": 100,
          "authenticate": false,
          "ignoreCache": false,
          "redrawOn": "",
          "input": true,
          "prefix": "",
          "suffix": "",
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "fuseOptions": {
            "include": "score",
            "threshold": 0.3
          },
          "id": "euy2bxh",
          "defaultValue": ""
        },
        {
          "label": "Mobile Number",
          "labelPosition": "top",
          "placeholder": "",
          "description": "",
          "tooltip": "",
          "prefix": "",
          "suffix": "",
          "widget": {
            "type": "input"
          },
          "displayMask": "",
          "applyMaskOn": "change",
          "customClass": "",
          "tabindex": "",
          "autocomplete": "",
          "hidden": false,
          "hideLabel": false,
          "mask": false,
          "autofocus": false,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "multiple": false,
          "persistent": true,
          "delimiter": false,
          "requireDecimal": false,
          "inputFormat": "plain",
          "protected": false,
          "dbIndex": false,
          "truncateMultipleSpaces": false,
          "encrypted": false,
          "redrawOn": "",
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "allowCalculateOverride": false,
          "validateOn": "change",
          "validate": {
            "required": false,
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "min": "",
            "max": "",
            "strictDateValidation": false,
            "multiple": false,
            "unique": false,
            "step": "any",
            "integer": ""
          },
          "errorLabel": "",
          "errors": "",
          "key": "mobileNumber1",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": true,
            "when": "canYouPleaseProvideTheirPhoneNumber",
            "eq": "Yes",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "number",
          "dataGridLabel": false,
          "input": true,
          "unique": false,
          "refreshOn": "",
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "id": "ejd7gp",
          "defaultValue": null
        },
        {
          "legend": "Respondent Details",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "hidden": false,
          "disabled": false,
          "modalEdit": false,
          "key": "fieldSet",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "show = (data.areYouTheAboveMentionedCitizenOrRelatedToThem == 'I am related to them' ||\ndata.areYouTheAboveMentionedCitizenOrRelatedToThem == 'I am above mentioned citizen (self)')\n",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "fieldset",
          "label": "Field Set",
          "dataGridLabel": false,
          "input": false,
          "tableView": false,
          "components": [
            {
              "label": "Respondent name (Full Name)",
              "labelPosition": "top",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "inputMask": "",
              "displayMask": "",
              "applyMaskOn": "change",
              "allowMultipleMasks": false,
              "customClass": "",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "showWordCount": false,
              "showCharCount": false,
              "mask": false,
              "autofocus": false,
              "spellcheck": true,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "persistent": true,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "case": "",
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "\r\n// value = data.areYouTheAboveMentionedCitizenOrRelatedToThem === \"I am above mentioned citizen (self)\"  \r\n//     ? (data.firstName || \"\") + \" \" + (data.lastName || \"\")  \r\n//     : (value || \"\");\r\n\r\n// value = data.areYouTheAboveMentionedCitizenOrRelatedToThem === \"I am above mentioned citizen (self)\"  \r\n//     ? (form.isEditing ? (data.citizenName ? data.citizenName : '')  \r\n//                       : `${data.firstName ? data.firstName : ''} ${data.lastName ? data.lastName : ''}`.trim())  \r\n//     : value; // Let user enter manually for other options\r\n\r\nvalue = data.areYouTheAboveMentionedCitizenOrRelatedToThem === \"I am above mentioned citizen (self)\"\r\n  ? ((data.firstName || data.lastName) \r\n        ? `${data.firstName ? data.firstName : ''} ${data.lastName ? data.lastName : ''}`.trim()\r\n        : (data.citizenName ? data.citizenName : ''))\r\n  : value;\r\n\r\n\r\n\r\n\r\n",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "respondentNameFullName",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "textfield",
              "dataGridLabel": false,
              "input": true,
              "refreshOn": "",
              "addons": [],
              "inputType": "text",
              "id": "eaqufxe",
              "defaultValue": ""
            },
            {
              "label": "Gender",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Female",
                    "value": "Female"
                  },
                  {
                    "label": "Male",
                    "value": "Male"
                  },
                  {
                    "label": "Transgender",
                    "value": "Transgender"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "gender",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e8ckgmj",
              "defaultValue": ""
            },
            {
              "label": "Contact Number",
              "labelPosition": "top",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "displayMask": "",
              "applyMaskOn": "change",
              "customClass": "",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "mask": false,
              "autofocus": false,
              "disabled": false,
              "tableView": false,
              "modalEdit": false,
              "multiple": false,
              "persistent": true,
              "delimiter": false,
              "requireDecimal": false,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "value=data.mobileNumber",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "min": "",
                "max": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false,
                "step": "any",
                "integer": ""
              },
              "errorLabel": "",
              "errors": "",
              "key": "number",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "number",
              "dataGridLabel": false,
              "input": true,
              "unique": false,
              "refreshOn": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "id": "e7j5e0b",
              "defaultValue": null
            },
            {
              "label": "State",
              "labelPosition": "top",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "inputMask": "",
              "displayMask": "",
              "applyMaskOn": "change",
              "allowMultipleMasks": false,
              "customClass": "",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "showWordCount": false,
              "showCharCount": false,
              "mask": false,
              "autofocus": false,
              "spellcheck": true,
              "disabled": true,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "defaultValue": "Uttar Pradesh",
              "persistent": true,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "case": "",
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "state",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "textfield",
              "dataGridLabel": false,
              "input": true,
              "refreshOn": "",
              "addons": [],
              "inputType": "text",
              "id": "e82nucg"
            },
            {
              "label": "District",
              "labelPosition": "top",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "inputMask": "",
              "displayMask": "",
              "applyMaskOn": "change",
              "allowMultipleMasks": false,
              "customClass": "",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "showWordCount": false,
              "showCharCount": false,
              "mask": false,
              "autofocus": false,
              "spellcheck": true,
              "disabled": true,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "defaultValue": "Basti",
              "persistent": true,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "case": "",
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "district",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "textfield",
              "dataGridLabel": false,
              "input": true,
              "refreshOn": "",
              "addons": [],
              "inputType": "text",
              "id": "e3mks5v"
            },
            {
              "label": "Block",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "custom",
              "data": {
                "resource": "",
                "url": "",
                "json": "",
                "custom": "const selectedDistrict = data.district;\r\n\r\nconst districtBlocks = {\r\n    \"Basti\": [\"Basti Sadar\", \"Bahadurpur\", \"Saudiyat\", \"Bankati\", \"Gaur\", \"Saltaua Gopalpur\", \"Haraia\",\r\n    \"Kudraha\", \"Captanganj (Kaptanganj)\", \"Dubauliya Bazar\", \"Parsarampur\", \"Rughaulee\", \"Vikramjeet\", \"Ramnagar\"]\r\n};\r\n\r\n\r\n// Check if the selected district exists in the predefined list\r\nif (districtBlocks[selectedDistrict]) {\r\n    // If the district is in the list, use its blocks\r\n    values = districtBlocks[selectedDistrict];\r\n} else {\r\n    // If the district is not in the list, show only \"Other\"\r\n    values = [\"Other\"];\r\n}\r\n",
                "values": [
                  {
                    "label": "",
                    "value": ""
                  }
                ]
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "block",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e1x7so",
              "defaultValue": ""
            },
            {
              "label": "Do you have labour card ?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "hasLabourCard",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "eqaf0ro",
              "defaultValue": ""
            },
            {
              "label": "Does your wife have a labour card?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "wifeHasLabourCard",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "show = (data.hasLabourCard == \"No\" && data.gender == \"Male\")\r\n",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "eapofp2",
              "defaultValue": ""
            },
            {
              "label": "How old is your labour card?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Less than 1 year",
                    "value": "Less than 1 year"
                  },
                  {
                    "label": "More than 1 year",
                    "value": "More than 1 year"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "cwCardDuration",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": true,
                "when": "hasLabourCard",
                "eq": "Yes",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e53g12",
              "defaultValue": ""
            },
            {
              "label": "Is your card renewed?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "isYourCardRenewed",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": true,
                "when": "cwCardDuration",
                "eq": "More than 1 year",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "engx55v",
              "defaultValue": ""
            },
            {
              "label": "How old is wife's your labour card?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Less than 1 year",
                    "value": "Less than 1 year"
                  },
                  {
                    "label": "More than 1 year",
                    "value": "More than 1 year"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "wifecwCardDuration",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": true,
                "when": "wifeHasLabourCard",
                "eq": "Yes",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "ertqrcj",
              "defaultValue": ""
            },
            {
              "label": "Is your wife's card renewed?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "isYourWifesCardRenewed",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": true,
                "when": "wifecwCardDuration",
                "eq": "More than 1 year",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e3867ty",
              "defaultValue": ""
            },
            {
              "label": "How many children do you have ?",
              "labelPosition": "top",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "displayMask": "",
              "applyMaskOn": "change",
              "customClass": "",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "mask": false,
              "autofocus": false,
              "disabled": false,
              "tableView": false,
              "modalEdit": false,
              "multiple": false,
              "persistent": true,
              "delimiter": false,
              "requireDecimal": false,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "min": "",
                "max": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false,
                "step": "any",
                "integer": ""
              },
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "childrenEverHad",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "number",
              "dataGridLabel": false,
              "input": true,
              "unique": false,
              "refreshOn": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "id": "ee2o6yk",
              "defaultValue": null
            },
            {
              "label": "In the last one year, did you have any child or are you/your wife pregnant now?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "1st Pregnancy",
                    "value": "1st Pregnancy"
                  },
                  {
                    "label": "2nd Pregnancy",
                    "value": "2nd Pregnancy"
                  },
                  {
                    "label": "Delivered 1st child in last 9 months",
                    "value": "Delivered 1st child in last 9 months"
                  },
                  {
                    "label": "Delivered 2nd child in last 9 months",
                    "value": "Delivered 2nd child in last 9 months"
                  },
                  {
                    "label": "None of the above",
                    "value": "None of the above"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "pregnancyStatus",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e95djq",
              "defaultValue": ""
            },
            {
              "label": "Was your child's delivery an institutional Delivery?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "homeDelivery",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "show = (\r\n  data.pregnancyStatus === \"1st Pregnancy\" ||\r\n  data.pregnancyStatus === \"2nd Pregnancy\" ||\r\n  data.pregnancyStatus === \"Delivered 1st child in last 9 months\" ||\r\n  data.pregnancyStatus === \"Delivered 2nd child in last 9 months\"\r\n);\r\n",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "emkmrsn",
              "defaultValue": ""
            },
            {
              "label": "Is the mother 18+?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "spouseAge",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "show = (\r\n  data.pregnancyStatus === \"1st Pregnancy\" ||\r\n  data.pregnancyStatus === \"2nd Pregnancy\" ||\r\n  data.pregnancyStatus === \"Delivered 1st child in last 9 months\" ||\r\n  data.pregnancyStatus === \"Delivered 2nd child in last 9 months\"\r\n);\r\n",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "en6jt88",
              "defaultValue": ""
            },
            {
              "label": "What's the age of female children? (Select for all female children)",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": true,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "0 - 4",
                    "value": "0 - 4"
                  },
                  {
                    "label": "5 - 17",
                    "value": "5 - 17"
                  },
                  {
                    "label": "18 - 22",
                    "value": "18 - 22"
                  },
                  {
                    "label": "Above 22",
                    "value": "Above 22"
                  },
                  {
                    "label": "Dont have a female child",
                    "value": "Dont have a female child"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "femaleChildrenAge",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "show=(data.childrenEverHad \u003E0)",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "ezi6hx5",
              "defaultValue": null
            },
            {
              "label": "What's the age of male children? (Select for all male children)",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": true,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "0 - 4",
                    "value": "0 - 4"
                  },
                  {
                    "label": "5 - 17",
                    "value": "15 - 17"
                  },
                  {
                    "label": "18 - 22",
                    "value": "18 - 22"
                  },
                  {
                    "label": "Above 22",
                    "value": "Above 22"
                  },
                  {
                    "label": "Dont have a male child",
                    "value": "Dont have a male child"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "maleChildrenAge",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "show=(data.childrenEverHad \u003E0)",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "ervvsz",
              "defaultValue": null
            },
            {
              "label": "What class/course do your children study in?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": true,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Class 1",
                    "value": "Class 1"
                  },
                  {
                    "label": "Class 2",
                    "value": "Class 2"
                  },
                  {
                    "label": "Class 3",
                    "value": "Class 3"
                  },
                  {
                    "label": "Class 4",
                    "value": "Class 4"
                  },
                  {
                    "label": "Class 5",
                    "value": "Class 5"
                  },
                  {
                    "label": "Class 6",
                    "value": "Class 6"
                  },
                  {
                    "label": "Class 7",
                    "value": "Class 7"
                  },
                  {
                    "label": "Class 8",
                    "value": "Class 8"
                  },
                  {
                    "label": "Class 9",
                    "value": "Class 9"
                  },
                  {
                    "label": "Class 10",
                    "value": "Class 10"
                  },
                  {
                    "label": "Class 11",
                    "value": "Class 11"
                  },
                  {
                    "label": "Class 12",
                    "value": "Class 12"
                  },
                  {
                    "label": "Graduate level",
                    "value": "Graduate level"
                  },
                  {
                    "label": "Post Graduation level",
                    "value": "Post Graduation level"
                  },
                  {
                    "label": "MBBS or postgraduate degree/diploma in medicine",
                    "value": "MBBS or postgraduate degree/diploma in medicine"
                  },
                  {
                    "label": "Research in any subjec",
                    "value": "Research in any subjec"
                  },
                  {
                    "label": "ITI Course",
                    "value": "ITI Course"
                  },
                  {
                    "label": "5 Years LLB Course",
                    "value": "5 Years LLB Course"
                  },
                  {
                    "label": "LLB 3 years Course",
                    "value": "LLB 3 years Course"
                  },
                  {
                    "label": "Technical Courses such as Engineering",
                    "value": "Technical Courses such as Engineering"
                  },
                  {
                    "label": "MBA",
                    "value": "MBA"
                  },
                  {
                    "label": "None of the above",
                    "value": "None of the above"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "childClassCourse",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "show=(data.childrenEverHad \u003E0)",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "emgrg6m",
              "defaultValue": ""
            },
            {
              "label": "Is the girl 18+ years old and unmarried?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "unmarriedGirl",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "// show=(data.femaleChildrenAge == \"18 - 22\" || data.femaleChildrenAge == \"Above 22\")\nshow=(data.femaleChildrenAge || []).includes(\"18 - 22\") ||\n  (data.femaleChildrenAge || []).includes(\"Above 22\")",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e07ez93",
              "defaultValue": ""
            },
            {
              "label": "Has your daughter been married in the last one year?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "Yes",
                    "value": "Yes"
                  },
                  {
                    "label": "No",
                    "value": "No"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "marriagePeriod",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": true,
                "when": "unmarriedGirl",
                "eq": "No",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "e3abh36",
              "defaultValue": ""
            },
            {
              "label": "What is the order of female children in the family?",
              "labelPosition": "top",
              "widget": "choicesjs",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "customClass": "",
              "tabindex": "",
              "hidden": false,
              "hideLabel": false,
              "uniqueOptions": false,
              "autofocus": false,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "dataSrc": "values",
              "data": {
                "values": [
                  {
                    "label": "The first child is a girl",
                    "value": "The first child is a girl"
                  },
                  {
                    "label": "The second child is a girl",
                    "value": "The second child is a girl"
                  },
                  {
                    "label": "The first 2 children are girls",
                    "value": "The first 2 children are girls"
                  },
                  {
                    "label": "None of the above",
                    "value": "None of the above"
                  }
                ],
                "resource": "",
                "url": "",
                "json": "",
                "custom": ""
              },
              "dataType": "",
              "idPath": "id",
              "valueProperty": "",
              "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
              "refreshOn": "",
              "refreshOnBlur": "",
              "clearOnRefresh": false,
              "searchEnabled": true,
              "selectThreshold": 0.3,
              "readOnlyValue": false,
              "customOptions": {
    
              },
              "useExactSearch": false,
              "persistent": true,
              "protected": false,
              "dbIndex": false,
              "encrypted": false,
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "girlChildSequence",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "\nshow=(data.unmarriedGirl == \"Yes\" || data.marriagePeriod == \"Yes\")",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "select",
              "indexeddb": {
                "filter": {
    
                }
              },
              "dataGridLabel": false,
              "lazyLoad": true,
              "selectFields": "",
              "searchField": "",
              "searchDebounce": 0.3,
              "minSearch": 0,
              "filter": "",
              "limit": 100,
              "authenticate": false,
              "ignoreCache": false,
              "redrawOn": "",
              "input": true,
              "prefix": "",
              "suffix": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "fuseOptions": {
                "include": "score",
                "threshold": 0.3
              },
              "id": "eb3j94",
              "defaultValue": ""
            },
            {
              "label": "What was the groom's age at the time of marriage?",
              "labelPosition": "top",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "displayMask": "",
              "applyMaskOn": "change",
              "customClass": "",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "mask": false,
              "autofocus": false,
              "disabled": false,
              "tableView": false,
              "modalEdit": false,
              "multiple": false,
              "persistent": true,
              "delimiter": false,
              "requireDecimal": false,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "min": "",
                "max": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false,
                "step": "any",
                "integer": ""
              },
              "validateWhenHidden": false,
              "errorLabel": "",
              "errors": "",
              "key": "groomAge",
              "tags": [],
              "properties": {
    
              },
              "conditional": {
                "show": true,
                "when": "marriagePeriod",
                "eq": "Yes",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {
    
              },
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "number",
              "dataGridLabel": false,
              "input": true,
              "unique": false,
              "refreshOn": "",
              "showCharCount": false,
              "showWordCount": false,
              "allowMultipleMasks": false,
              "addons": [],
              "id": "eht3wsh",
              "defaultValue": null
            },
            {
              "label": "What is your family income?",
              "applyMaskOn": "change",
              "tableView": true,
              "validateWhenHidden": false,
              "key": "familyIncome",
              "customConditional": "show=(data.unmarriedGirl == \"Yes\" || data.marriagePeriod == \"Yes\")",
              "type": "number",
              "input": true,
              "id": "em67soi",
              "placeholder": "",
              "prefix": "",
              "customClass": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": null,
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "refreshOn": "",
              "redrawOn": "",
              "modalEdit": false,
              "dataGridLabel": false,
              "labelPosition": "top",
              "description": "",
              "errorLabel": "",
              "tooltip": "",
              "hideLabel": false,
              "tabindex": "",
              "disabled": false,
              "autofocus": false,
              "dbIndex": false,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "widget": {
                "type": "input"
              },
              "attributes": {
    
              },
              "validateOn": "change",
              "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false,
                "min": "",
                "max": "",
                "step": "any",
                "integer": ""
              },
              "conditional": {
                "show": null,
                "when": null,
                "eq": ""
              },
              "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "allowCalculateOverride": false,
              "encrypted": false,
              "showCharCount": false,
              "showWordCount": false,
              "properties": {
    
              },
              "allowMultipleMasks": false,
              "addons": []
            }
          ],
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "protected": false,
          "unique": false,
          "persistent": false,
          "clearOnHide": true,
          "refreshOn": "",
          "redrawOn": "",
          "labelPosition": "top",
          "description": "",
          "errorLabel": "",
          "hideLabel": false,
          "autofocus": false,
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "widget": null,
          "validateOn": "change",
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false,
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "tree": false,
          "lazyLoad": false,
          "id": "elz0p2"
        },
        {
          "label": "Save",
          "action": "saveState",
          "showValidations": false,
          "theme": "primary",
          "size": "sm",
          "block": true,
          "leftIcon": "",
          "rightIcon": "",
          "shortcut": "",
          "description": "",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "disableOnInvalid": false,
          "hidden": false,
          "autofocus": false,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "key": "save",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "button",
          "hideLabel": false,
          "input": true,
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "protected": false,
          "unique": false,
          "persistent": false,
          "clearOnHide": true,
          "refreshOn": "",
          "redrawOn": "",
          "dataGridLabel": true,
          "labelPosition": "top",
          "errorLabel": "",
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "widget": {
            "type": "input"
          },
          "validateOn": "change",
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false,
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "id": "ep7lo17",
          "state": "Save as draft"
        },
        {
          "label": "Submit",
          "action": "submit",
          "showValidations": false,
          "theme": "primary",
          "size": "sm",
          "block": true,
          "leftIcon": "",
          "rightIcon": "",
          "shortcut": "",
          "description": "",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "disableOnInvalid": true,
          "hidden": false,
          "autofocus": false,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "key": "submit",
          "tags": [],
          "properties": {
    
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {
    
          },
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "button",
          "saveOnEnter": false,
          "hideLabel": false,
          "input": true,
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "protected": false,
          "unique": false,
          "persistent": false,
          "clearOnHide": true,
          "refreshOn": "",
          "redrawOn": "",
          "dataGridLabel": true,
          "labelPosition": "top",
          "errorLabel": "",
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "widget": {
            "type": "input"
          },
          "validateOn": "change",
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false,
            "strictDateValidation": false,
            "multiple": false,
            "unique": false
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "addons": [],
          "id": "ejbax9g"
        }
      ],
      "pdfComponents": [],
      "access": [
        {
          "type": "read_all",
          "roles": [
            "6732e4badd7e70b2cb4bd3be",
            "6732e4bbdd7e70b2cb4bd3c6",
            "6732e4badd7e70b2cb4bd3c2"
          ]
        }
      ],
      "created": "2025-09-09T06:35:55.750Z",
      "modified": "2025-09-11T05:05:49.101Z",
      "machineName": "IdentificationBastiCampaign-2025090912555"
    }
    
    // Process the sample data
    try {
        const result = processJSONToCSV(sampleData, 'Auto_Generated/form_labels.csv');
        console.log('\nExtracted labels:');
        result.labels.forEach((label, index) => {
            console.log(`${index + 1}. ${label}`);
        });
    } catch (error) {
        console.error('Failed to process sample data:', error.message);
    }
}

// Export functions for use in other modules
module.exports = {
    extractLabels,
    labelsToCSV,
    processJSONToCSV
};

// Run main function if this file is executed directly
if (require.main === module) {
    main();
}
