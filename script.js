const images = [
   {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/iiif-service_gmd_gmd380_g3804_g3804n_ar111300-full-pct_25-0-default.jpg?v=1739732623094",
    copyright:
      "Mccomb, John, and Cornelius Tiebout. Plan of the city of New York. [New York?, 1789] Map. https://www.loc.gov/item/74692119/.",
  date: 1789,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/90024003.jpg?v=1740756186164",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/og8n35",
    date: 1836,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/iiif-service_gmd_gmd380_g3804_g3804n_wd000158-full-pct_12.5-0-default.jpg?v=1739733181376",
    copyright:
      "Wilson, H., Active , Cartographer, Publisher. Wilson's new map of the city of New York. [New York, N.Y.: Published by H. Wilson, 49 Ann St, 1851] Map. https://www.loc.gov/item/2020587061/.",
  date: 1851,
  },
   {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/iiif-service_gmd_gmd380_g3804_g3804n_wd000148-full-pct_25-0-default.jpg?v=1740058798326",
    copyright:
      "Hayward, Geo. , Active , Engraver, and D. T Valentine. A new & accurate plan of the city of New York in the state of New York in North America, published in. [New York, N.Y.: Common Council of the City of New York, 1853].Map  https://www.loc.gov/item/2020587095/.",
  date: 1853,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/10157004.jpg?v=1740059498792",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/99wihm",
  date: 1859,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/4971000.jpg?v=1740755693684",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/c62u08",
  date: 1860,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/iiif-service_gmd_gmd380_g3804_g3804n_fi000110b-full-pct_12.5-0-default.jpg?v=1739659719564",
    copyright:
      "Miller, James, 1821 Or , Cartographer, Publisher, Humphrey Phelps, and Millard Fillmore. Miller's new map of the city of New-York. New York: James Miller, 1862. Map. https://www.loc.gov/item/2015591066/.",
  date: 1862,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/iiif-service_gmd_gmd380_g3804_g3804n_pm005960-full-pct_12.5-0-default.jpg?v=1739731649730",
    copyright:
      "Parsons & Atwater, and Currier & Ives. New York and Brooklyn. New York, Currier & Ives, 1875. Map. Retrieved from the Library of Congress, https://www.loc.gov/item/75694808.",
  date: 1875,
  },
  {
    url: "https://cdn.glitch.global/619a9fa9-5c98-4949-9097-af50e1f01b51/8673000.jpg?v=1740059848813",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/y2o327",
  date: 1926,
  },
];

const Londonimages = [
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/12126635.jpg?v=1740942387206",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/80f3g9",
  date: 1579,
  },
   {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/iiif-service_gmd_gmd5_g5754_g5754l_ct002386-full-pct_12.5-0-default.jpg?v=1740940874697",
    copyright:
      "Morgan, William, -1690, Philip Lea, Robert Morden, John Ogilby, and London Topographical Society. London &c. Actually Surveyed. [London, London, London Topographical Society, 1904, 1904] Map. https://www.loc.gov/item/76697117/",
  date: 1690,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/10014158.jpg?v=1740991229485",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/ct7729",
  date: 1721,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/iiif-service_gmd_gmd5_g5754_g5754l_ct004187-full-pct_12.5-0-default.jpg?v=1740941241815",
    copyright:
      "Rocque, John, -1762, John Pine, and John Tinney. A plan of the cities of London and Westminster, and borough of Southwark, with the contiguous buildings. London, John Pine & John Tinney, 1746. Map. https://www.loc.gov/item/76696823/",
  date: 1746,
  },
   {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/10241001.jpg?v=1740990614101",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/ltb67b",
    date: 1827,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/14266004.jpg?v=1740942092628",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/6ddqvp",
  date: 1839,
  },
   {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/11711002.jpg?v=1740990940725",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/7itb86",
  date: 1851,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/iiif-service_gmd_gmd5_g5754_g5754l_fi000101-full-pct_25-0-default.jpg?v=1740941046094",
    copyright:
      "Whitbread, J., Cartographer, William Jeffreys, and Millard Fillmore. Whitbread's new plan of London: drawn from authentic surveys. [London: Published by J. Whitbread, mapseller, 1853] Map. https://www.loc.gov/item/2015591076/",
  date: 1853,
  },
   {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/11614002.jpg?v=1740991680826",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/6pk1ec",
  date: 1908,
  },
 ];

