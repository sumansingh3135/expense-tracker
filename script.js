// Load existing transactions from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");
const balanceDisplay = document.getElementById("balance");

// Initialize app
window.addEventListener("DOMContentLoaded", () => {
    displayTransactions();
    updateBalance();
});

// Add Transaction
transactionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("transactionName").value.trim();
    let amount = parseFloat(document.getElementById("transactionAmount").value);
    const type = document.getElementById("transactionType").value;

    if (!name || amount <= 0) {
        alert("Please enter a valid name and amount.");
        return;
    }

    if (type === "expense" && amount > 0) {
        amount = -Math.abs(amount);
    }

    const transaction = {
        id: Date.now(),
        name,
        amount,
        type
    };

    transactions.push(transaction);
    saveTransactions();
    displayTransactions();
    updateBalance();
    transactionForm.reset();
});

// Display Transactions
function displayTransactions() {
    transactionList.innerHTML = "";

    transactions.forEach((transaction) => {
        const li = document.createElement("li");
        li.classList.add("transaction-item");

        li.innerHTML = `
            <span>${transaction.name}</span>
            <span class="${transaction.amount > 0 ? "income" : "expense"}">
                $${transaction.amount.toFixed(2)}
            </span>
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">X</button>
        `;

        transactionList.appendChild(li);
    });
}

// Delete Transaction
function deleteTransaction(id) {
    transactions = transactions.filter((t) => t.id !== id);
    saveTransactions();
    displayTransactions();
    updateBalance();
}

// Update Balance
function updateBalance() {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    balanceDisplay.textContent = total.toFixed(2);
}

// Save to localStorage
function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
