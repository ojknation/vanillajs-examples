const balance = document.getElementById("balance");
const inflow = document.getElementById("income");
const outflow = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const select = document.getElementById("option")

// Get transaction From Local Storage
const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];


//  Add Transactions
const addTransaction = (event) => {
  event.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "" || select.value === "") {
    document.getElementById("error_msg").innerHTML = "<span>Error: Please enter Description, Amount and choose your Transaction Type</span>";
    setTimeout(
      () => (document.getElementById("error_msg").innerHTML= ""),
      5000
    );
  } else {
    let transaction = {
      id: genrateID(),
      text: text.value,
      amount: amount.value,
      type: select.value,
    };
    if (select.value === "income"){
      transaction = {
        id: genrateID(),
        text: text.value,
        amount: +amount.value,
        type: select.value,
      };
    }else{
      transaction = {
        id: genrateID(),
        text: text.value,
        amount: -amount.value,
        type: select.value,
      };
    }
    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();
    
    text.value = "";
    amount.value = "";
    select.value = "";
    
  }
}

// generate random ID
const genrateID = () => {
  return Math.floor(Math.random() * 1000)
}

// Transacton History
const addTransactionDOM = (transaction) => {
  // get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");
  // add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
  ${transaction.text} (${transaction.type}) ${sign}${Math.abs(transaction.amount)}
  <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;

  list.appendChild(item);
}


// update the balance,inflow and outflow
const updateValues = () => {
  const types = transactions.filter((transaction) => transaction.type)
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((bal, value) => (bal += value), 0).toFixed(2);

  const income = amounts
   .filter((value) => value > 0)
   .reduce((bal, value) => (bal += value), 0)
   .toFixed(2);

  const expense = amounts
   .filter((value) => value < 0)
   .reduce((bal, value) => (bal += value),0) * -(1)
   .toFixed(2);
 
  balance.innerText = `$${total}`;
  inflow.innerText = `$${income}`;
  outflow.innerText = `$${expense}`;
}


// remove transaction by id
const removeTransaction = (id) => {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  
  updateLocalStorage();

  start();
}

// update local storage
const updateLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// start app

const start = () => {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

start();
form.addEventListener("submit", addTransaction);



