
const createMemeBtn = document.querySelector(
  ".meme-creator .create-meme-btn"
);
const memeImage = document.querySelector(".meme-creator img");
const memeTitle = document.querySelector(".meme-creator .meme-title");
const memeAuthor = document.querySelector(".meme-creator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const createMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

createMemeBtn.addEventListener("click", createMeme);

createMeme();