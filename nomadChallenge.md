# 1

```javascript
class ObjectUtilities {
  /* Your magic here */

  static mergeObjects = (a, b) => {
    const objc = Object.assign(a, b);
    return objc;
  };

  static removePassword = a => {
    const b = { ...a };
    delete b.password;
    return b;
  };
  static freezeObj = a => {
    const b = { ...a };
    const c = Object.freeze(b);
    return c;
  };
  static getOnlyValues = a => {
    const b = { ...a };
    const c = Object.values(b);
    return c;
  };
  static getOnlyProperties = a => {
    const b = { ...a };
    const c = Object.getOwnPropertyNames(b);
    return c;
  };
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi"
};

const objB = {
  password: "12345"
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
```

# 2

```javascript
class ArrayUtilities {
  /* Your magic here */
  static addZeros = a => {
    const b = a.map(index => parseInt(`${index}0`));
    return b;
  };

  static moreThanFifty = a => {
    const b = a.filter(index => index > 50);
    return b;
  };

  static removeFirst = a => {
    const b = a.slice(1, 5);
    return b;
  };

  static sumAll = a => {
    const b = a.reduce((b, c) => b + c);
    return b;
  };

  static divide = a => {
    var b = a.toString();
    const c = b.split("");
    return c;
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
```
