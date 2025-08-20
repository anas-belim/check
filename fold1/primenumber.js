function p1(n, output) {
  if (n <= 1) {
    output.push("   " + n + " is not prime");
    return;
  }
  let i = 2;
  let b = true;
  while (i < n) {
    if (n % i === 0) {
      output.push("   " + n + " is not prime");
      b = false;
      break;
    }
    i++;
  }
  if (b === true) {
    output.push("   " + n + " is prime");
  }
}

function main() {
  let n = parseInt(document.getElementById("number").value);
  let outputArr = [];

  if (isNaN(n)) {
    outputArr.push("⚠️ Please enter a valid number.");
  } else {
    p1(n, outputArr);
  }

  document.getElementById("output").innerText = outputArr.join("\n");
}
