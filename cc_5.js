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

// ----- Quick unit-style checks for individual functions (as suggested) -----
console.log("Function checks:");
console.log("Base (rate=20, h=35) =", money(calculateBasePay(20, 35)));     // $700.00
console.log("Base (rate=20, h=45) =", money(calculateBasePay(20, 45)));     // $800.00
console.log("OT   (rate=20, h=35) =", money(calculateOvertimePay(20, 35))); // $0.00
console.log("OT   (rate=20, h=45) =", money(calculateOvertimePay(20, 45))); // $150.00
console.log("Net  (gross=1000)   =", money(calculateTaxes(1000)));          // $850.00
console.log("------------------------------------------------------------");

// ----- Step 7: Loop through employees, log payroll objects -----
console.log("Payroll Report:");
let totals = { base: 0, ot: 0, gross: 0, net: 0 };

for (const emp of employees) {
  const record = processPayroll(emp);

  // Log each employee’s payroll object
  console.log({
    name: record.name,
    basePay: money(record.basePay),
    overtimePay: money(record.overtimePay),
    grossPay: money(record.grossPay),
    netPay: money(record.netPay),
  });

  // Accumulate totals (raw numbers)
  totals.base += record.basePay;
  totals.ot += record.overtimePay;
  totals.gross += record.grossPay;
  totals.net += record.netPay;
}

// Show summary totals (nice for verification)
console.log("------------------------------------------------------------");
console.log("Totals:");
console.log({
  totalBase: money(totals.base),
  totalOvertime: money(totals.ot),
  totalGross: money(totals.gross),
  totalNet: money(totals.net),
});
console.log("\nDone. Open DevTools ➜ Console to review all outputs.");