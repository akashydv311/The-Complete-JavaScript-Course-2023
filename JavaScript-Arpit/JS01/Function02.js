
/*

MyFun01("Rohit");

MyFun02("Virat");


function MyFun02(name) {
    console.log('Player Name is ' + name);
}

function MyFun0(name) {
    console.log('Player Name is ' + name);
}

*/

/*

let num1 = 34;
let num2 = 78;

function sum(num1, num2) {
    var num1 = 4;
    var num2 = 8;
    ans = num1 + num2;
    // console.log(ans);
    console.log(num1, num2);

    print();

    function print() {
        console.log(num1, num2);

    }
}

sum(num1, num2);

console.log(num1, num2);

*/


let finalAns = CallingFun(3);
console.log(finalAns);


function CallingFun(table) {

    let getAns = outerFun(table);
    return getAns;

    function outerFun(table) {
        // YOU HAVE TO ADD 3 IN THE GIVEN TABLE
        table = table + 3;
        ans = innerFun();
        return ans;

        function innerFun() {
            let tableArr = [];
            let tampVal = 0;
            for (let i = 1; i <= 10; i++) {
                tampVal = table * i;
                tableArr.push(tampVal);
            }
            return tableArr;
        }

    }

}




