const animalFacts = {
  panda: "Pandas can eat up to 38kg of bamboo per day! 🐼",
  lion: "Lions can sleep up to 20 hours a day! 🦁",
  elephant: "Elephants can recognize themselves in mirrors! 🐘",
  giraffe: "Giraffes only sleep 5–30 minutes per day! 🦒"
};

function showFact(animal) {
  alert(animalFacts[animal] || "No fun fact found for this animal.");
}
