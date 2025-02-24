import json
import csv

def extract_labels(data, labels):
    """Recursively extract all label values from the given data object."""
    if isinstance(data, dict):
        for key, value in data.items():
            if key == "label" and isinstance(value, str):
                labels.append(value)
            extract_labels(value, labels)
    elif isinstance(data, list):
        for item in data:
            extract_labels(item, labels)

def save_labels_to_csv(labels, filename="formlabel.csv"):
    """Save extracted labels to a CSV file."""
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["Form Labels"])
        for label in labels:
            writer.writerow([label])


# Example Data. 
# Replace it with your components data
data = {
  "_id": "67b6d2b902e1b9057aed61b2",
  "title": "Survey [Punjab UDID Calling]",
  "name": "SurveyPunjabUDIDCalling-2025022012295",
  "path": "surveypunjabudidcalling-2025022012295",
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
  "owner": "6732e4bddd7e70b2cb4bd404",
  "components": [
    {
      "label": "Hello (Sat Sri Akal), my name is \u003C_your name_\u003E, and I am calling from Punjab Government. Am I talking to \u003C__Citizen Name__\u003E?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Citizen",
            "value": "Citizen"
          },
          {
            "label": "Citizen Guardian",
            "value": "Citizen Guardian"
          },
          {
            "label": "Wrong Number",
            "value": "Wrong Number"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "Beneficiary_confirmation",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show": "null",
        "when": "null",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "e5u6ap",
      "defaultValue": ""
    },
    {
      "label": "Sat sri akal, __________, I wanted to ask some questions on disability pensions given by the Punjab government. Can I talk to you right now?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "Consent",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show": "null",
        "when": "null",
        "eq": "",
        "json": ""
      },
      "customConditional": "show = (data.Beneficiary_confirmation == 'Citizen' || data.Beneficiary_confirmation == 'Citizen Guardian')",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "ex0ipzs",
      "defaultValue": ""
    },
    {
      "label": "Is you or any person from your family currently receiving disability pension?",
      "labelPosition": "top",
      "optionsLabelPosition": "right",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "inline": "false",
      "hidden": "false",
      "hideLabel": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView": "false",
      "modalEdit": "false",
      "dataSrc": "values",
      "values": [
        {
          "label": "Yes",
          "value": "Yes",
          "shortcut": ""
        },
        {
          "label": "No",
          "value": "No",
          "shortcut": ""
        }
      ],
      "dataType": "",
      "valueProperty": "",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "errorLabel": "",
      "errors": "",
      "key": "receiving_pension",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "Consent",
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
      "type": "radio",
      "dataGridLabel": "false",
      "data": {
        "url": ""
      },
      "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "unique": "false",
      "refreshOn": "",
      "widget": "null",
      "validateOn": "change",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "inputType": "radio",
      "fieldSet": "false",
      "id": "efnalcu",
      "defaultValue": ""
    },
    {
      "label": "How long are you receiving disability pension?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Last 3 months",
            "value": "Last 3 months"
          },
          {
            "label": "Last 6 months",
            "value": "Last 6 months"
          },
          {
            "label": "Last 1 year",
            "value": "Last 1 year"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "receiving_pension_from",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "receiving_pension",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "ewvwlm",
      "defaultValue": ""
    },
    {
      "label": "Area Type?",
      "labelPosition": "top",
      "optionsLabelPosition": "right",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "inline": "false",
      "hidden": "false",
      "hideLabel": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView": "false",
      "modalEdit": "false",
      "dataSrc": "values",
      "values": [
        {
          "label": "Rural",
          "value": "Rural",
          "shortcut": ""
        },
        {
          "label": "Urban",
          "value": "Urban",
          "shortcut": ""
        }
      ],
      "dataType": "",
      "valueProperty": "",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "errorLabel": "",
      "errors": "",
      "key": "areaType",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "receiving_pension",
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
      "type": "radio",
      "dataGridLabel": "false",
      "data": {
        "url": ""
      },
      "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "unique": "false",
      "refreshOn": "",
      "widget": "null",
      "validateOn": "change",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "inputType": "radio",
      "fieldSet": "false",
      "id": "exc06ni",
      "defaultValue": ""
    },
    {
      "label": "How much is your annual income?",
      "labelPosition": "top",
      "optionsLabelPosition": "right",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "inline": "false",
      "hidden": "false",
      "hideLabel": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView": "false",
      "modalEdit": "false",
      "dataSrc": "values",
      "values": [
        {
          "label": "If below or equal to 60000",
          "value": "If below or equal to 60000",
          "shortcut": ""
        },
        {
          "label": "If more than 60000",
          "value": "If more than 60000",
          "shortcut": ""
        }
      ],
      "dataType": "",
      "valueProperty": "",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "errorLabel": "",
      "errors": "",
      "key": "household_income",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "receiving_pension",
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
      "type": "radio",
      "dataGridLabel": "false",
      "data": {
        "url": ""
      },
      "template": "\u003Cspan\u003E{{ item.label }}\u003C/span\u003E",
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "unique": "false",
      "refreshOn": "",
      "widget": "null",
      "validateOn": "change",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "inputType": "radio",
      "fieldSet": "false",
      "id": "e82sct4",
      "defaultValue": ""
    },
    {
      "label": "What is your total land ownership for a. fertile land b.barren land?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple":"true",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Fertile land upto 2.5 acre",
            "value": "Fertile land upto 2.5 acre"
          },
          {
            "label": "Fertile land more than 2.5 acre",
            "value": "Fertile land more than 2.5 acre"
          },
          {
            "label": "Barren land upto 5 acres",
            "value": "Barren land upto 5 acres"
          },
          {
            "label": "Barren land more than 5 acres",
            "value": "Barren land more than 5 acres"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "Land_ownership_rural",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "areaType",
        "eq": "Rural",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "esxd3fg",
      "defaultValue": []
    },
    {
      "label": "What is your total land ownership for a. fertile land b.barren land?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Upto 200 sq.mt",
            "value": "Upto 200 sq.mt"
          },
          {
            "label": "More than 200 sq.mt",
            "value": "More than 200 sq.mt"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "Land_ownership_urban",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "areaType",
        "eq": "Urban",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "ec00dsi",
      "defaultValue": ""
    },
    {
      "html": "\u003Cp\u003EUnfortunately, you are not eligible for pensions. Thank you for giving us your time.\u003C/p\u003E",
      "label": "Content",
      "customClass": "",
      "refreshOnChange": "false",
      "hidden": "false",
      "modalEdit": "false",
      "key": "content1",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show": "null",
        "when": "null",
        "eq": "",
        "json": ""
      },
      "customConditional": "show = (data.Land_ownership_rural == \"Fertile land more than 2.5 acre\" ||data.Land_ownership_rural == \"Barren land upto 5 acres\" || data.Land_ownership_urban == \"More than 200 sq.mt\")",
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
      "type": "content",
      "dataGridLabel": "false",
      "input": "false",
      "tableView": "false",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "defaultValue": "null",
      "protected": "false",
      "unique": "false",
      "persistent":"true",
      "clearOnHide":"true",
      "refreshOn": "",
      "redrawOn": "",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": "false",
      "tabindex": "",
      "disabled": "false",
      "autofocus": "false",
      "dbIndex": "false",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "widget": "null",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "custom": "",
        "customPrivate": "false",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "allowCalculateOverride": "false",
      "encrypted": "false",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "id": "ezrb368"
    },
    {
      "label": "Are you aware of the Rs 1500, monthly, disability pension given by the Punjab government to disabled people?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "aware_confirmation_disability_pension",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "receiving_pension",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "ezip6uk",
      "defaultValue": ""
    },
    {
      "html": "\u003Cp\u003EInform the individuals about disabled pension scheme and how to apply for it.\u003C/p\u003E\u003Cp\u003EUDID required\u003C/p\u003E\u003Cp\u003EBank Passbook of individual/guardian\u003C/p\u003E",
      "label": "Content",
      "customClass": "",
      "refreshOnChange": "false",
      "hidden": "false",
      "modalEdit": "false",
      "key": "inform_individuals",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "aware_confirmation_disability_pension",
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
      "type": "content",
      "dataGridLabel": "false",
      "input": "false",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "defaultValue": "null",
      "protected": "false",
      "unique": "false",
      "persistent":"true",
      "clearOnHide":"true",
      "refreshOn": "",
      "redrawOn": "",
      "tableView": "false",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": "false",
      "tabindex": "",
      "disabled": "false",
      "autofocus": "false",
      "dbIndex": "false",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "widget": "null",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "custom": "",
        "customPrivate": "false",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "allowCalculateOverride": "false",
      "encrypted": "false",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "id": "eyrvj5d"
    },
    {
      "label": "Where did you obtain the information on disability pensions from?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Anganwadi worker",
            "value": "Anganwadi worker"
          },
          {
            "label": " Sewa Kendra",
            "value": " Sewa Kendra"
          },
          {
            "label": "Block office",
            "value": "Block office"
          },
          {
            "label": "Family/friends/neighbours",
            "value": "Family/friends/neighbours"
          },
          {
            "label": "Sarpanch/ward councillor",
            "value": "Sarpanch/ward councillor"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "modeofawareness_disability_pension",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "aware_confirmation_disability_pension",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "eyw2d5c",
      "defaultValue": ""
    },
    {
      "label": "Have you tried applying for pensions schemes?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "tried_applying",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "aware_confirmation_disability_pension",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "ehcmr36",
      "defaultValue": ""
    },
    {
      "label": "Were you able to complete the application?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "complete_application",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "tried_applying",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "e0xsnl",
      "defaultValue": ""
    },
    {
      "label": "What were the reasons? ",
      "labelPosition": "top",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "prefix": "",
      "suffix": "",
      "widget": "",
      "displayMask": "",
      "applyMaskOn": "change",
      "editor": "",
      "autoExpand": "false",
      "customClass": "",
      "tabindex": "",
      "autocomplete": "",
      "hidden": "false",
      "hideLabel": "false",
      "showWordCount": "false",
      "showCharCount": "false",
      "autofocus": "false",
      "spellcheck":"true",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "persistent":"true",
      "inputFormat": "html",
      "protected": "false",
      "dbIndex": "false",
      "case": "",
      "truncateMultipleSpaces": "false",
      "encrypted": "false",
      "redrawOn": "",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "pattern": "",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "minLength": "",
        "maxLength": "",
        "minWords": "",
        "maxWords": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "complete_application_reasons",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show": "",
        "when": "",
        "eq": "",
        "json": ""
      },
      "customConditional": "show = (data.tried_applying == 'No' || data.complete_application == 'No')",
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
      "type": "textarea",
      "rows": 2,
      "wysiwyg": "false",
      "dataGridLabel": "false",
      "input":"true",
      "refreshOn": "",
      "allowMultipleMasks": "false",
      "addons": [],
      "mask": "false",
      "inputType": "text",
      "inputMask": "",
      "fixedSize":"true",
      "id": "eg0rtkn",
      "defaultValue": ""
    },
    {
      "label": "Where did you apply?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "E-Sewa Kendra",
            "value": "E-Sewa Kendra"
          },
          {
            "label": "Offline forms through anganwadi worker",
            "value": "Offline forms through anganwadi worker"
          },
          {
            "label": "Offline forms through District office",
            "value": "Offline forms through District office"
          },
          {
            "label": "Cyber cafe",
            "value": "Cyber cafe"
          },
          {
            "label": "Other ",
            "value": "Other "
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "modeofapplication_disability_pension",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "complete_application",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "eqcrd9d",
      "defaultValue": ""
    },
    {
      "label": "Specify if Other",
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
      "allowMultipleMasks": "false",
      "customClass": "",
      "tabindex": "",
      "autocomplete": "",
      "hidden": "false",
      "hideLabel": "false",
      "showWordCount": "false",
      "showCharCount": "false",
      "mask": "false",
      "autofocus": "false",
      "spellcheck":"true",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "persistent":"true",
      "inputFormat": "plain",
      "protected": "false",
      "dbIndex": "false",
      "case": "",
      "truncateMultipleSpaces": "false",
      "encrypted": "false",
      "redrawOn": "",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "pattern": "",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "minLength": "",
        "maxLength": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "modeofapplication_disability_pension_other",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "modeofapplication_disability_pension",
        "eq": "Other",
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
      "dataGridLabel": "false",
      "input":"true",
      "refreshOn": "",
      "addons": [],
      "inputType": "text",
      "id": "e06veje",
      "defaultValue": ""
    },
    {
      "label": "When did you apply?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Last month",
            "value": "Last month"
          },
          {
            "label": "Last 3 months",
            "value": "Last 3 months"
          },
          {
            "label": "Last 6 months",
            "value": "Last 6 months"
          },
          {
            "label": "Last year",
            "value": "Last year"
          },
          {
            "label": "Other",
            "value": "other"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "timeofapplication_disability_pension",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "complete_application",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "e5zmfhh",
      "defaultValue": ""
    },
    {
      "label": "Specify if Other ",
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
      "allowMultipleMasks": "false",
      "customClass": "",
      "tabindex": "",
      "autocomplete": "",
      "hidden": "false",
      "hideLabel": "false",
      "showWordCount": "false",
      "showCharCount": "false",
      "mask": "false",
      "autofocus": "false",
      "spellcheck":"true",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "persistent":"true",
      "inputFormat": "plain",
      "protected": "false",
      "dbIndex": "false",
      "case": "",
      "truncateMultipleSpaces": "false",
      "encrypted": "false",
      "redrawOn": "",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "pattern": "",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "minLength": "",
        "maxLength": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "timeofapplication_disability_pension_other",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "timeofapplication_disability_pension",
        "eq": "Other",
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
      "dataGridLabel": "false",
      "input":"true",
      "refreshOn": "",
      "addons": [],
      "inputType": "text",
      "id": "e5jqka",
      "defaultValue": ""
    },
    {
      "label": "Did you receive any proof of of transaction?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "proof_transaction",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "complete_application",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "es5hej",
      "defaultValue": ""
    },
    {
      "label": "Have you tried to use the proof of transaction to obtain the status of your application?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "use_proof_transaction",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "proof_transaction",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "eld5myc",
      "defaultValue": ""
    },
    {
      "label": "What was conveyed to you?",
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
      "allowMultipleMasks": "false",
      "customClass": "",
      "tabindex": "",
      "autocomplete": "",
      "hidden": "false",
      "hideLabel": "false",
      "showWordCount": "false",
      "showCharCount": "false",
      "mask": "false",
      "autofocus": "false",
      "spellcheck":"true",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "persistent":"true",
      "inputFormat": "plain",
      "protected": "false",
      "dbIndex": "false",
      "case": "",
      "truncateMultipleSpaces": "false",
      "encrypted": "false",
      "redrawOn": "",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "pattern": "",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "minLength": "",
        "maxLength": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "use_proof_transaction_conveyedbydept",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "use_proof_transaction",
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
      "type": "textfield",
      "dataGridLabel": "false",
      "input":"true",
      "refreshOn": "",
      "addons": [],
      "inputType": "text",
      "id": "egywvgs",
      "defaultValue": "null"
    },
    {
      "label": "Have you received any communication from the department on the status of your application?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "communication_department",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "complete_application",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "e7hyin",
      "defaultValue": ""
    },
    {
      "label": "This call is regarding disability pensions. If you are not available right now, can I talk anytime later?",
      "labelPosition": "top",
      "widget": "choicesjs",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "uniqueOptions": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView":"true",
      "modalEdit": "false",
      "multiple": "false",
      "dataSrc": "values",
      "data": {
        "values": [
          {
            "label": "Yes",
            "value": "yes"
          },
          {
            "label": "No",
            "value": "no"
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
      "clearOnRefresh": "false",
      "searchEnabled":"true",
      "selectThreshold": 0.3,
      "readOnlyValue": "false",
      "customOptions": {

      },
      "useExactSearch": "false",
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "onlyAvailableItems": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "talk_later",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "Consent",
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
      "dataGridLabel": "false",
      "lazyLoad":"true",
      "selectFields": "",
      "searchField": "",
      "searchDebounce": 0.3,
      "minSearch": 0,
      "filter": "",
      "limit": 100,
      "authenticate": "false",
      "ignoreCache": "false",
      "redrawOn": "",
      "input":"true",
      "prefix": "",
      "suffix": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "fuseOptions": {
        "include": "score",
        "threshold": 0.3
      },
      "id": "est8e98",
      "defaultValue": ""
    },
    {
      "label": "Please give me a suitable time  {note down timings and call them again}",
      "labelPosition": "top",
      "displayInTimezone": "viewer",
      "useLocaleSettings": "false",
      "allowInput":"true",
      "format": "yyyy-MM-dd hh:mm a",
      "placeholder": "",
      "description": "",
      "tooltip": "",
      "customClass": "",
      "tabindex": "",
      "hidden": "false",
      "hideLabel": "false",
      "autofocus": "false",
      "disabled": "false",
      "tableView": "false",
      "modalEdit": "false",
      "shortcutButtons": [],
      "enableDate":"true",
      "datePicker": {
        "disable": "",
        "disableFunction": "",
        "disableWeekends": "false",
        "disableWeekdays": "false",
        "minDate": "null",
        "maxDate": "null",
        "showWeeks":"true",
        "startingDay": 0,
        "initDate": "",
        "minMode": "day",
        "maxMode": "year",
        "yearRows": 4,
        "yearColumns": 5
      },
      "enableTime":"true",
      "timePicker": {
        "showMeridian":"true",
        "hourStep": 1,
        "minuteStep": 1,
        "readonlyInput": "false",
        "mousewheel":"true",
        "arrowkeys":"true"
      },
      "multiple": "false",
      "defaultValue": "",
      "defaultDate": "",
      "customOptions": {

      },
      "persistent":"true",
      "protected": "false",
      "dbIndex": "false",
      "encrypted": "false",
      "redrawOn": "",
      "clearOnHide":"true",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "allowCalculateOverride": "false",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "customMessage": "",
        "custom": "",
        "customPrivate": "false",
        "json": "",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "enableMinDateInput": "false",
      "enableMaxDateInput": "false",
      "unique": "false",
      "errorLabel": "",
      "errors": "",
      "key": "suitable_time",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "talk_later",
        "eq": "yes",
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
      "dataGridLabel": "false",
      "input":"true",
      "widget": {
        "type": "calendar",
        "displayInTimezone": "viewer",
        "locale": "en",
        "useLocaleSettings": "false",
        "allowInput":"true",
        "mode": "single",
        "enableTime":"true",
        "noCalendar": "false",
        "format": "yyyy-MM-dd hh:mm a",
        "hourIncrement": 1,
        "minuteIncrement": 1,
        "time_24hr": "false",
        "minDate": "null",
        "disabledDates": "",
        "disableWeekends": "false",
        "disableWeekdays": "false",
        "disableFunction": "",
        "maxDate": "null"
      },
      "prefix": "",
      "suffix": "",
      "refreshOn": "",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "datepickerMode": "day",
      "id": "eq4on2h"
    },
    {
      "html": "\u003Cp\u003EThankyou for giving your time. Hope you have a nice day.\u003C/p\u003E",
      "label": "Thankyou Message",
      "customClass": "",
      "refreshOnChange": "false",
      "hidden": "false",
      "modalEdit": "false",
      "key": "Thankyou_message",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "receiving_pension",
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
      "type": "content",
      "dataGridLabel": "false",
      "input": "false",
      "tableView": "false",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "defaultValue": "null",
      "protected": "false",
      "unique": "false",
      "persistent":"true",
      "clearOnHide":"true",
      "refreshOn": "",
      "redrawOn": "",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": "false",
      "tabindex": "",
      "disabled": "false",
      "autofocus": "false",
      "dbIndex": "false",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "widget": "null",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "custom": "",
        "customPrivate": "false",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "allowCalculateOverride": "false",
      "encrypted": "false",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "id": "e2mfw1c"
    },
    {
      "html": "\u003Cp\u003EThank you for giving your time. Hope you have a nice day.\u003C/p\u003E",
      "label": "Content",
      "customClass": "",
      "refreshOnChange": "false",
      "hidden": "false",
      "modalEdit": "false",
      "key": "content",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show":"true",
        "when": "Beneficiary_confirmation",
        "eq": "Wrong Number",
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
      "type": "content",
      "dataGridLabel": "false",
      "input": "false",
      "tableView": "false",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "defaultValue": "null",
      "protected": "false",
      "unique": "false",
      "persistent":"true",
      "clearOnHide":"true",
      "refreshOn": "",
      "redrawOn": "",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": "false",
      "tabindex": "",
      "disabled": "false",
      "autofocus": "false",
      "dbIndex": "false",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "widget": "null",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "custom": "",
        "customPrivate": "false",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "allowCalculateOverride": "false",
      "encrypted": "false",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "id": "eg6gqe"
    },
    {
      "html": "\u003Cp\u003EThank you for giving your time. Hope you have a nice day.\u003C/p\u003E",
      "label": "Content",
      "customClass": "",
      "refreshOnChange": "false",
      "hidden": "false",
      "modalEdit": "false",
      "key": "content2",
      "tags": [],
      "properties": {

      },
      "conditional": {
        "show": "",
        "when": "",
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
      "type": "content",
      "dataGridLabel": "false",
      "input": "false",
      "tableView": "false",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": "false",
      "defaultValue": "null",
      "protected": "false",
      "unique": "false",
      "persistent":"true",
      "clearOnHide":"true",
      "refreshOn": "",
      "redrawOn": "",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": "false",
      "tabindex": "",
      "disabled": "false",
      "autofocus": "false",
      "dbIndex": "false",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "widget": "null",
      "validateOn": "change",
      "validate": {
        "required": "false",
        "custom": "",
        "customPrivate": "false",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "allowCalculateOverride": "false",
      "encrypted": "false",
      "showCharCount": "false",
      "showWordCount": "false",
      "allowMultipleMasks": "false",
      "addons": [],
      "id": "eo8i8d6"
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "size": "md",
      "block": "false",
      "action": "submit",
      "disableOnInvalid":"true",
      "theme": "primary",
      "id": "eu2bes",
      "input":"true",
      "placeholder": "",
      "prefix": "",
      "customClass": "",
      "suffix": "",
      "multiple": "false",
      "defaultValue": "null",
      "protected": "false",
      "unique": "false",
      "persistent": "false",
      "hidden": "false",
      "clearOnHide":"true",
      "refreshOn": "",
      "redrawOn": "",
      "tableView": "false",
      "modalEdit": "false",
      "dataGridLabel":"true",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": "false",
      "tabindex": "",
      "disabled": "false",
      "autofocus": "false",
      "dbIndex": "false",
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": "false",
      "widget": {
        "type": "input"
      },
      "attributes": {

      },
      "validateOn": "change",
      "validate": {
        "required": "false",
        "custom": "",
        "customPrivate": "false",
        "strictDateValidation": "false",
        "multiple": "false",
        "unique":"false"
      },
      "conditional": {
        "show": "null",
        "when": "null",
        "eq": ""
      },
      "overlay": {
        "style": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "allowCalculateOverride": "false",
      "encrypted": "false",
      "showCharCount": "false",
      "showWordCount": "false",
      "properties": {

      },
      "allowMultipleMasks": "false",
      "addons": [],
      "leftIcon": "",
      "rightIcon": ""
    }
  ],
  "pdfComponents": [],
  "access": [
    {
      "type": "read_all",
      "roles": [
        "6732e4badd7e70b2cb4bd3be",
        "6732e4badd7e70b2cb4bd3c2",
        "6732e4bbdd7e70b2cb4bd3c6"
      ]
    }
  ],
  "created": "2025-02-20T06:59:05.079Z",
  "modified": "2025-02-24T03:37:23.146Z",
  "machineName": "SurveyPunjabUDIDCalling-2025022012295"
}


labels = []
extract_labels(data, labels)

# Save to CSV
save_labels_to_csv(labels)

print("Labels extracted and saved to formlabel.csv")
