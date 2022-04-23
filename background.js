
const filetypeExtensions = [

  ['Adobe PDF', 'pdf'],
  ['Microsoft Excel', 'xls', 'xlsx'],
  ['Microsoft PowerPoint', 'ppt'],
  ['Microsoft Word', 'doc'],
  ['Présentation OpenOffice', 'odp'],
  ['Feuille de calcul OpenOffice', 'ods'],
  ['Texte OpenOffice', 'odt'],
  ['Texte mis en forme', 'rtf']
  // ['Adobe Postscript', 'ps'],
  // ['Autodesk Design', 'dwf'],
  // ['Google Earth','kml'],
  // ['GPS eXchange Format', 'gpx'],
  // ['Hancom Hanword', 'hwp']
]

console.log(filetypeExtensions[1].length);


// ————————————————— CREATION DES ELEMENTS —————————————


const googleSearchBar = document.querySelector('input.gLFyf');
console.log(googleSearchBar);

const container = document.querySelector('div.qarstb');
// $('div.qarstb').css("background-color", "lightblue !important");



let extensionFrame = document.createElement('div');
extensionFrame.classList.add("extensionFrame");
// dotContainer.innerHTML = crash[this.value][0];
container.appendChild(extensionFrame);


let specialSearchTitle = document.createElement('h2');
specialSearchTitle.classList.add("title-specialSearch");
specialSearchTitle.innerHTML = "Chercher par :";
extensionFrame.appendChild(specialSearchTitle);

// - typefile button
let typefileBtn = document.createElement('button');
typefileBtn.classList.add("firstButton");
typefileBtn.classList.add("specialSearch");
typefileBtn.innerHTML = 'Type de fichier';
typefileBtn.value = 'filetype:';
extensionFrame.appendChild(typefileBtn);

typefileBtn.addEventListener('click', function(){
googleSearchBar.value = googleSearchBar.value + ' ' + this.value;
console.log('button clicked');
});

// - inurl button
let inurlBtn = document.createElement('button');
inurlBtn.classList.add("firstButton");
inurlBtn.classList.add("specialSearch");
inurlBtn.innerHTML = "Dans l'url";
inurlBtn.value = 'inurl:';
extensionFrame.appendChild(inurlBtn);

inurlBtn.addEventListener('click', function(){
googleSearchBar.value = googleSearchBar.value + ' ' + this.value;
console.log('button clicked');
});

// - intext button
let intextBtn = document.createElement('button');
intextBtn.classList.add("firstButton");
intextBtn.classList.add("specialSearch");
intextBtn.innerHTML = "Dans le texte";
intextBtn.value = 'intext:';
extensionFrame.appendChild(intextBtn);

intextBtn.addEventListener('click', function(){
googleSearchBar.value = googleSearchBar.value + ' ' + this.value;
console.log('button clicked');
});

// - book button
let bookBtn = document.createElement('button');
bookBtn.classList.add("firstButton");
bookBtn.classList.add("specialSearch");
bookBtn.innerHTML = "Dans le livre";
bookBtn.value = 'book:';
extensionFrame.appendChild(bookBtn);

bookBtn.addEventListener('click', function(){
googleSearchBar.value = googleSearchBar.value + ' ' + this.value;
console.log('button clicked');
});

// - maps button
let mapsBtn = document.createElement('button');
mapsBtn.classList.add("firstButton");
mapsBtn.classList.add("specialSearch");
mapsBtn.innerHTML = "Dans la carte";
mapsBtn.value = 'maps:';
extensionFrame.appendChild(mapsBtn);

mapsBtn.addEventListener('click', function(){
googleSearchBar.value = googleSearchBar.value + ' ' + this.value;
console.log('button clicked');
});


// boutons extensions de fichiers
for (var i = 0; i < filetypeExtensions.length; i++) {

  let regexFiletype = /filetype:/g;

  if (filetypeExtensions[i].length == 3) {

    let typeBtn = document.createElement('button');
    typeBtn.classList.add("typeButton");
    typeBtn.classList.add("specialSearch");
    typeBtn.innerHTML = filetypeExtensions[i][0];
    typeBtn.value = " filetype:" + filetypeExtensions[i][1] + " OR filestyle:" + filetypeExtensions[i][2];
    extensionFrame.appendChild(typeBtn);

    typeBtn.addEventListener('click', function(){
      if (googleSearchBar.value.search(regexFiletype) != -1) {
        googleSearchBar.value = googleSearchBar.value + " OR";
      }

    googleSearchBar.value = googleSearchBar.value + this.value;
    console.log('button clicked');
  });

  } else {

    let typeBtn = document.createElement('button');
    typeBtn.classList.add("typeButton");
    typeBtn.classList.add("specialSearch");
    typeBtn.innerHTML = filetypeExtensions[i][0];
    typeBtn.value = " filetype:" + filetypeExtensions[i][1];
    extensionFrame.appendChild(typeBtn);

    typeBtn.addEventListener('click', function(){
      if (googleSearchBar.value.search(regexFiletype) != -1) {
        googleSearchBar.value = googleSearchBar.value + " OR";
      }

    googleSearchBar.value = googleSearchBar.value + this.value;
    console.log('button clicked');
  });
  }


};


// ————————————— DRAGGABLE DIV —————————————— 

// Make the DIV element draggable:
// dragElement(extensionFrame);
//
// function dragElement(elmnt) {
//
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }
//
//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }
//
//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }
//
//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
