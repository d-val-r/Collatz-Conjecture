# Collatz Calculator
A React web app that demonstrates the Collatz Conjecture.

## About

The Collatz Conjecture is a mathematical conjecture that any positive integer, after a finite series of recursive transoformations by the function
f(n) = 3n + 1 if n is odd and f(n) = n/2 if n is even, will eventually become 1. That is, given input n = 3, since n is odd, we calculate 3(3) + 1 = 10
and calculate the function again. Now, n = 10 is even, so we calculate 10 / 2 = 5. Now it is odd; 3(5) + 1 = 16. Now, even, we calculate 16/2 = 8, then
8/2 = 4, then 4/2 = 2, then 2/2 = 1. The conjecture is that this procedure, if repeated enough times, will turn any positive integer into 1 after a FINITE
series of transformations.


## Build
Built with React using create-react-app. Styled with CSS. 


## Usage
Deployed on Vercel [here](). Clone the project then run `npm start` and visit `localhost:3000` in a browser with JavaScript enabled.
