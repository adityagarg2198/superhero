document.addEventListener("DOMContentLoaded", () => {
  const findOutNowButton = document.querySelector("#find-out");
  findOutNowButton.addEventListener("click", async (e) => {
    e.preventDefault();
    // gettin input values
    const heroOne = document.querySelector("#hero1").value;
    const heroTwo = document.querySelector("#hero2").value;
    const urlOne = `https://www.superheroapi.com/api.php/107536872333759/search/${heroOne}`;
    const urlTwo = `https://www.superheroapi.com/api.php/107536872333759/search/${heroTwo}`;
    let heroOneData, heroTwoData;
    // fetch data from API
    try {
      const response1 = await fetch(urlOne);
      const { results } = await response1.json();
      heroOneData = results[0];
    } catch {
      console.log("an error ocurred");
    }
    try {
      const response2 = await fetch(urlTwo);
      const { results } = await response2.json();
      heroTwoData = results[0];
    } catch {
      console.log("an error ocurred");
    }
    // calculate the results
    let winner;
    let powerOne = -1,
      powerTwo = -1;
    const heroOneValues = Object.values(heroOneData);
    const heroTwoValues = Object.values(heroTwoData);
    heroOneValues.forEach((value) => {
      powerOne = powerOne + value;
    });
    heroTwoValues.forEach((value) => {
      powerTwo = powerTwo + value;
    });
    if (powerOne > powerTwo) {
      winner = heroOneData.name;
    } else {
      winner = heroTwoData.name;
    }
    const winnerName = document.querySelector("#winner");
    winnerName.textContent = winner;
  });
});
