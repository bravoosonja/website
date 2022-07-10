---
title:"Calculator"
date:"2022-04-25"
---

# Calculator

## Overview

The objective is to create a simple on-screen calculator using HTML, CSS, and JavaScript. This is my third JavaScript project

## Skills used

- HTML
- CSS
- Vanilla JavaScript

## Features

- supports keyboard input
- includes basic mathematic functions like addition, subtraction, multiplication, and division
- CLEAR clears the screen
- DELETE deletes the last single input

## Lessons Learned

1. The most challenging part of this project was to determine the method of performing calculation. For example, 12 + 7 - 5 _ 3 = should yield 42. Should I perform the calculation as a whole? (12 + 7 - 5 _ 3) and call the calculating function by = ? If so, how do I fit all of that on the screen? What if user input is really long? This was resolved by performing calculation after each operand input and updating the display.

```js
secondOperand = currentOperationScreen.textContent;
currentOperationScreen.textContent = roundResult(
  compute(currentOperation, firstOperand, secondOperand)
);
lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
currentOperation = null;
```

2. Initially, the screen did not reset after the operand input. Therefore, if the intention was to perform `7+2`, the screen would display: `7+72` (2 from the previous input). Resolved this by adding below in function `chooseOperation()`

```js
if (currentOperation !== null) updateDisplay();
```
