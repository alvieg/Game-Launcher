const exampleLinks = [
  "thegportal.neocities.org",
  "burgerawesome.neocities.org",
];
const list = document.getElementById('links');
//<li>thegportal.neocities.org</li>
const listItems = document.querySelectorAll('#links li');
const inputBar = document.getElementById('urlbox');
function addToBar(TEXT) {
  var clickedItem = document.getElementById(TEXT)
}

exampleLinks.forEach(exampleLinks => {
      const listItem = document.createElement('li'); // Create a new <li> element
      listItem.textContent = exampleLinks; // Set the text content
      listItem.onclick = () => addToBar(exampleLinks)
      list.appendChild(listItem); // Append the <li> to the <ul>
});
function checkHTTP(VAR, id) {
let VAR = document.GetElementById(id).value;
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
checkHTTP(url, urlbox)
iframe.src = url;
win.document.body.appendChild(iframe);
var script = win.document.createElement('script');
script.innerHTML = "setTimeout(() => { location.reload(true); }, 10800 * 1000);";
win.document.body.appendChild(script);
window.close();
console.log(url)
}
setTimeout(() => {
openInNewTab("${url}");
}, 2500);
