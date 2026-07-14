const galleryItems = [
  {
    src: './assets/placeholder-1.jpg',
    alt: 'Placeholder image for an animal species',
    commonName: 'Common name',
    scientificName: 'Scientific name',
    fact: 'Replace this with a fun fact.'
  },
  {
    src: './assets/placeholder-2.jpg',
    alt: 'Placeholder image for a second animal species',
    commonName: 'Common name',
    scientificName: 'Scientific name',
    fact: 'Replace this with a fun fact.'
  }
];

const slideshowView = document.getElementById('slideshow-view');
const gridView = document.getElementById('grid-view');
const modeSlideshow = document.getElementById('mode-slideshow');
const modeGrid = document.getElementById('mode-grid');
const slideImage = document.getElementById('slide-image');
const slidePosition = document.getElementById('slide-position');
const slideCommonName = document.getElementById('slide-common-name');
const slideScientificName = document.getElementById('slide-scientific-name');
const slideFact = document.getElementById('slide-fact');
const slideAlt = document.getElementById('slide-alt');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const galleryGrid = document.getElementById('gallery-grid');

let currentIndex = 0;

function setMode(mode) {
  const slideshowActive = mode === 'slideshow';
  slideshowView.hidden = !slideshowActive;
  gridView.hidden = slideshowActive;
  modeSlideshow.setAttribute('aria-selected', String(slideshowActive));
  modeSlideshow.setAttribute('aria-pressed', String(slideshowActive));
  modeGrid.setAttribute('aria-selected', String(!slideshowActive));
  modeGrid.setAttribute('aria-pressed', String(!slideshowActive));
}

function renderSlide(index) {
  if (!galleryItems.length) {
    slideImage.src = '';
    slideImage.alt = '';
    slidePosition.textContent = 'No images added yet';
    slideCommonName.textContent = 'Add gallery items';
    slideScientificName.innerHTML = 'Scientific name: <em>—</em>';
    slideFact.textContent = 'Fun fact: Add items to the galleryItems array in the script.';
    slideAlt.textContent = 'Alt text: Add descriptive alt text for each image.';
    prevSlide.disabled = true;
    nextSlide.disabled = true;
    return;
  }

  const item = galleryItems[index];
  slideImage.src = item.src;
  slideImage.alt = item.alt;
  slidePosition.textContent = `Image ${index + 1} of ${galleryItems.length}`;
  slideCommonName.textContent = item.commonName;
  slideScientificName.innerHTML = `Scientific name: <em>${item.scientificName}</em>`;
  slideFact.textContent = `Fun fact: ${item.fact}`;
  slideAlt.textContent = `Alt text: ${item.alt}`;
  prevSlide.disabled = galleryItems.length < 2;
  nextSlide.disabled = galleryItems.length < 2;
}

function goToNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  renderSlide(currentIndex);
}

function goToPrevious() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  renderSlide(currentIndex);
}

function renderGrid() {
  galleryGrid.innerHTML = '';

  if (!galleryItems.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'gallery-empty';
    emptyState.textContent = 'No gallery items added yet. Add image objects to the galleryItems array.';
    galleryGrid.appendChild(emptyState);
    return;
  }

  galleryItems.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-grid-card';

    const button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', () => {
      currentIndex = index;
      setMode('slideshow');
      renderSlide(currentIndex);
      slideshowView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    const copy = document.createElement('div');
    copy.className = 'gallery-card-copy';
    copy.innerHTML = `<strong>${item.commonName}</strong><span>${item.scientificName}</span>`;

    button.append(img, copy);
    card.appendChild(button);
    galleryGrid.appendChild(card);
  });
}

modeSlideshow.addEventListener('click', () => setMode('slideshow'));
modeGrid.addEventListener('click', () => setMode('grid'));
prevSlide.addEventListener('click', goToPrevious);
nextSlide.addEventListener('click', goToNext);

document.addEventListener('keydown', (event) => {
  if (slideshowView.hidden) return;
  if (event.key === 'ArrowLeft') goToPrevious();
  if (event.key === 'ArrowRight') goToNext();
});

renderSlide(currentIndex);
renderGrid();
setMode('slideshow');
