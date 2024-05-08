let employeesEmailList = [];

function getEmployeeName() {
  let employeeName = document.getElementById('employeeNameInput').value;
  let employeeNameList = validateName(employeeName).split(" ").filter(function (element) {
    return element !== "";
  });

  let email = generateMainEmail(employeeNameList);

  if (checkEmail(email) == false) {
    addItemToList(employeeName, email);
    return;
  }

  email = generateFirstRuleEmail(employeeNameList);

  if (email != "" && checkEmail(email) == false) {
    addItemToList(employeeName, email);
    return;
  }

  email = generateSecondRuleEmail(employeeNameList);

  if (checkEmail(email) == false) {
    addItemToList(employeeName, email)
    return;
  }

  email = generateThirdRuleEmail(employeeNameList);

  if (checkEmail(email) == false) {
    addItemToList(employeeName, email);
    return;
  }
}

function validateName(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\b(de|da|do|dos|das)\b/gi, '').toLowerCase();
}

function checkEmail(email) {
  return employeesEmailList.some(function (item) {
    return item.email === email;
  });
}

function generateMainEmail(employeeNameList) {
  let firstName = employeeNameList[0];
  let lastName = employeeNameList[employeeNameList.length - 1];

  return `${firstName}.${lastName}@contoso.com`
}

function generateFirstRuleEmail(employeeNameList) {
  if (employeeNameList.length > 2) {
    for (let i = 1; i < employeeNameList.length - 1; i++) {
      const email = `${employeeNameList[0]}.${employeeNameList[i]}@contoso.com`;

      if (checkEmail(email) == false) return email;
    }

    return ""; //All tested emails already exist

  } else {
    return `${employeeNameList[0]}.${employeeNameList[1]}@contoso.com`;
  }
}

function generateSecondRuleEmail(employeeNameList) {
  let firstName = employeeNameList[0];
  let lastName = employeeNameList[employeeNameList.length - 1];

  return `${lastName}.${firstName}@contoso.com`
}

function generateThirdRuleEmail(employeeNameList) {
  let firstName = employeeNameList[0];
  let lastName = employeeNameList[employeeNameList.length - 1];
  let count = 0;

  let emailPrefix = `${firstName}.${lastName}`
  employeesEmailList.forEach(function (item) {
    if (item.email.includes(emailPrefix) == true) count++;
  });

  return `${firstName}.${lastName}${count}@contoso.com`

}

function addItemToList(employeeName, email) {
  employeesEmailList.push({
    name: employeeName,
    email: email
  });

  clearField();
  updateEmailsTable();
}

function updateEmailsTable() {
  let tableBody = document.getElementById('emailsTableBody');
  tableBody.innerHTML = '';

  employeesEmailList.forEach(function (employee) {
    let row = document.createElement('tr');
    let colName = document.createElement('td');
    let colEmail = document.createElement('td');

    colName.textContent = employee.name;
    colEmail.textContent = employee.email;

    row.appendChild(colName);
    row.appendChild(colEmail);
    tableBody.appendChild(row);
  });

}

function clearField() {
  document.getElementById('employeeNameInput').value = '';
}
