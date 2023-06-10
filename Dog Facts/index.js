document.addEventListener("DOMContentLoaded", (e) => {
  const getDogFacts = async (api) => {
    try {
      const data = await fetch(api);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
  const button = document.querySelector("#button");
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const list = document.querySelector(".fact-list");
    const number = document.querySelector("#number").value;
    const api = `https://dog-api.kinduff.com/api/facts`;
    const data = await getDogFacts(api);
    const dogData = await data.json();
    dogData.facts.forEach((dogFact) => {
      const li = document.createElement("li");
      li.textContent = dogFact;
      list.appendChild(li);
    });
  });
});
