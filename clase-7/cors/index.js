

const fetchingData = async () => {
  const response = await fetch("http://localhost:3000")

  console.log(response)
  const data = await response.json()
  document.querySelector("p").textContent = data.status
}

fetchingData()