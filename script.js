//your code here
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate; // safe because majority element always exists
}

// Example usage
let arr = [2, 1, 2];
console.log(majorityElement(arr)); // Output: 2
