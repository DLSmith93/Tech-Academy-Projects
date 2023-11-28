// get reciept function
function getReceipt(){

    // this initializes our string so it can be passed from 
    // function to function, growing line by line into a full reciept
    let text1 = "<h3>You Ordered: </h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    for(const element of sizeArray){

        if(element.checked){
            var selectedSize = element.value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if(selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    }
    if(selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }
    if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }
    if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }
    if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1" + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // these variables will get passed to each function
    getTopping(runningTotal, text1);

}

// function for adding toppings to the price of the pizza
function getTopping(runningTotal, text1){

    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for(const element of toppingArray){

        if(element.checked){
            selectedTopping.push(element.value);
            console.log("selected topping item:  ("+ element.value +")");
            text1 = text1 + element.value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if(toppingCount > 1){
        toppingTotal = (toppingCount - 1);
    }
    else{
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+ toppingCount);
    console.log(toppingCount + "topping -1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}