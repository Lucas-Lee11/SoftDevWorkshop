// EELs :: Eliza Knapp, Ella Krechmer, Lucas Lee
// SoftDev pd0
// K28 -- Manipulating the DOM
// 2022-02-08

//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j = 30;
    return j + x;

    // returns (x + 30) if x is a number
    // returns a string with "30" appended at the beginning if x is a string
};


//instantiate an object
var o = {
    // elements can be accessed via the . operator like Java
    'name': 'Thluffy',
    age: 15,
    items: [10, 20, 30, 40],

    // nested object
    morestuff: {
        a: 1,
        b: 'ayo'
    },

    // does the same as `f` above
    func: function(x) {
        return x + 30;
    }
};


var addItem = function(text) {

    // grabs html tags by element
    var list = document.getElementById("thelist"); // id should be unique so it only grabs one tag
    var newitem = document.createElement("li");
    newitem.innerHTML = text; // edits the text found within a particular tag
    list.appendChild(newitem); // adds a new tag at the end of the list tags within
};


var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li'); // will create a list of all `li` tags
    listitems[n].remove(); // throws errors with non-numbers and out of bounds numbers
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        // will append class to the beginning of the list of classes associated
        // unless the tag already has the class in question

        items[i].classList.add('red');

    }
};


var stripe = function() {
    var items = document.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        if (i % 2 == 0) {
            items[i].classList.add('red');
        } else {
            items[i].classList.add('blue');
        }
    }
};

//insert your implementations here for...
// FIB
// FAC
// GCD

var fac = function(n) {
    if (n < 0) {
        return "Invalid Input";
    } else if (n == 0) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
}

var fib = function(n) {
    if (n < 0) {
        return "Invalid Input";
    } else if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

var gcd = function(a, b) {
    r = a % b;
    while (r != 0) {
        a = b;
        b = r;

        r = a % b;
    }

    return b;

}
