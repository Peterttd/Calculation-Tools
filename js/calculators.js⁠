/**
 * Calculation Logic Engine
 */

export function calculatePercentage(val, total) {
  if (isNaN(val) || isNaN(total) || total === 0) return null;
  return (val / 100) * total;
}

export function calculateBMI(weightKg, heightCm) {
  if (isNaN(weightKg) || isNaN(heightCm) || heightCm <= 0 || weightKg <= 0) return null;
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obesity";

  return { bmi: bmi.toFixed(1), category };
}
