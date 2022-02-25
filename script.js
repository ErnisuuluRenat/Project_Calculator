let op
function func() {
    // переменная для результата
  let result;
  // получаем первое и второе число
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  // смотрим, что было в переменной с действием, и действуем исходя из этого
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  document.getElementById("result").innerHTML = result
}

let array = [1,2,34,343,55,6,5,6,4,6]