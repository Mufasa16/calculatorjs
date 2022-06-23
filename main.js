(function () {
    const operator = prompt("Enter operator ( either +, -, * or / ): ");

    const number1 = parseFloat(prompt("Enter first number: "));

    const number2 = parseFloat(prompt("Enter second number: "));

    // check if numbers are numbers
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter numbers");
      return;
    }
    let result;

    if (operator == "+") {
      result = number1 + number2;
    } else if (operator == "-") {
      result = number1 - number2;
    } else if (operator == "*") {
      result = number1 * number2;
    } else if (operator == "/") {
      result = number1 / number2;
    } else {
      return alert("Invalid operator");
    }

    if (operator == "/" && number2 == 0) {
      return alert("Cannot divide by zero");
    }

    alert(`${number1} ${operator} ${number2} = ${result}`);
  })();
