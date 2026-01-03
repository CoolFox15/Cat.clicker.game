document.addEventListener("DOMContentLoaded", function() {
    let count = 0;
    const button = document.getElementById("clickBtn");
    const display = document.getElementById("count");
    const reset = document.getElementById("resetBtn");

    button.addEventListener("click", function() {
        count++;
        display.textContent = count;
    });


    reset.addEventListener("click", function() {
    count = 0;                
    display.textContent = count; 
    });
});
