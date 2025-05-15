
const gameButtons = {
"GHUB":"https://thegportal.neocities.org",
"Burger Awesome":"https://burgerawesome.neocities.org",
"HaHa Games":"https://hahagames.com",
"Butter Dog Games":"https://teachers-are-the-best.neocities.org",
"GN-Math":"https://gn-math.github.io"
}
const gameSpace = document.getElementById('gamebuttons')

for (const [key, value] of Object.entries(gameButtons)) {
  const button = document.createElement("button");
  button.textContent = key
  button.onclick = () => redirect(value)
  gameSpace.appendChild(button)
}

function checkHTTP(VAR) {
if (!VAR.startsWith('https://')) {
VAR = "https://" + VAR;
}
}
function openInNewTab(URL) {
var win = window.open();
win.document.body.style.margin = '0';
win.document.body.style.height = '100vh';
var iframe = win.document.createElement('embed');
iframe.style.border = 'none';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.margin = '0';
var url = document.getElementById('urlbox').value;
if (url == "") {
  alert('No URL Entered')
} else {
if (!url.startsWith('https://')) {
url = "https://" + url;
};
iframe.src = url;
win.document.body.appendChild(iframe);
var script = win.document.createElement('script');
script.innerHTML = "setTimeout(() => { location.reload(true); }, 10800 * 1000);";
win.document.body.appendChild(script);
window.close();
console.log(url)
}
}

function redirect(URL) {
var win = window.open();
win.document.body.style.margin = '0';
win.document.body.style.height = '100vh';
var iframe = win.document.createElement('embed');
iframe.style.border = 'none';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.margin = '0';
var url = URL;
iframe.src = url;
win.document.body.appendChild(iframe);
var script = win.document.createElement('script');
script.innerHTML = "setTimeout(() => { location.reload(true); }, 10800 * 1000);";
win.document.body.appendChild(script);
window.close();
console.log(url)
}
