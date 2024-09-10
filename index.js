// შემდეგი ჩელენჯი არის
// buble sort algoritm
// გვაქვს მასივი [3,5,1,9,6,4]
// ეს მასივი უნდა გადაკეთდეს ზრდადობის მიხედვით ანუ 1 დან 9 მდე
let arr = [3, 5, 1, 9, 6, 4];

function myFunc(arr1) {
  console.log(arr1.sort((a, b) => a - b));
}
myFunc(arr);
