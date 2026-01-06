document.addEventListener("DOMContentLoaded", function() {
    let count = 0;
    let cps = 0;
    let autoCost = 150;
    let priceMultiplier = 1.5; 
    
    const button = document.getElementById("clickBtn");
    const display = document.getElementById("count");
    const reset = document.getElementById("resetBtn");
    const autoBtn = document.getElementById("autoClickBtn");
    const autoCostSpan = document.getElementById("autocost";

    button.addEventListener("click", function() {
        count++;
        display.textContent = count;
    });


    reset.addEventListener("click", function() {
    count = 0;                
    display.textContent = count; 
    });

    autoCostSpan.innerText = autoCost; 
    autoBtn.addEventListener("click", () => {
        if (clicks >= autoCost) {
            clicks -= autoCost;
            cps += 1;

            autoCost = math.floor(autoCOst * priceMultiplier);
            autoCostSpan.innerText = autoCost;
        } else {
            alert("Not enough clicks!");
        }
    });

    SetInterval(() => {
        clicks += cps;
    }, 1000);
    
});
