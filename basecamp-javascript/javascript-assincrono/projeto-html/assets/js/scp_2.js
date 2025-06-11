BASE_URL = "https://api.thecatapi.com/v1/images/search/?size=med&format=json"
KEY_API = "17d94b92-754f-46eb-99a0-65be65b5d18f"

const catElement = document.getElementById("cat")
const btnElement = document.getElementById("change-cat")

const getCats = async () => {
  const result = await fetch(BASE_URL, {
    headers: { "x-api-key": KEY_API },
  })
    .then((res) => res.json())
    .then((json) => json[0].url)
    .catch((err) => console.error())

  return result
}

const loadImg = async () => {
  const cat = await getCats()
  catElement.src = cat
}

loadImg()

btnElement.addEventListener("click", loadImg)
