# ES6 Basic

## Introduction

ES6 is the sixth major release of the ECMAScript language specification. It was officially released in June 2015. It is also known as ECMAScript 2015. This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers).

## Variables

### `let` and `const`

`let` and `const` are two relatively new types of variable declarations in JavaScript. As we mentioned before, `var` is also used to declare variables. The main difference between `let` and `const` is that `let` is used to declare variables that are limited in scope to the block, statement, or expression on which it is used. On the other hand, `const` is used to declare variables that are limited to the block scope on which it is used. However, the value of a variable declared with `const` remains the same within the block scope.

```javascript
let x = 10;
const y = 20;

console.log(x); // 10

x = 15;

console.log(x); // 15

console.log(y); // 20

y = 25; // TypeError: Assignment to constant variable.
```
