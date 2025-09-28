// ======================================================
// Coding Challenge 05 - Payroll Processing Toolkit
// ======================================================

// ----- Step 2: Employee data (3–5 employees) -----
const employees = [
  { name: "Ava Reed",    hourlyRate: 22.50, hoursWorked: 38 },
  { name: "Liam Torres", hourlyRate: 19.00, hoursWorked: 44 },
  { name: "Zoe Patel",   hourlyRate: 27.75, hoursWorked: 52 },
  { name: "Noah Kim",    hourlyRate: 16.50, hoursWorked: 40 },
];

// Utility: currency formatting for display (keeps raw numbers for math)
const money = (n) => `$${n.toFixed(2)}`;

// ----- Step 3: Base pay up to 40 hours only -----
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}

