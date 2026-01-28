import fs from "fs"
import path from "path"
import { json } from "stream/consumers"

const vezeteknevek = [
  "Nagy", "Kovács", "Tóth", "Szabó", "Horváth",
  "Varga", "Kiss", "Molnár", "Németh", "Farkas"
]

const keresztnevek = [
  "János", "Péter", "László", "Gábor", "Zoltán",
  "Anna", "Éva", "Katalin", "Eszter", "Mária"
]

const adatok = []

function randomVernyomas(){
    const elso = Math.floor(Math.random() * 80) + 90
    const masodik = Math.floor(Math.random() * 50) + 60
    return `${elso}/${masodik}`
}

for (let i = 0; i < 50; i++) {
    const vezeteknev = vezeteknevek[Math.floor(Math.random() * vezeteknevek.length)]
    const keresztnev = keresztnevek[Math.floor(Math.random() * keresztnevek.length)]
    const vernyomas = randomVernyomas()
    adatok.push({ nev: `${vezeteknev} ${keresztnev}`, vernyomas: randomVernyomas() })
}

const mentes = path.join("public", "test.json")
fs.writeFileSync(mentes, JSON.stringify(adatok, null, 2), "utf-8")