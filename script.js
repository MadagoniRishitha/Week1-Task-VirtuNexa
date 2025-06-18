
function validateInput(value) {
  const num = parseInt(value);
  if (isNaN(num) || num < 0) {
    return { valid: false, error: "Please enter a valid positive integer." };
  }
  return { valid: true, value: num };
}

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

document.getElementById("iterativeBtn").addEventListener("click", () => {
  const input = document.getElementById("numberInput").value;
  const { valid, value, error } = validateInput(input);
  const resultArea = document.getElementById("resultArea");

  if (!valid) {
    resultArea.textContent = error;
    return;
  }

  const result = factorialIterative(value);
  resultArea.textContent = `Iterative: ${value}! = ${result}`;
});

document.getElementById("recursiveBtn").addEventListener("click", () => {
  const input = document.getElementById("numberInput").value;
  const { valid, value, error } = validateInput(input);
  const resultArea = document.getElementById("resultArea");

  if (!valid) {
    resultArea.textContent = error;
    return;
  }

  const result = factorialRecursive(value);
  resultArea.textContent = `Recursive: ${value}! = ${result}`;
});
