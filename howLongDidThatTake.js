Number.prototype.isPrime = function() {
    for (let i=Math.floor(Math.sqrt(this)); i<this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;``
}

const {performance} = require('perf_hooks');
const { getSystemErrorMap } = require('util');

var primeCount = (nthPrimeNumber) => {
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    const start = performance.now();
    while( primeCount < nthPrimeNumber ) {
        if(num.isPrime()) {
            primeCount++;
        }
        num++;
    }
    num -= 1;
    console.log(`The ${nthPrimeNumber}th prime number is ${num}`);
    console.log(`This took ${Math.round(performance.now() - start)} milliseconds to run`);
    return num;
}

primeCount(10);
primeCount(100);
primeCount(1000);

// https://stackoverflow.com/questions/72209/recursion-or-iteration#:~:text=Recursion%20is%20better%20than%20iteration,function%20over%20and%20over%20again.
// recursive is better for fibinaci
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const reversed1 = (text, loops) => {
    const start = performance.now();
    for (let i=0; i<loops; i++) {
        const output = story.split("").reverse().join("");
    }
    console.log(`${loops} iterations of reversed1 took ${Math.round(performance.now() - start)} ms`)
}

const reversed2 = (text, loops) => {
    const start = performance.now();
    for (let i=0; i<loops; i++) {
        let output = "";
        for (let i=story.length-1; i>=0; i--) {
            output += story.charAt(i);
        }
    }
    console.log(`${loops} iterations of reversed2 took ${Math.round(performance.now() - start)} ms`)
}

reversed1(story, 10000);
reversed2(story, 10000);