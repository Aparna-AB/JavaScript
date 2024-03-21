//1
document.write("<h3><u>1)Find the Largest Number</u></h3>")


function large(a, b, c) {
    let num = null;

    if (a > b && a > c) {
        num = "a is the largest number<br/>";
    } else if (b > c && b > a) {
        num = "b is the largest number<br/>";
    } else {
        num = "c is the largest number<br/>";
    }
    document.write(num)
}
large(a = 70, b = 600, c = 100);

//2
document.write("<h3><u>2)Even Numbers With Do-While Loop</u></h3>")

function evenNum() {
    let result = 0;
    do {
        if (result % 2 == 0) {
            document.write(result, "</br>");
        }
        result++;

    } while (result <= 25)

}

evenNum()

// Difference between do-while and while loops in this context:
// In this context, the main difference between a do-while loop and a while loop 
// is that a do-while loop will always execute its code block at least once, regardless
//  of the condition. In contrast, a while loop will first evaluate the condition 
//  and only execute the code block if the condition is true.

// In the provided example, both loops would produce the same result because the 
// initial condition (number <= 25) is met at the start. However, if the initial 
// condition were changed so that the loop condition is initially false (e.g., number = 26), 
// the do-while loop would still execute its code block once before checking the condition, 
// while the while loop would not execute at all because the condition is initially false.

//2.a
document.write("<h4>2.1)Change the starting and ending numbers.</br>2.2)Print only even numbers divisible by 3 or 5.</br>2.3) Use a different loop construct (e.g., for loop)</h4>")

function evenFirstLast(first, last) {

    for (let num = first; num <= last; num++) {
        if ((num % 2 === 0) && (num % 3 === 0 || num % 5 === 0)) {
            document.write(num, "<br/>");
        }
    }
}
evenFirstLast(5, 30)

//3

document.write("<h3><u>3)FIZZ BUZZ Challenge</u></h3>")


function printFizBuz(n) {
    for (let x = 1; x <= n; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            document.write("FizzBuzz<br/>")
        } else if (x % 3 === 0) {
            document.write("Fizz<br/>")
        } else if (x % 5 === 0) {
            document.write("Buzz<br/>")
        } else {
            document.write(x, "<br/>")
        }

    }
}


printFizBuz(16)

//4

document.write("<h3><u>4)Leap Year</u></h3>")

function leapYear(start,end){
    for(i=start;i<=end;i++){
        if((i%400===0 && i%100===0)){
            document.write("Its a leap year<br/>");
        }else if(i%4===0){
            document.write(" a leap year<br/>");
        }else if(i%100===0){
            document.write(" not a leap year<br/>");

        }else{
            document.write(i,"<br/>");
        }

    }

}
leapYear(2000,2024)



