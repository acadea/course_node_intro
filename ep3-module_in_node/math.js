function add(x, y){
    return x + y;
}

function minus(x, y){
    return x - y;
}

// whatever we export is whatever we import

// module.exports = "abc";

module.exports = {
    add,
    minus,
}