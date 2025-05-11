function openInNewTab(URL) {
var win = window.open();
win.document.body.style.margin = '0';
win.document.body.style.height = '100vh';
var iframe = win.document.createElement('embed');
iframe.style.border = 'none';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.margin = '0';
var url = document.getElementById('urlbox').value
if (!url.startsWith('https://')) {
url = 'https://' + url
}
iframe.src = url;
win.document.body.appendChild(iframe);
var script = win.document.createElement('script');
script.innerHTML = "setTimeout(() => { location.reload(true); }, 10800 * 1000);";
win.document.body.appendChild(script);
window.close();
console.log(url)
}
setTimeout(() => {
redirect("${url}");
}, 2500);
document.addEventListener('DOMContentLoaded', () => {
const listItems = document.querySelectorAll('#links li');
const inputBox = document.getElementById('urlbox');
listItems.forEach(item => {
item.addEventListener('click', () => {
inputBox.value = item.textContent;
});
