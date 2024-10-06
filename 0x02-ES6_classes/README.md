# ES6 Classes

## Introduction

ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.

## Class definitions

A class definition is a block of code that describes the shape of a class. The class definition can include class members, such as methods or properties. Methods are functions that are defined within the class definition. Properties are values that are defined within the class definition.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## Class expressions

A class expression is another way to define a class. Class expressions

```javascript
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

## Class body and method definitions

The body of a class is the part that is enclosed in curly braces {}. This is where you define class members, such as methods or properties.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
```
