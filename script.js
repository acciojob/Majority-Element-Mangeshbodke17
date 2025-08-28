// Function to find majority element (Boyer-Moore)
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Hook for button click in index.html
function checkMajority() {
    let input = document.getElementById("numbers").value.trim();

    if (!input) {
        document.getElementById("result").innerText = "Please enter numbers.";
        return;
    }

    // Convert input string to array of numbers
    let arr = input.split(",").map(n => Number(n.trim()));

    if (arr.some(isNaN)) {
        document.getElementById("result").innerText = "Invalid input. Please enter valid numbers.";
        return;
    }

    let major = majorityElement(arr);
    document.getElementById("result").innerText = `Majority Element: ${major}`;
}

// Export for Node.js (so your Express route & Cypress test can use it)
if (typeof module !== "undefined") {
    module.exports = majorityElement;
}
