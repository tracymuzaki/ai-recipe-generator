function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    delay: 20,
    cursor: null,
    autoStart: true,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions-input");
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<span class="generating">Generating a recipe for ${instructionsInput.value}...</span>`;
  recipeElement.classList.remove("hidden");
  let apiKey = "t0ofa24ea50a4bf83aaaf293402db0a1";
  let prompt = `You are an intelligent Assistant AI that knows many cooking recipes for every food item in ${instructionsInput.value}. Provide the recipe in the html format of "<p></p>" with a "<br>" after each line and conclude with a signature "<strong>--SheCodes AI</strong>". Make it five lines.`;
  let context = "Generate one short cooking recipe for the requested food item";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
