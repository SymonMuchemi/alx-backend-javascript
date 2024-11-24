export default class Car {
    constructor(brand, motor, color) {
        Car.checkBrand(brand);
        Car.checkMotor(motor);
        Car.checkColor(color);

        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }


    cloneCar() {
        const clonedCar = this.constructor;

        return new clonedCar(this._brand, this._motor, this._color)
    }

    static checkBrand(brand) {
        if (typeof brand !== 'string') {
            throw TypeError('brand must be a string')
        }
    }

    static checkMotor(motor) {
        if (typeof motor !== 'string') {
            throw TypeError('motor must be a string')
        }
    }

    static checkColor(color) {
        if (typeof color !== 'string') {
            throw TypeError('color must be a string')
        }
    }
}
