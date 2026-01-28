const oldalBetoltes = async () => {
 
    const response = await fetch("/public/test.json");
    const data = await response.json();

    console.log(data)

    const tbody = document.getElementById("table-tartalom");
  
    data.forEach(elem => {
      const tr = document.createElement("tr")

      const nev = document.createElement("td")
      nev.textContent = elem.nev

      const vernyomas = document.createElement("td")
      vernyomas.textContent = elem.vernyomas

      tr.appendChild(nev)
      tr.appendChild(vernyomas)

      tbody.appendChild(tr)
    }) 
  }

document.addEventListener("DOMContentLoaded", oldalBetoltes)