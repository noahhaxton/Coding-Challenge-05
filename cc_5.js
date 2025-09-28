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

// ----- Step 4: Overtime pay at 1.5x for hours over 40 -----
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(0, hours - 40);
  return overtimeHours * rate * 1.5;
}

// ----- Step 5: Deduct 15% tax and return net pay -----
function calculateTaxes(grossPay) {
  const netPay = grossPay * (1 - 0.15); // 15% deduction
  return netPay;
}

// ----- Step 6: Process a single employee into a payroll object -----
function processPayroll(employee) {
  const { name, hourlyRate, hoursWorked } = employee;
  const basePay = calculateBasePay(hourlyRate, hoursWorked);
  const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = calculateTaxes(grossPay);

  return {
    name,
    basePay,
    overtimePay,
    grossPay,
    netPay,
  };
}

