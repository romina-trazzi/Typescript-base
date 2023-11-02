/*=======================================================
=            1. TIPIZZARE VARIABILI SEMPLICI          =
=========================================================*/

let firstVariable: string | number;

const forceVariable: boolean = true;

let firstDate: Date;

let nullVariable: null;

/*=======================================================
=            2. TIPIZZARE UNA FUNZIONE          =
=========================================================*/

/* FUNZIONE ES 5 */

function myFunction (a: string, b: number, c: string | boolean, d?: Date): any {

    // Codice della funzione

    return 

}

/* ARROW FUNCTION ES 6 SENZA RETURN (Void) */

let arrowFunction = (e = 10) => void {

    // Codice della funzione

}


/*==========================================================
=            3. TIPIZZARE UN OGGETTO (INTERFACE)          =
=========================================================*/

// Descrizione struttura dell'oggetto

interface Person {

    name: string;
    age: number;
    speak(language: string): void;  // metodo con parametro di tipo stringa privo di return (restituisce void)
    spend(money: number): number; // metodo con parametro di tipo number che restituisce un number
    fast?: boolean; //  proprietà opzionale
    [key: string] : any;  // proprietà opzionale che restituisce un qualunque tipo di valore

}

// Costruzione dell'oggetto

const me: Person = {

    name: 'Romina',
    age: 35,
    speak(language: 'italian') {
        console.log(`${this.name} speaks` + language);
    },
    spend(money: 90) {
        console.log(`${this.name} spends` + money + `euro`);
        return money
    },
    skills: 'cooking',
    numberPet: 3
}

let someone: Person;


// Aggiunta successiva delle proprietà opzionali

me.fast = true;

console.log(me);


/*===========================================
=            4. TIPIZZARE UN ARRAY         =
=============================================*/

// Array sintassi normale
let myArray0: number[] = [];

// Array sintassi con i generics <>
let myArray1: Array <number> = [];

// Array con union-type 
let myArray2: (number | string)[] = [];  

myArray2.push("ciao");
myArray2.push(24);

console.log(myArray2);

// Array con alias-type (tupla)
type myList = [string, boolean, number?];

const myArray3: myList = ["stringa", true, 22];

console.log(myArray3);


// Array di oggetti con interface
interface User {
    userName: string,
    password: string,
    login: boolean
};

let people: User[] = [
    { userName: "Alice", password: "mtc", login: true },
    { userName: "Bob", password: "victory", login: false },
    { userName: "Charlie", password: "Brown35", login: true }
];

const humans: Array <User> = [
    { userName: "Romy", password: "react", login: true },
    { userName: "Mama", password: "back", login: false },
    { userName: "Fabio", password: "cards", login: true }
];


/*==========================================================
=            5. TIPIZZARE UN OGGETTO DI OGGETTI         =
===========================================================*/


/*==========================================================
=            6. TIPIZZARE UN OGGETTO CON CLASS         =
===========================================================*/

class Admin {

    // Fase 1: dichiarazione proprietà e tipo
    name: string;
    surname: string;
    age: number;
    

    // Fase 2: costruttore + this
    constructor (name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    format() {
        return console.log(`${this.name} gioca da ${this.age} anni`);
    }
}

// Fase 3: istanza della classe
let pDisney1 = new Admin ("Pluto", "Canis", 34);
let pDisney2 = new Admin ("Paperino", "Paperinis", 22);

console.log(pDisney1);
console.log(pDisney2);

// Array tipizzato con class (alias-type)
let admins: Admin[] = [];

admins.push(pDisney1);
admins.push(pDisney2);

console.log(admins);

pDisney1.name = "Clarabella";

console.log(pDisney1);
console.log(admins);



/*==========================================================
=            6. PUBLIC, PRIVATE, READONLY CLASSES         =
===========================================================*/

class Good {

    // Fase 1: costruttore 
    constructor (private name: string, public surname: string, private age: number) {
        
    }

    format() {
        return console.log(`${this.name} gioca da ${this.age} anni`);
    }
}

const good: Good = new Good ("Minnie", "Topolinia", 26);

console.log(good);


// Per poter vedere le proprietà private dobbiamo accedere tramite la funzione
good.format();


