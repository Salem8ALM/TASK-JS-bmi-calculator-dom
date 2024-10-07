function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = weight / (height / 100) ** 2;
  alert("the bmi is " + BMI);

  if (BMI < 18.5) console.log("Underwight");
  else if (BMI >= 18.5 && BMI <= 24.9) alert("Healthy weight");
  else if (BMI >= 25.0 && BMI <= 29.9) alert("overweight");
  else alert("above obesity");

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert("Healthy");
  } else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert("Healthy");
  } else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert("Healthy");
  } else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert("Healthy");
  } else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert("Healthy");
  } else if (age > 65 && BMI >= 24 && BMI <= 29) {
    alert("Healthy");
  } else {
    alert("Not Healthy");
  }
}
