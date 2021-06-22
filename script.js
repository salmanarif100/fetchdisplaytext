const textEl = document.getElementById('text')
const textBtn = document.getElementById('textBtn')
const text2 = document.getElementById('text2')
const surahAndAyah = document.getElementById('surahAndAyah')

textBtn.addEventListener('click', generateText)

generateText()

// USING ASYNC/AWAIT
async function generateText() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const ayah = Math.floor(Math.random() * 6236) + 1; 
  const res = await fetch('https://api.alquran.cloud/ayah/'+ayah+'', config)

  const data = await res.json()

  textEl.innerHTML = data.data.text;

  const res2 = await fetch("https://api.alquran.cloud/ayah/"+ayah+"/en.asad", config)

  const data2 = await res2.json()

  text2.innerHTML = data2.data.text;
  surahAndAyah.innerHTML = data2.data.surah.englishName + " : " + data.data.surah.numberOfAyahs;
}