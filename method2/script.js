//Iframe
var url = prompt('Enter a URL: (Left Blank will take you to Google)');
if (typeof url === 'undefined' || url === '') {
    url = 'www.google.com/webhp?igu=1';
  }

//Iframe
const iframe = document.createElement('iframe');
iframe.src = 'https://'+url;
iframe.style.position = 'fixed';
iframe.style.top = '25px';
iframe.style.left = '0';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
document.body.appendChild(iframe);

//Website Input
const input = document.createElement('input');
input.type = 'text';
input.value = url;
input.style.position = 'fixed';
input.style.top = '0';
input.style.left = '0';
input.style.width = '250px';
input.style.height = '20px';
document.body.appendChild(input);

//Load Button
const button = document.createElement('button');
button.innerText = 'Load Website';
button.style.position = 'fixed';
button.style.top = '0';
button.style.left = '258px';
button.style.width = '100px';
button.style.height = '25px';
document.body.appendChild(button);

button.addEventListener('click', function() {
    iframe.src = 'https://'+input.value;
    url = input.value;

});

//Google Button
const Gbutton = document.createElement('button');
Gbutton.innerText = 'Load Google';
Gbutton.style.position = 'fixed';
Gbutton.style.top = '0';
Gbutton.style.left = '358px';
Gbutton.style.width = '100px';
Gbutton.style.height = '25px';
document.body.appendChild(Gbutton);

Gbutton.addEventListener('click', function() {
    url = 'www.google.com/webhp?igu=1';
    iframe.src = 'https://'+url;
    input.value = url;

});


//Credits
const credits = document.createElement('text');
credits.textContent = 'Created by RangerRhino23';
credits.style.position = 'fixed';
credits.style.top = '5px';
credits.style.left = '85%';
credits.style.width = '200px';
credits.style.height = '25px';
document.body.appendChild(credits);