// ============================================================
// categories.js — Category definitions and color mappings
// ============================================================

// List of all available transaction categories
const CATEGORIES = [
  { id: "food",          label: "🍔 Food",          color: "#FF6B6B" },
  { id: "travel",        label: "✈️ Travel",         color: "#4ECDC4" },
  { id: "fees",          label: "🎓 Fees",           color: "#A78BFA" },
  { id: "rent",          label: "🏠 Rent",           color: "#FB923C" },
  { id: "health",        label: "💊 Health",         color: "#34D399" },
  { id: "entertainment", label: "🎮 Entertainment",  color: "#60A5FA" },
  { id: "salary",        label: "💼 Salary",         color: "#00E5A0" },
  { id: "other",         label: "📦 Other",          color: "#94A3B8" },
];

// -----------------------------------------------------------
// Returns the color hex code for a given category id
// -----------------------------------------------------------
const getCategoryColor = (categoryId) => {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  return cat ? cat.color : "#94A3B8";
};

// -----------------------------------------------------------
// Returns the full label (emoji + name) for a given category id
// -----------------------------------------------------------
const getCategoryLabel = (categoryId) => {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  return cat ? cat.label : "📦 Other";
};