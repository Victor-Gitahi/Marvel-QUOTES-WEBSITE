const backButton = document.getElementById("back-btn");
const homeSection = document.getElementById("home-section");
const quotePageSection = document.getElementById("quotes-page-section");
const generateBtn = document.getElementById("generate-button");
const flexContainer = document.getElementById("flex-container");
const loaderWrapper = document.getElementById("loader-wrapper");

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


generateBtn.addEventListener("click", () => {
  scrollOptions = {
    "left": clientDimensions[1],
    behavior: "smooth"
  };

  flexContainer.scroll(scrollOptions);
});

backButton.addEventListener("click", () => {
  scrollOptions = {
    "left": -clientDimensions[1],
    behavior: "smooth"
  };
  flexContainer.scroll(scrollOptions);
});