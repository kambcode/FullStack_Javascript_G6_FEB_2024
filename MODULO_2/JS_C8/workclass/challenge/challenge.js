const counterElement = 
    document.getElementById("counter");

let count = 0;
counterElement.innerHTML = count;

// function increaseCounter() {
const increaseCounter = () => {
    count = count + 1;
    // count ++;
    counterElement.innerHTML = count;

}

const decreaseCounter = () => {
    
}