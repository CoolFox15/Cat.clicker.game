document.addEventListener("DOMContentLoaded", function() {
    let count = 0;
    let cps = 0;
    let autoCost = 50;
    let priceMultiplier = 1.5; 
    let diamonds = 0; 
    
    const button = document.getElementById("clickBtn");
    const display = document.getElementById("count");
    const reset = document.getElementById("resetBtn");
    const autoBtn = document.getElementById("autoClickBtn");
    const autoCostSpan = document.getElementById("autoCost");
    const milestones = document.getElementById("milestonesimage"); 

    button.addEventListener("click", function() {
        count++;
        display.textContent = count;
    });


    reset.addEventListener("click", function() {
    count = 0;                
    display.textContent = count; 
    });

    autoCostSpan.innerText = autoCost; 
    autoBtn.addEventListener("click", function() {
        if (count >= autoCost) {
            count -= autoCost;
            cps += 1;

            autoCost = Math.floor(autoCost * priceMultiplier);
            autoCostSpan.innerText = autoCost;
        } else {
            alert("Not enough clicks!");
        }
    });

    setInterval(() => {
        if (cps > 0) {
            count += cps;
            display.textContent = count;
        if (count > 100) {
           const image100 = document.createElement ('img'); 
            image100.src ('100clicks.png');
            milestones.appendChild (image100); 
        }
        }
    }, 1000);
    
});
