const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator .img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.url) {
        updateDetails(data.url, data.title, data.author);
      } else {
        memeTitle.innerHTML = "Couldn't fetch a meme. Try again later.";
        memeAuthor.innerHTML = "";
        memeImage.removeAttribute("src");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      memeTitle.innerHTML = "Couldn't fetch a meme. Try again later.";
      memeAuthor.innerHTML = "";
      memeImage.removeAttribute("src");
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
