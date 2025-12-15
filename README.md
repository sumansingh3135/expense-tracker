# 💰 Expense Tracker

A simple and clean web-based Expense Tracker that lets users manage income and expenses while automatically calculating the balance.  
This project stores all data in **localStorage**, so nothing is lost on refresh.

---

## 📌 Project Overview
The Expense Tracker allows users to:

- Add income or expense entries  
- View transaction history  
- Delete transactions  
- See real-time balance updates  
- Store data persistently using localStorage  

This project is built using **HTML, CSS, and JavaScript**.

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Local Storage (Browser API)

---

## 📂 Project Structure

Expense Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## 🚀 Features

### ✔ Add Transactions  
Users can add:
- Name (e.g., Food, Salary)
- Amount
- Type (Income / Expense)

Validation checks:
- Name cannot be empty  
- Amount must be greater than zero  

---

### ✔ Transaction History  
Each entry shows:
- Name  
- Amount (green for income, red for expense)  
- Delete button  

---

### ✔ Real-Time Balance  
Automatically calculates:

**Balance = Total Income – Total Expense**

Updates instantly when transactions are added or deleted.

---

### ✔ Persistent Data (localStorage)
All transactions remain saved even after refreshing or reopening the browser.

---

## 📝 How to Use

1. Open **index.html** in any browser  
2. Enter transaction details  
3. Select type (income/expense)  
4. Click **Add Transaction**  
5. View updated balance & history  
6. Delete unwanted entries  

---

## ✨ Optional Enhancements
You may add these for extra marks:
- Category selection (Food, Travel, Bills…)  
- Monthly summary  
- Sorting and filtering  
- Export data as CSV  
- Graphs and charts  

---

## 🧪 Testing Checklist
- [ ] Transactions add correctly  
- [ ] Deleting works  
- [ ] Balance is calculated properly  
- [ ] Data persists after refresh  
- [ ] Form validation works  

---

## 📄 Conclusion
This project demonstrates JavaScript DOM manipulation, event handling, data persistence, and UI design.  
It is an excellent beginner-friendly mini project for understanding front-end development concepts.
