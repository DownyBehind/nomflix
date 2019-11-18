# Arrow Functions

### general function format

```javascript
function sayHello(name) {
  return "Hello " + name;
}

const nicolas = sayHello("Nicolas");
```

### Arrow function format 1

```javascript
const sayHello = name => {
  return "Hello " + name;
};
```

### Arrow function format 2

```javascript
const sayHello = name => "Hello " + name;
```

### Arrow function format 3

```javascript
const sayHello = name => `Hello ${name}`;
```

### Arrow function another example

```javascript
const button = document.querySelector("button");

const handleClick = event => console.log(event);

button.addEventListener("click", handleClick);

//or

button.addEventListener("click", event => console.log(event));
```

# Object Destructuring

### how to use

```javascript
const human = {
    name:"Nico",
    lastName:"Serrano",
    nationality: "Wish i was korean"
    favFood : {
        breakfast : "Sang"
        lunch : "Doncas"
        dinner : "Sang + Doncas"
    }
}

//general method

const name = human.name
const lastName = human.lastName

//ex1

const {name, lastName} = human

//ex2

const {name, lastName, nationality:difName} = human
// this means put nationality variable on the difName

//ex3

const {name, lastName, nationality, favFood:{breakfast, lunch, dinner}} = human
// this is how to distructuring 2 level object

// cautions
nationality : difName // Exchange variable name
nationality : {difName} // Search variable on Object
```
