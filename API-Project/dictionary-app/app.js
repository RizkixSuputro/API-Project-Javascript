const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");

searchBtn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  sound.src = `${url}${inpWord}`;
  console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
     <div class="word">
          <h3>${inpWord}</h3>
          <button onclick ="playSound()">
            <iconify-icon
              icon="bi:volume-up-fill"
              width="48"
              height="48"
              style="color: #0461e8"
            >
             </iconify-icon>
           
          </button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetics[0].text}</p>
        </div>
        <p class="word-meaning">
         ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
          ${data[0].meanings[0].definitions[0].example || ""}
        </p>
       
    `;
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});

function playSound() {
  sound.play();
}
