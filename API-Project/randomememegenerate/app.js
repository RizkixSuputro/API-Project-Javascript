const btn = document.querySelector("button");
const img = document.getElementById("memeImg");

const getImg = async () => {
  try {
    const res = await axios.get("https://meme-api.com/gimme");
    const imgUrl = res.data.url;
    img.src = imgUrl;
    console.log(res.data.url);
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", getImg);
