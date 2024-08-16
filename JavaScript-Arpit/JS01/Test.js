
// let nums = response => { console.log(response); }

// nums("Hello")

function ab(x, y) {
    return x + y;
}

function abc(x, y, callback) {
    result = callback(x, y);
    console.log(result);
}

abc(12, 20, ab);