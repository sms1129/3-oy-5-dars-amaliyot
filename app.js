// 7-misol
// let a = +prompt("a ni kiriting");
// let b= +prompt("b ni kiriting");
// let total=0;
// for (i=b; i<=a; i++) {
//    total= total+i;
//    console.log(i);
// }
//    console.log(total);

// 8-misol
// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");
// let total = 1;
// for (i = b; i <= a; i++) {
//   total = total * i;
//   console.log(i);
// }
// console.log(total);

// 9-misol
// let a = +prompt("katta sonni kiriting");
// let b = +prompt("kichik sonni kiriting");
// let total = 0;
// for (i = b; i <= a; i++) {
//   total = total + (i*i);
//   console.log(i*i);
// }
// console.log(`total `+total);

// 10-misol
// let n = +prompt("n sonni kiriting");
// let total = 0;
// for (i = 1; i <= n; i++) {
//   total = total + 1.0/i;
//   console.log(1/i);
// }
// console.log(`total ` + total);

// 11-misol
// let n = +prompt("n sonni kiriting");
// let total = 0;
// for (i = 1; i <= n; i++) {
//   if(i%2!=0)
//   {
//    console.log(`toq sonlar `+i);
//   }

// 12-misol
// let n = +prompt("n sonni kiriting");
// let total = 0;
// for (i = 1; i <= n; i++) {
//   if(i%2==0)
//   {
//    console.log(`juft sonlar `+i);
//   }

// 13-misol
// let n=+prompt(`n sonni kiriting`);
// for (i=3; i<=n ;i++) {
// for(j=2;j<i;j++)
// {
//  if(i%j==0)
//  {
//    console.log(`Murakkab son: `+i);
//    break;
//  }
// }
// }

// 14.1-misol
// let n = +prompt("n sonni kiriting");
// let total = 0;
// for (i = 1; i <= n; i++) {
//   if(i%2==0)
//   {
//    total=total+i*i
//    console.log(`juft sonlar `+i*i);
//   }
// }
//    console.log("juft sonlar yig`indisi " + total);

// 14.2-misol
// let n = +prompt("n sonni kiriting");
// let total = 0;
// for (i = 1; i <= n; i++) {
//   if(i%2!=0)
//   {
//    total=total+i*i
//    console.log(`toq sonlar `+i*i);
//   }
// }
//    console.log("toq sonlar yig`indisi " + total);

// 15-misol
// let n = +prompt(`n sonni kiriting`);
// for (i = n; i > 1; i--) {
//   console.log(i);
// }


// 16-misol
// let n=prompt(`n sonini kiriting`)
// for (i=0; i<=n; i++) {
//    if (i%5!==0) {
//       console.log(i);
//    }
// }

// 17-misol
// let n=+prompt(`n sonni kiritng`)
// let total=1;
// for (i=1; i<=n; i++) {
// total=total*i
// }
// console.log(total);

// 18-misol
// let n=+prompt(`n sonni kiriting`)
// let total=0;
// for(i=1; i<=n; i++) {
//    factoric(n)
//    console.log(i);
// }
// 18-misol
// let num=+prompt(`n `)
// function factorialize(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorialize(num - 1);
//   }
// }

// console.log(factorialize(num));