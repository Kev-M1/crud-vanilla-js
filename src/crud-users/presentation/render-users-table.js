

let table;


const createTable = () => {
  const tableElement = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tablebody = document.createElement('tbody');

  tableHead.innerHTML = /* html */`
    <tr>
      <th>#Id</th>
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `

  tableElement.append(tableHead, tablebody);
  return tableElement;
};




export const renderUsersTable = (users, htmlElement) => {

  if (!table) {
    table = createTable();
  }

  const tablebody = table.querySelector('tbody');


  users.forEach(user => {
    const userRow = document.createElement('tr');
    userRow.innerHTML = /* html */`
      <td>${user.id}</td>
      <td>${user.balance}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.isActive}</td>
      <td>
        <a href="#/"> Select </a>
        |
        <a href="#/"> Delete </a>
      </td>
    `;
    tablebody.append(userRow);
  });
  console.log(table);
  htmlElement.append(table)


};