const Worldimages = [
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/10891133.jpg?v=1741427893578",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/08wxbj",
  date: 1525,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/10009000.jpg?v=1741428212845",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/m608cf",
  date: 1568,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/10001057.jpg?v=1741428572781",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/y13471",
  date: 1608,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/12202003.jpg?v=1741616358576",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/rjo340",
  date: 1630,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/15665004.jpg?v=1741616604373",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/9w3e80",
  date: 1677,
  },
  {
    url: "https://cdn.glitch.global/58a9ea51-9a8b-4066-9b15-cc83e7d083a3/10070029.jpg?v=1741616782030",
    copyright:
      "David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. Map https://www.davidrumsey.com/luna/servlet/s/w509z1",
  date: 1688,
  },
  
 ];


let moveCount = 0; // Move counter

document.addEventListener("DOMContentLoaded", () => {
  displayThumbnails(images);
  createCityButtons();
});

function createCityButtons() {
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  buttonContainer.style.textAlign = "center";
  buttonContainer.style.marginTop = "10px";

  const newYorkButton = document.createElement("button");
  newYorkButton.textContent = "New York";
  newYorkButton.style.margin = "5px";
  newYorkButton.addEventListener("click", () => displayThumbnails(images));

  const londonButton = document.createElement("button");
  londonButton.textContent = "London";
  londonButton.style.margin = "5px";
  londonButton.addEventListener("click", () => displayThumbnails(Londonimages));

  const worldButton = document.createElement("button");
  worldButton.textContent = "World";
  worldButton.style.margin = "5px";
  worldButton.addEventListener("click", () => displayThumbnails(Worldimages));

  
  buttonContainer.appendChild(newYorkButton);
  buttonContainer.appendChild(londonButton);
  buttonContainer.appendChild(worldButton);

  document.body.insertBefore(buttonContainer, document.getElementById("imageGrid"));
}

function displayThumbnails(imageArray) {
  const imageGrid = document.getElementById("imageGrid");
  imageGrid.innerHTML = ""; // Clear existing thumbnails

  imageArray.forEach((image, index) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("thumbnail-container");

    const label = document.createElement("div");
    label.classList.add("image-label");
    label.textContent = image.date;

    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.classList.add("thumbnail");
    imgElement.setAttribute("data-index", index);
    imgElement.addEventListener("click", () => {
      startPuzzle(image.url);
    });

    imageContainer.appendChild(label);
    imageContainer.appendChild(imgElement);
    imageGrid.appendChild(imageContainer);
  });
}

