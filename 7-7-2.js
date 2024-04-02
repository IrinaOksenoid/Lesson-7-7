function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            // Возвращаем сообщение об ошибке вместо числового значения
            return "Ошибка, некорретные данные";
    }
}

const result = calculate.apply(null, [2, 3, "+"]);

console.log(`Результат: ${result}`);
