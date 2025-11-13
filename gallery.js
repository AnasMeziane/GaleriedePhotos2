

function initGallery() {
  console.log("initGallery: onload déclenché");
  addTabIndexToFigures();

  const preview = document.getElementById('preview');
  preview.style.backgroundImage = "url('')";
  preview.innerHTML = "Hover over an image below to display here.";
}

function addTabIndexToFigures() {
  const figures = document.querySelectorAll('#thumbnails figure');
  console.log("addTabIndexToFigures: nombre de figures =", figures.length);

  for (let i = 0; i < figures.length; i++) {
    const fig = figures[i];
    if (!fig.hasAttribute('tabindex')) {
      fig.setAttribute('tabindex', '0');
    }
    const img = fig.querySelector('img');
    if (img && !img.hasAttribute('tabindex')) {
    }
  }
}

function upDate(previewPic) {
  console.log("upDate déclenché");
  if (!previewPic) {
    console.warn("upDate: previewPic est falsy");
    return;
  }
  console.log("src:", previewPic.src);
  console.log("alt:", previewPic.alt);

  const target = document.getElementById('preview');

  target.innerHTML = previewPic.alt || "Image";

  target.style.backgroundImage = "url('" + previewPic.src + "')";
}


function unDo() {
  console.log("unDo déclenché");
  const target = document.getElementById('preview');
  target.style.backgroundImage = "url('')";
  target.innerHTML = "Hover over an image below to display here.";
}
