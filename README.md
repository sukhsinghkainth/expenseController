# expense controller app 

## Overview

The Expense Manager App is an application designed to help users manage their expenses efficiently. It allows users to track their income and expenses, categorize transactions, set budgets, and gain insights into their financial activities.

## Features

### 1. User Management

- **User Registration**: Users can create accounts by providing a username and email.

### 2. Expense and Income Tracking

- **Add Transactions**: Users can add delete and edit transactions , specifying the amount, type (expense or income), account(card, cash, saving), category(bills, food , entertainment ....), and optional notes/description.

- **Transaction Listing**: View a list of all transactions with details such as date, amount, type, account, and category.

### 3. Account Management

- **Multiple Accounts**: Users can manage transactions for different accounts like card, cash, and savings.

### 4. Category Management

- **Predefined Categories**: Categories such as food, insurance, shopping, etc., are predefined. Users can also add custom categories.

### 5. Budget Management

- **Set Budgets**: Users can set budget limits for specific categories to control spending.

- **Budget Tracking**: Monitor spending against set budgets to stay within financial goals.

### 6. Totals and Insights

- **Total Income and Expense**: Track total income and expense over time.

- **User Dashboard**: View an overview of financial activities 

### 7. Notes

- **Add Notes to Transactions**: Users can add notes to provide additional context to transactions.


## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/expense-tracker-app.git
   ```
2. Install dependencies:
   ```
   cd expense-tracker-app
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   DB_URL=your_mongodb_connection_string
   JWT_KEY=your_jwt_secret_key
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the application at `http://localhost:3000` in your web browser.

## Routes

### Authentication
- `/login` (POST): Endpoint to log in users. Requires email and password in the request body. Returns a JWT token upon successful authentication.

- `/signup` (POST): Endpoint to register new users. Requires username, email, and password in the request body. Returns user details and a JWT token upon successful registration.

### User
- `/test` (GET): Test route to check if the user is authenticated. Requires a valid JWT token in the request headers. Returns user details.

### Category
- `/createCategory` (POST): Endpoint to create a new expense category. Requires name and type (expense or income) in the request body. Returns the newly created category.

- `/editCategory/:categoryname` (PUT): Endpoint to edit an existing category. Requires the category name in the URL parameters and name/type in the request body. Returns the updated category.

- `/deleteCategory/:categoryname` (DELETE): Endpoint to delete an existing category. Requires the category name in the URL parameters. Deletes the category and all associated transactions.

### Budget
- `/setBudget` (POST): Endpoint to set a budget for an expense category. Requires the category ID and budget limit in the request body. Creates a new budget entry.

- `/updateBudget` (PUT): Endpoint to update the budget limit for an expense category. Requires the category name and updated limit in the request body. Updates the existing budget entry.

- `/deleteBudget` (DELETE): Endpoint to delete the budget for an expense category. Requires the category name in the request body. Deletes the budget entry.

### Expense
- `/expense` (POST): Endpoint to log an expense. Requires amount, type (expense), notes, account type, and category name in the request body. Creates a new expense transaction.

- `/total-income` (GET): Endpoint to get the total income of the logged-in user. Requires a valid JWT token in the request headers. Returns the total income.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


