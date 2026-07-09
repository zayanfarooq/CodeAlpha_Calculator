// Select Display

const display = document.getElementById("display");

// Append Value

function appendValue(value) {

    display.value += value;

}

// Clear Display

function clearDisplay() {

    display.value = "";

}

// Delete Last Character

function deleteLast() {

    display.value = display.value.slice(0, -1);

}

// Calculate Result

function calculate() {

    try {

        if (display.value === "") {

            return;

        }

        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";

        setTimeout(() => {

            display.value = "";

        }, 1500);

    }

}

// Keyboard Support

document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers

    if (!isNaN(key)) {

        appendValue(key);

    }

    // Operators

    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {

        appendValue(key);

    }

    // Decimal

    else if (key === ".") {

        appendValue(".");

    }

    // Enter = Calculate

    else if (key === "Enter") {

        event.preventDefault();

        calculate();

    }

    // Backspace = Delete

    else if (key === "Backspace") {

        deleteLast();

    }

    // Escape = Clear

    else if (key === "Escape") {

        clearDisplay();

    }

});