// Get the count elements
var undeadCount = document.getElementById("undead-count");
var armyCount = document.getElementById("army-count");
var goldCount = document.getElementById("gold-count");

// Set the initial count values
var undeadCountValue = 10;
var armyCountValue = 0;
var goldCountValue = 100;

undeadCount.textContent = undeadCountValue;
armyCount.textContent = armyCountValue;
goldCount.textContent = goldCountValue;

// Define the cost of an undead and an army
var undeadCost = 10;
var armyCost = 20;

// Define the gold gain from clicking the "Collect Gold" button
var goldGain = 1;

// Define the functions for clicking the "Raise Undead" and "Recruit Army" buttons
function raiseUndead() {
  if (goldCountValue >= undeadCost) {
    undeadCountValue += 1;
    goldCountValue -= undeadCost;
    undeadCost += 5;
    undeadCount.textContent = undeadCountValue;
    goldCount.textContent = goldCountValue;
    document.getElementById("raise-undead-cost").textContent = undeadCost;
  }
}

function recruitArmy() {
  if (goldCountValue >= armyCost) {
    armyCountValue += 1;
    goldCountValue -= armyCost;
    armyCost += 10;
    armyCount.textContent = armyCountValue;
    goldCount.textContent = goldCountValue;
    document.getElementById("recruit-army-cost").textContent = armyCost;
  }
}

// Set the event listeners for clicking the buttons
document.getElementById("raise-undead").addEventListener("click", raiseUndead);
document.getElementById("recruit-army").addEventListener("click", recruitArmy);
document.getElementById("collect-gold").addEventListener("click", function() {
  goldCountValue += goldGain;
  goldCount.textContent = goldCountValue;
});
