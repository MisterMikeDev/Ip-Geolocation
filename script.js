const $ = selector => document.querySelector(selector)
const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5f14674c82msh86cc3997e1b3b10p1285a6jsnb485417ef7ef',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};
const fetchIp = async ip => {
  try {
    const res = await fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
$("form").addEventListener("submit", async (event) => {
  event.preventDefault()
  const { value } = $("#text")
  if (!value) return
  $("#submit").setAttribute("disabled", "")
  $("#submit").setAttribute("aria-busy", "true")
  const ipInfo = await fetchIp(value)
  if (ipInfo) {
    $("#results").innerHTML = JSON.stringify(ipInfo, null, 2)
  }
  $("#submit").removeAttribute("disabled")
  $("#submit").removeAttribute("aria-busy")
})













