const backButton = document.getElementById("back-btn");
const homeSection = document.getElementById("home-section");
const quotePageSection = document.getElementById("quotes-page-section");
const generateBtn = document.getElementById("generate-button");
const flexContainer = document.getElementById("flex-container");
const loaderWrapper = document.getElementById("loader-wrapper");
const movieTitle = document.getElementById("movie-title");
const quoteAuthor = document.getElementById("quote-author");
const quotePhrase = document.getElementById("quote-phrase");

function getFlexContainerWidth() {
  let dimArray = [flexContainer.clientHeight, flexContainer.clientWidth]; // dimArray ::read as:: dimensions array
  return dimArray;
}

function showLoader() {
  loaderWrapper.classList.add("show");
}

function removeLoader() {
  loaderWrapper.classList.remove("show");
}

function runForDuration(callback, duration) {
  let startTime = Date.now();
  let endTime = startTime + duration;
  while (Date.now() < endTime) {
    callback();
  }
}

let clientDimensions = getFlexContainerWidth();

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'be50784072msh01d3e2850aa2186p181481jsn15ef65e4f1aa',
    'X-RapidAPI-Host': 'marvel-quote-api.p.rapidapi.com'
  }
};

let url = 'https://marvel-quote-api.p.rapidapi.com/';

async function generatePrompt() {

  try {
    showLoader();
    const response = await fetch(url, options);

    const data = await response.json();

    movieTitle.innerHTML = data.Title;
    quoteAuthor.innerHTML = data.Speaker;
    quotePhrase.innerHTML = data.Quote;

    movieTitle.style.textTransform = "uppercase";
    movieTitle.style.fontWeight = "bold";
    quoteAuthor.style.textTransform = "uppercase";
    quoteAuthor.style.fontWeight = "bold";

    removeLoader();

  } catch (error) {
    console.log(error);
  }
}

generateBtn.addEventListener("click", () => {
  scrollOptions = {
    "left": clientDimensions[1],
    behavior: "smooth"
  };

  flexContainer.scroll(scrollOptions);
  generateBtn.innerHTML = "GENERATE QUOTE";

  generatePrompt();
});

backButton.addEventListener("click", () => {
  scrollOptions = {
    "left": -clientDimensions[1],
    behavior: "smooth"
  };
  flexContainer.scroll(scrollOptions);

  generateBtn.innerHTML = "START";
});