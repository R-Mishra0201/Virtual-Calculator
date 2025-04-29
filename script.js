let isKeyPress = false;  // Track if a key is pressed

// Add event listeners to number buttons
document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("screen").value += 1;
});
document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("screen").value += 2;
});
document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("screen").value += 3;
});
document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("screen").value += 4;
});
document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("screen").value += 5;
});
document.getElementById("btn6").addEventListener("click", function() {
    document.getElementById("screen").value += 6;
});
document.getElementById("btn7").addEventListener("click", function() {
    document.getElementById("screen").value += 7;
});
document.getElementById("btn8").addEventListener("click", function() {
    document.getElementById("screen").value += 8;
});
document.getElementById("btn9").addEventListener("click", function() {
    document.getElementById("screen").value += 9;
});
document.getElementById("btn0").addEventListener("click", function() {
    document.getElementById("screen").value += 0;
});

// Add event listeners to arithmetic operators
document.getElementById("btnPlus").addEventListener("click", function() {
    document.getElementById("screen").value += "+";
});
document.getElementById("btnMinus").addEventListener("click", function() {
    document.getElementById("screen").value += "-";
});
document.getElementById("btnMultiply").addEventListener("click", function() {
    document.getElementById("screen").value += "*";
});
document.getElementById("btnDivide").addEventListener("click", function() {
    document.getElementById("screen").value += "/";
});

// Equal button functionality
document.getElementById("btnEqual").addEventListener("click", function() {
    let screen = document.getElementById("screen");
    screen.value = eval(screen.value);
});

// Clear button functionality
document.getElementById("btnClear").addEventListener("click", function() {
    document.getElementById("screen").value = "";
});

// Handle keydown event for keyboard input
document.addEventListener('keydown', function(event) {
    if (isKeyPress) return;  // Prevent duplicate input on button press

    const screen = document.getElementById("screen");

    // Handle number keys
    if (event.key >= '0' && event.key <= '9') {
        screen.value += event.key;
    }

    // Handle arithmetic operators
    if (['+', '-', '*', '/'].includes(event.key)) {
        screen.value += event.key;
    }

    // Handle Enter key for evaluation
    if (event.key === 'Enter') {
        screen.value = eval(screen.value);
    }

    // Handle Escape key or Delete key for clearing
    if (event.key === 'Escape' || event.key === 'Delete') {
        screen.value = '';
    }

    // Handle Backspace key to remove the last character
    if (event.key === 'Backspace') {
        screen.value = screen.value.slice(0, -1);
    }

    // Set flag to indicate key press is active
    isKeyPress = true;

    // Reset flag after a short delay to avoid duplicate keypresses
    setTimeout(() => {
        isKeyPress = false;
    }, 100);  // Reset after 100ms
});