async function startPuzzle(imageUrl) {
  const imageGrid = document.getElementById("imageGrid");
  const credits = document.getElementById("credits"); // Get the credits div
  const buttonContainer = document.getElementById("buttonContainer"); // Get the button container

  imageGrid.innerHTML = ""; // Remove thumbnails

  // Remove city buttons
  if (buttonContainer) {
    buttonContainer.remove();
  }

  // Reset move counter
  moveCount = 0;

  // Find the selected image in the images array
  const selectedImage = [...images, ...Londonimages].find((img) => img.url === imageUrl);
  if (selectedImage) {
    // Convert URLs in copyright text into active links
    const copyrightWithLinks = selectedImage.copyright.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank">$1</a>'
    );

    credits.innerHTML = `<p>${copyrightWithLinks}</p>`; // Display modified copyright text
  }

  const image = new Image();
  image.src = imageUrl;
  image.crossOrigin = "Anonymous";

  image.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const columns = 6;
    const rows = 3;
    const tileWidth = image.width / columns;
    const tileHeight = image.height / rows;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const correctOrder = Array.from({ length: columns * rows }, (_, i) => i);
    const scrambledOrder = shuffleArray([...correctOrder]);

    scrambledOrder.forEach((index, i) => {
      const x = index % columns;
      const y = Math.floor(index / columns);
      const startX = x * tileWidth;
      const startY = y * tileHeight;

      const pieceCanvas = document.createElement("canvas");
      pieceCanvas.width = tileWidth;
      pieceCanvas.height = tileHeight;
      const pieceCtx = pieceCanvas.getContext("2d");

      pieceCtx.drawImage(
        canvas,
        startX,
        startY,
        tileWidth,
        tileHeight,
        0,
        0,
        tileWidth,
        tileHeight
      );

      const pieceImage = new Image();
      pieceImage.src = pieceCanvas.toDataURL();
      pieceImage.className = "tile";
      pieceImage.draggable = true;
      pieceImage.setAttribute("data-order", index);
      pieceImage.setAttribute("data-position", i);

      imageGrid.appendChild(pieceImage);
    });

    addDragAndDropFunctionality();
  };
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function addDragAndDropFunctionality() {
  let draggedTile = null;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchOffsetX = 0;
  let touchOffsetY = 0;

  const puzzleContainer = document.getElementById("imageGrid");

  // Mouse events
  puzzleContainer.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("tile")) {
      draggedTile = e.target;
      e.dataTransfer.setData("text/html", draggedTile.outerHTML);
      e.dataTransfer.setData("text/plain", draggedTile.dataset.position);
    }
  });

  puzzleContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  puzzleContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const targetTile = e.target.closest(".tile");
    if (draggedTile && targetTile && draggedTile !== targetTile) {
      swapTiles(draggedTile, targetTile);
      updateDataPositions();
      moveCount++;
      if (checkWinCondition()) {
        displayWinMessage();
      }
    }
  });

  // Touch events
  puzzleContainer.addEventListener("touchstart", (e) => {
    if (e.target.classList.contains("tile")) {
      draggedTile = e.target;
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchOffsetX = touch.clientX - draggedTile.offsetLeft;
      touchOffsetY = touch.clientY - draggedTile.offsetTop;
      draggedTile.style.position = "absolute";
      draggedTile.style.zIndex = "1000";
    }
  });

  puzzleContainer.addEventListener("touchmove", (e) => {
    if (draggedTile) {
      const touch = e.touches[0];
      const newX = touch.clientX - touchOffsetX;
      const newY = touch.clientY - touchOffsetY;
      draggedTile.style.left = `${newX}px`;
      draggedTile.style.top = `${newY}px`;
    }
  });

  puzzleContainer.addEventListener("touchend", (e) => {
    if (draggedTile) {
      const touch = e.changedTouches[0];
      const targetTile = document
        .elementFromPoint(touch.clientX, touch.clientY)
        .closest(".tile");
      if (targetTile && draggedTile !== targetTile) {
        swapTiles(draggedTile, targetTile);
        updateDataPositions();
        moveCount++;
        if (checkWinCondition()) {
          displayWinMessage();
        }
      }
      draggedTile.style.position = "static";
      draggedTile.style.zIndex = "auto";
      draggedTile.style.left = "auto";
      draggedTile.style.top = "auto";
      draggedTile = null;
    }
  });

  // Helper function to swap tiles
  function swapTiles(tile1, tile2) {
    const tempHTML = tile1.outerHTML;
    tile1.outerHTML = tile2.outerHTML;
    tile2.outerHTML = tempHTML;
  }
}

function updateDataPositions() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile, index) => {
    tile.dataset.position = index;

    // Remove old checkmark if exists
    const existingCanvas = tile.previousElementSibling;
    if (existingCanvas && existingCanvas.classList.contains("checkmark")) {
      existingCanvas.remove();
    }

    // If tile is in the correct position, draw a checkmark and disable dragging
    if (tile.dataset.order == tile.dataset.position) {
      drawCheckmarkOnTile(tile);
      tile.draggable = false; // Make the tile undraggable
      tile.style.opacity = "0.8"; // Optionally reduce opacity to indicate it's locked
    } else {
      tile.draggable = true; // Ensure incorrect tiles remain draggable
      tile.style.opacity = "1";
    }
  });
}

