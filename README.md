#  Finance Dashboard UI

A clean and interactive **Finance Dashboard** built to visualize financial data, manage transactions, and derive meaningful insights — all within a responsive and user-friendly interface.

---

##  Overview

This project simulates a finance tracking dashboard where users can:

* View overall financial summary
* Explore and filter transactions
* Understand spending patterns through charts
* Switch roles to experience different UI behaviors

The focus of this project is on **frontend architecture, UI/UX design, and state management**, rather than backend complexity.

---

##  Features

###  Dashboard Overview

* Summary cards for:

  * Total Balance
  * Total Income
  * Total Expenses
* Time-based visualization (Line Chart)
* Category-based visualization (Pie Chart)

---

### 📄 Transactions Section

* Displays:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)

* Functionalities:

  *  Search transactions
  *  Filter by type
  *  Responsive table

---

###  Role-Based UI (Simulated)

* **Viewer**

  * Can only view data

* **Admin**

  * Can add transactions
  * Enhanced interaction access

* Role switching via dropdown for demonstration


###  Insights Section

* Highest spending category
* Basic financial observations
* Helps users understand spending behavior

---

###  Dark Mode

* Toggle between light and dark themes
* Fully responsive styling



###  Data Persistence

* Transactions and theme preferences stored in **localStorage**



##  Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **State Management:** Zustand

---

##  Project Structure

```
src/
 ├── components/
 │    ├── cards/
 │    ├── charts/
 │    ├── transactions/
 │    ├── layout/
 │
 ├── data/
 ├── pages/
 ├── store/
 ├── utils/
 ├── App.jsx
 └── main.jsx
```

---

##  Installation & Setup

1. Clone the repository:

bash
git clone <your-repo-link>
cd finance-dashboard

2. Install dependencies:

bash
npm install

3. Run the project:

bash
npm run dev

---

##  Responsiveness

The dashboard is fully responsive and works across:

* Desktop
* Tablet
* Mobile devices


##  Design Decisions

* Focused on **clean UI and readability**
* Used **modular components** for scalability
* Chose **Zustand** for simple and efficient state management
* Implemented **mock data** to simulate real-world usage
* Prioritized **user experience and clarity over complexity**


##  Future Enhancements

* Export transactions (CSV/JSON)
* Advanced filtering and grouping
* Backend integration (API)
* Authentication and real RBAC
* Animations using Framer Motion

---

##  Notes

This project was built as part of a frontend evaluation assignment.
The goal was to demonstrate problem-solving approach, UI structuring, and interaction design.


##  Author

Hardik Goel



