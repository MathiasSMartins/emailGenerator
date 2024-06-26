﻿# Email Generator
 Introduction
This project is a simple email generator designed to assist in creating email addresses for employees based on their names. The generated emails follow specific rules and are appended with '@contoso.com'.

Getting Started
To use this email generator, you can follow these steps:

Setup: Include the provided JavaScript code in your project or HTML file.
HTML Structure: Ensure you have an HTML structure with an input field for employee names and a table to display generated emails.
Functionality: The generator works based on a set of rules defined within the JavaScript functions. These rules are applied sequentially to generate unique email addresses.

Code Overview
Below is a brief overview of the key functions in the provided JavaScript code:

getEmployeeName(): Retrieves the employee name from the input field and triggers the email generation process.
validateName(name): Cleanses and standardizes the employee name.
checkEmail(email): Checks if the generated email already exists in the list of generated emails.
generateMainEmail(employeeNameList): Generates the primary email address based on the first and last name.
generateFirstRuleEmail(employeeNameList): Generates an email address following the first rule, which involves combining the first name with other names if available.
generateSecondRuleEmail(employeeNameList): Generates an email address following the second rule, which involves swapping the first and last name.
generateThirdRuleEmail(employeeNameList): Generates an email address following the third rule, which involves appending a unique number if there are multiple employees with the same name combination.
addItemToList(employeeName, email): Adds the generated email to the list and updates the display table.
updateEmailsTable(): Updates the display table with the list of generated emails.
clearField(): Clears the input field after a name has been processed.
Usage
Enter the employee's name in the input field.
Click the "Generate Email" button.
The generated email address will be displayed in the table below.
Repeat the process for each employee.
Contributions
Contributions to this project are welcome. Feel free to submit bug fixes, enhancements, or suggestions via pull requests.

License
This project is licensed under the MIT License.

Acknowledgments
This project is inspired by the need for a simple email generation tool for employee management systems.