function drawCheckmarkOnTile(tile) {
  const tileWidth = tile.width;
  const tileHeight = tile.height;

  const canvas = document.createElement("canvas");
  canvas.width = tileWidth;
  canvas.height = tileHeight;
  canvas.classList.add("checkmark");

  const ctx = canvas.getContext("2d");

  const size = tileWidth * 0.3;
  ctx.save();
  ctx.strokeStyle = "green";
  ctx.lineWidth = Math.max(4, tileWidth / 15);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalAlpha = 0.8;

  ctx.beginPath();
  ctx.moveTo(tileWidth / 2 - size / 2, tileHeight / 2);
  ctx.lineTo(tileWidth / 2 - size / 6, tileHeight / 2 + size / 2);
  ctx.lineTo(tileWidth / 2 + size / 2, tileHeight / 2 - size / 3);
  ctx.stroke();
  ctx.restore();

  canvas.style.position = "absolute";
  canvas.style.left = `${tile.offsetLeft}px`;
  canvas.style.top = `${tile.offsetTop}px`;
  canvas.style.pointerEvents = "none";

  tile.parentElement.appendChild(canvas);
}

function checkWinCondition() {
  return [...document.querySelectorAll(".tile")].every(
    (tile, i) => tile.dataset.order == tile.dataset.position
  );
}

function displayWinMessage() {
  // Create the overlay div
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black background
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  // Create the win message container
  const winMessage = document.createElement("div");
  winMessage.style.backgroundColor = "white";
  winMessage.style.padding = "20px";
  winMessage.style.borderRadius = "10px";
  winMessage.style.textAlign = "center";
  winMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

  // Add the win message text
  const messageText = document.createElement("p");
  messageText.textContent = `Congratulations! You Win! Total moves: ${moveCount}`;
  messageText.style.fontSize = "20px";
  messageText.style.marginBottom = "20px";

  // Add the "Menu" button
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.style.padding = "10px 20px";
  menuButton.style.fontSize = "16px";
  menuButton.style.borderRadius = "5px";
  menuButton.style.border = "none";
  menuButton.style.backgroundColor = "#007BFF";
  menuButton.style.color = "white";
  menuButton.style.cursor = "pointer";
  menuButton.addEventListener("click", () => {
    overlay.remove(); // Remove the overlay
    document.getElementById("credits").innerHTML = ""; // Clear the copyright text
    displayThumbnails(images); // Return to the initial thumbnails display
    createCityButtons();
  });

  // Append elements to the win message container
  winMessage.appendChild(messageText);
  winMessage.appendChild(menuButton);

  // Append the win message container to the overlay
  overlay.appendChild(winMessage);

  // Append the overlay to the body
  document.body.appendChild(overlay);
}
function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    // Portrait mode
    document.getElementById("rotateMessage").style.display = "block";
  } else {
    // Landscape mode
    document.getElementById("rotateMessage").style.display = "none";
  }
}

// Check orientation on load and resize
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);

// Fullscreen functionality
document
  .getElementById("fullscreenButton")
  .addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  }
}

// Update the fullscreen button icon when entering/exiting fullscreen
document.addEventListener("fullscreenchange", updateFullscreenButton);
document.addEventListener("webkitfullscreenchange", updateFullscreenButton);
document.addEventListener("mozfullscreenchange", updateFullscreenButton);
document.addEventListener("MSFullscreenChange", updateFullscreenButton);

function updateFullscreenButton() {
  const fullscreenButton = document.getElementById("fullscreenButton");
  if (document.fullscreenElement) {
    // Change icon to "exit fullscreen"
    fullscreenButton.innerHTML = `
            <svg class="fullscreen-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
            </svg>
        `;
  } else {
    // Change icon to "enter fullscreen"
    fullscreenButton.innerHTML = `
            <svg class="fullscreen-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
                <path d="M16 3h3a2 2 0 0 1 2 2v3"/>
                <path d="M8 21H5a2 2 0 0 1-2-2v-3"/>
                <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
            </svg>
        `;
  }
}
