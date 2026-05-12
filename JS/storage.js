// ============================================================
// storage.js — Simulated Backend using localStorage
// This file handles all data persistence (like a database).
// ============================================================

// Key names used to store data in localStorage
const TRANSACTIONS_KEY = "ft_transactions";
const USER_KEY = "ft_user";
const SESSION_KEY = "ft_session";

// -----------------------------------------------------------
// Returns all transactions stored in localStorage as an array
// -----------------------------------------------------------
const getTransactions = () => {
  const data = localStorage.getItem(TRANSACTIONS_KEY);
  return data ? JSON.parse(data) : [];
};

// -----------------------------------------------------------
// Saves a new transaction object to localStorage
// transaction: { id, type, amount, description, category, date }
// -----------------------------------------------------------
const addTransaction = (transaction) => {
  const transactions = getTransactions();
  transactions.push(transaction);
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

// -----------------------------------------------------------
// Deletes a transaction from localStorage by its unique id
// -----------------------------------------------------------
const deleteTransaction = (id) => {
  const transactions = getTransactions();
  const updated = transactions.filter((t) => t.id !== id);
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updated));
};

// -----------------------------------------------------------
// Returns the currently logged-in user object, or null
// -----------------------------------------------------------
const getUser = () => {
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
};

// -----------------------------------------------------------
// Saves user session (called after successful login/signup)
// -----------------------------------------------------------
const saveUser = (userObj) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userObj));
};

// -----------------------------------------------------------
// Logs the user out by clearing the session (not the data)
// -----------------------------------------------------------
const logoutUser = () => {
  localStorage.removeItem(SESSION_KEY);
};

// -----------------------------------------------------------
// Registers a new user account in localStorage
// Returns { success: true } or { success: false, error: "..." }
// -----------------------------------------------------------
const registerUser = (name, email, password) => {
  const usersRaw = localStorage.getItem("ft_users");
  const users = usersRaw ? JSON.parse(usersRaw) : [];

  // Check if email already exists
  const exists = users.find((u) => u.email === email);
  if (exists) return { success: false, error: "Email already registered." };

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("ft_users", JSON.stringify(users));
  return { success: true, user: newUser };
};

// -----------------------------------------------------------
// Verifies login credentials against stored users
// Returns { success: true, user } or { success: false, error }
// -----------------------------------------------------------
const loginUser = (email, password) => {
  const usersRaw = localStorage.getItem("ft_users");
  const users = usersRaw ? JSON.parse(usersRaw) : [];

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return { success: false, error: "Invalid email or password." };

  return { success: true, user };
};

// -----------------------------------------------------------
// Generates a unique ID for each transaction (timestamp-based)
// -----------------------------------------------------------
const generateId = () => `txn_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;