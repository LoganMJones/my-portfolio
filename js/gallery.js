const galleryItems = [
  {
    src: './assets/1-DSC09347.jpg',
    alt: 'Four people stand on an ornate arched wooden bridge over still water at Kellogg Biological Station, with Gull Lake glowing behind them and green trees framing the scene.',
    commonName: 'KBS Manor Bridge',
    scientificName: 'Kellogg Biological Station · Gull Lake',
    fact: 'This arched bridge sits on the historic manor grounds beside Gull Lake, a long-term base for ecological research at Michigan State University’s Kellogg Biological Station.'
  },
  {
    src: './assets/2-DSC09385.jpg',
    alt: 'Macro side view of a male non-biting midge with large feathery antennae, a slender tan body, spotted wings, and long thin legs on a mossy textured surface.',
    commonName: 'Non-biting Midge',
    scientificName: 'Chironomidae',
    fact: 'Male midges use those plumose antennae to pick up the wingbeat rhythm of females in mating swarms—and adults of most species never bite.'
  },
  {
    src: './assets/3-DSC09391.jpg',
    alt: 'Macro of a bristly brown leaf weevil on a dark pebbled surface, showing a short snout, long segmented antennae, and a pitted hairy body.',
    commonName: 'Brown Leaf Weevil',
    scientificName: 'Phyllobius oblongus',
    fact: 'This European weevil feeds on the tender leaves of many deciduous trees and shrubs and is now widespread across the Northeast and Great Lakes.'
  },
  {
    src: './assets/4-DSC09420.jpg',
    alt: 'Side-profile macro of an oak timberworm beetle with a shiny reddish-brown head and snout, long antennae at the tip of the snout, and dark ridged wing covers marked with pale yellow dashes.',
    commonName: 'Oak Timberworm',
    scientificName: 'Arrenodes minutus',
    fact: 'Females and males have snouts of different lengths; larvae tunnel through living oak wood, sometimes leaving distinctive “powderpost” galleries.'
  },
  {
    src: './assets/5-DSC09464.jpg',
    alt: 'Macro of a silky field ant on a speckled brown branch, its black body covered in fine silvery hairs that catch the light.',
    commonName: 'Silky Field Ant',
    scientificName: 'Formica subsericea',
    fact: 'Those fine silver hairs give this Formica ant its “silky” look and help it survive exposed nest life in open fields and woodland edges.'
  },
  {
    src: './assets/6-DSC09586.jpg',
    alt: 'Macro of a three-lined potato beetle on a serrated green leaf: orange head and thorax, creamy yellow elytra with three bold black stripes, and dark antennae.',
    commonName: 'Three-lined Potato Beetle',
    scientificName: 'Lema daturaphila',
    fact: 'Larvae wear a strange backpack of their own frass as camouflage while feeding on plants in the nightshade family.'
  },
  {
    src: './assets/7-DSC09632.jpg',
    alt: 'A glossy eastern black carpenter ant walks across coarse sandy ground, carrying a small dark object in its mandibles.',
    commonName: 'Eastern Black Carpenter Ant',
    scientificName: 'Camponotus pennsylvanicus',
    fact: 'Carpenter ants do not eat wood—they excavate damp or soft timber into nest galleries and forage for insects and honeydew.'
  },
  {
    src: './assets/8-DSC09654.jpg',
    alt: 'A shiny eastern black carpenter ant stands on a green leaf beside a much smaller pale insect, with leaf veins soft in the background.',
    commonName: 'Eastern Black Carpenter Ant',
    scientificName: 'Camponotus pennsylvanicus',
    fact: 'Workers often haul dead insects and other protein back to the nest to feed developing larvae.'
  },
  {
    src: './assets/9-DSC09679.jpg',
    alt: 'A slender black spider wasp with iridescent wings drags a paralyzed orb-weaver spider across pebbly soil scattered with dried plant bits.',
    commonName: 'Five-spotted Spider Wasp',
    scientificName: 'Episyron quinquenotatus',
    fact: 'Spider wasps sting spiders just enough to paralyze them, then stash each one in a burrow as a living meal for a single larva.'
  },
  {
    src: './assets/10-DSC09722.jpg',
    alt: 'A pure white, densely fuzzy agreeable tiger moth with black-and-white feathered antennae rests on sandy grit beside weathered wood.',
    commonName: 'Agreeable Tiger Moth',
    scientificName: 'Spilosoma congrua',
    fact: 'Those feathered antennae mark a male—he uses them to detect female pheromones drifting on the night air.'
  },
  {
    src: './assets/11-DSC09881.jpg',
    alt: 'Top-down view of a tufted bird-dropping moth on dark wood: creamy white wings edged with olive and gray bands, a fuzzy brown thoracic tuft, and black-and-white banded legs.',
    commonName: 'Tufted Bird-dropping Moth',
    scientificName: 'Cerma cerintha',
    fact: 'At rest, the moth’s messy tuft and blotchy wing borders make it look like a bird dropping—an effective disguise against hungry birds.'
  },
  {
    src: './assets/12-DSC09897.jpg',
    alt: 'A dark cinnamon rove beetle with short wing covers and a long flexible abdomen rests on a pale pitted stone surface.',
    commonName: 'Cinnamon Rove Beetle',
    scientificName: 'Platydracus cinnamopterus',
    fact: 'Rove beetles fold surprisingly large flight wings under tiny elytra, so many of them are strong fliers despite looking wingless.'
  },
  {
    src: './assets/13-DSC09989.jpg',
    alt: 'A lime-green and tan treehopper with a helmet-like pronotum and translucent veined wings sits on a dark pebbled surface.',
    commonName: 'Treehopper',
    scientificName: 'Ophiderma evelyna',
    fact: 'Treehoppers communicate by vibrating plant stems—signals too subtle for human ears without special equipment.'
  },
  {
    src: './assets/14-DSC09998.jpg',
    alt: 'A brown-mottled caddisfly holds hairy wings roof-like over its body, with extremely long thread-like antennae, perched on ribbed beige fabric.',
    commonName: 'Caddisfly',
    scientificName: 'Leptoceroidea',
    fact: 'As larvae, many caddisflies build portable cases from silk glued to sand, pebbles, or plant bits—tiny underwater architecture.'
  },
  {
    src: './assets/15-DSC00036.jpg',
    alt: 'A group of amber-and-brown Tennessee collared ants swarms over a thick dark caterpillar wedged in rough tree bark with moss nearby.',
    commonName: 'Tennessee Collared Ant',
    scientificName: 'Aphaenogaster tennesseensis',
    fact: 'These woodland ants often hunt or scavenge cooperatively, overwhelming prey far larger than any single worker.'
  },
  {
    src: './assets/16-DSC00074.jpg',
    alt: 'Two glossy dark ants meet head-to-head on a vivid green leaf, antennae and mouthparts touching amid fine leaf veins.',
    commonName: 'Odorous House Ant',
    scientificName: 'Tapinoma sessile',
    fact: 'Ants often share liquid food mouth-to-mouth—called trophallaxis—spreading nutrients and chemical information through the colony.'
  },
  {
    src: './assets/17-DSC00105.jpg',
    alt: 'An iridescent metallic-green six-spotted tiger beetle with white elytral spots, bulging eyes, and pale mandibles stands on lichen-flecked bark.',
    commonName: 'Six-spotted Tiger Beetle',
    scientificName: 'Cicindela sexguttata',
    fact: 'Among the fastest running insects, tiger beetles chase prey in explosive sprints—and adults may have anywhere from zero to eight white spots despite the name.'
  },
  {
    src: './assets/18-DSC00190.jpg',
    alt: 'A tiny white, powder-dusted dustywing with tented opaque wings and dark reddish eyes perches on the serrated edge of a green leaf.',
    commonName: 'Dustywing',
    scientificName: 'Coniopteryginae',
    fact: 'Dustywings secrete a white waxy powder that coats the body and wings, helping reduce water loss and deter some predators.'
  },
  {
    src: './assets/19-DSC00200.jpg',
    alt: 'A translucent green male non-biting midge with dense feathery antennae, long pale legs, and clear wings stands on a finely hairy green leaf.',
    commonName: 'Non-biting Midge',
    scientificName: 'Chironomidae',
    fact: 'Adult midges of many species do not feed at all; their brief lives above water are mostly about mating and laying eggs.'
  },
  {
    src: './assets/20-DSC00222.jpg',
    alt: 'A bright yellow giant mayfly with transparent veined wings, bulging eyes, and two extremely long trailing tails rests on dark furrowed tree bark.',
    commonName: 'Giant Mayfly',
    scientificName: 'Hexagenia limbata',
    fact: 'Adult mayflies often live only hours to a day or two—many never feed, existing mainly to emerge, mate, and lay eggs.'
  },
  {
    src: './assets/21-DSC00235.jpg',
    alt: 'A bearded carpenter ant walks across moss-covered wood near a rusty nail head, its dark body and long antennae sharp in profile.',
    commonName: 'Bearded Carpenter Ant',
    scientificName: 'Camponotus subbarbatus',
    fact: 'Named for fine hairs under the head, this smaller carpenter ant often nests in twigs, hollow stems, and soft wood.'
  },
  {
    src: './assets/22-DSC00270.jpg',
    alt: 'A metallic emerald long-legged fly with reddish eyes and stilt-like legs perches on a fuzzy green leaf against a dark background.',
    commonName: 'Long-legged Fly',
    scientificName: 'Condylostylus',
    fact: 'These tiny metallic flies are predators that hunt aphids and midges, often pinning prey with their long legs.'
  },
  {
    src: './assets/23-DSC00340.jpg',
    alt: 'Side profile of a common musk turtle held in soft light, duckweed flecking its rough dark shell and a pale stripe running along its upturned head.',
    commonName: 'Common Musk Turtle',
    scientificName: 'Sternotherus odoratus',
    fact: 'Nicknamed the “stinkpot,” this turtle can release a musky odor from scent glands when threatened.'
  },
  {
    src: './assets/24-DSC00377.jpg',
    alt: 'A fingernail-sized brown American toadlet with warty mottled skin rests in the center of a person’s cupped palms.',
    commonName: 'American Toad',
    scientificName: 'Anaxyrus americanus',
    fact: 'Freshly metamorphosed toadlets are often under half an inch long—tiny but fully formed versions of the adults.'
  },
  {
    src: './assets/25-DSC00404.jpg',
    alt: 'A vivid red-banded leafhopper with turquoise and orange-red stripes rests on a textured green leaf against a dark background.',
    commonName: 'Red-banded Leafhopper',
    scientificName: 'Graphocephala coccinea',
    fact: 'Leafhoppers “talk” by sending vibrational signals through plant stems—sounds too faint for human ears.'
  },
  {
    src: './assets/26-DSC00426.jpg',
    alt: 'A slender ferruginous tiger crane fly with a yellowish striped thorax and thread-like legs rests on a bright green serrated leaf.',
    commonName: 'Ferruginous Tiger Crane Fly',
    scientificName: 'Nephrotoma ferruginea',
    fact: 'Despite their mosquito-like look, adult crane flies do not bite—many species barely feed at all as adults.'
  },
  {
    src: './assets/27-DSC00464.jpg',
    alt: 'A gold-headed click beetle with a metallic copper-pink pronotum and black ridged wing covers rests diagonally on a light green leaf.',
    commonName: 'Gold-headed Click Beetle',
    scientificName: 'Limonius aurifer',
    fact: 'Click beetles can snap a special spine to launch themselves into the air with an audible “click” if flipped onto their backs.'
  },
  {
    src: './assets/28-DSC00477.jpg',
    alt: 'A fuzzy brown silver-spotted skipper faces the camera while perched on the spiky disc of a purple coneflower, with hooked antenna tips visible.',
    commonName: 'Silver-spotted Skipper',
    scientificName: 'Epargyreus clarus',
    fact: 'Skippers are named for their quick, darting flight, and many have hooked antenna tips that set them apart from other butterflies.'
  },
  {
    src: './assets/29-DSC00737.jpg',
    alt: 'A fuzzy yellow-and-black bumble bee extends its long tongue into the reddish-purple disc florets of a coneflower, with pollen clinging to its leg hairs.',
    commonName: 'Brown-belted Bumble Bee',
    scientificName: 'Bombus griseocollis',
    fact: 'Bumble bees can “buzz pollinate,” vibrating flowers to shake loose pollen that many other bees cannot reach.'
  },
  {
    src: './assets/30-DSC00746.jpg',
    alt: 'A reddish-brown immigrant pavement ant with a ridged thorax and shiny gaster crawls across cracked, weathered wood.',
    commonName: 'Immigrant Pavement Ant',
    scientificName: 'Tetramorium immigrans',
    fact: 'In spring, neighboring pavement ant colonies often wage sprawling “sidewalk wars” to settle territory boundaries.'
  },
  {
    src: './assets/31-DSC00769.jpg',
    alt: 'A small signal fly with boldly banded wings, a dark thorax, pale scutellum, and an orange abdomen rests in sharp macro detail.',
    commonName: 'Signal Fly',
    scientificName: 'Rivellia quadrifasciata',
    fact: 'Rivellia flies often wave their boldly patterned wings in courtship displays—visual signals that give the group its common name.'
  },
  {
    src: './assets/32-DSC00838.jpg',
    alt: 'A bristly stripe-legged robber fly with metallic eyes and a pale beard of mystax bristles perches on a green leaf, spiny legs ready.',
    commonName: 'Stripe-legged Robber Fly',
    scientificName: 'Dioctria hyalipennis',
    fact: 'Robber flies are aerial predators that intercept other insects mid-flight, then inject immobilizing enzymes.'
  },
  {
    src: './assets/33-DSC00885.jpg',
    alt: 'A sleek black spider wasp hauls a paralyzed tan spider across a brick-and-mortar wall, long legs and iridescent wings catching the light.',
    commonName: 'Spider Wasp',
    scientificName: 'Auplopus',
    fact: 'Some spider wasps chew the legs off paralyzed spiders to make them easier to carry into narrow nest cells.'
  },
  {
    src: './assets/34-DSC00900.jpg',
    alt: 'A cluster of translucent tan spherical eggs under a veil of white silk sits on a lichen-flecked branch against a black background.',
    commonName: 'Spider Eggs',
    scientificName: 'Araneae',
    fact: 'Many spiders wrap eggs in silk sacs that protect developing spiderlings from weather, parasites, and predators.'
  },
  {
    src: './assets/35-DSC00972.jpg',
    alt: 'Two orange-and-black margined leatherwing beetles mate on a cluster of tiny white flowers, yellow-edged black elytra sharp against dark green.',
    commonName: 'Margined Leatherwing Beetle',
    scientificName: 'Chauliognathus marginatus',
    fact: 'Adult leatherwing beetles visit flowers for pollen and nectar while also hunting soft-bodied insects.'
  },
  {
    src: './assets/36-DSC00982.jpg',
    alt: 'A glossy orange-red seven-spotted lady beetle rests among golden dried grass florets and awns, seven black spots marking its dome-shaped wing covers.',
    commonName: 'Seven-spotted Lady Beetle',
    scientificName: 'Coccinella septempunctata',
    fact: 'A single lady beetle can eat dozens of aphids a day, making it a welcome guest in gardens and farm fields.'
  },
  {
    src: './assets/37-DSC01057.jpg',
    alt: 'A lime-green North American luna moth with a fuzzy white body and broad golden feathery antennae rests on a white window frame beside dark mesh screen.',
    commonName: 'North American Luna Moth',
    scientificName: 'Actias luna',
    fact: 'Adult luna moths have no working mouthparts and live only about a week, spending their short adult lives finding mates.'
  },
  {
    src: './assets/38-DSC01153.jpg',
    alt: 'A tiny mottled brown-and-cream two-striped planthopper nymph clings to a bright green stem, trailing a wild tuft of white waxy filaments.',
    commonName: 'Two-striped Planthopper',
    scientificName: 'Acanalonia bivittata',
    fact: 'Those fluffy white “tails” are wax filaments that can break off in a predator’s grasp, giving the nymph a chance to hop away.'
  },
  {
    src: './assets/39-DSC01165.jpg',
    alt: 'A glossy nearctic carpenter ant walks in profile across a rough reddish-brown brick surface, long antennae curving forward.',
    commonName: 'Nearctic Carpenter Ant',
    scientificName: 'Camponotus nearcticus',
    fact: 'This smaller North American carpenter ant often nests in twigs and soft wood rather than large timber beams.'
  },
  {
    src: './assets/40-DSC01171.jpg',
    alt: 'A vivid blue bluet damselfly with black thoracic stripes perches on a fuzzy green plant bud, large blue compound eyes sharp against darkness.',
    commonName: 'Bluet Damselfly',
    scientificName: 'Enallagma',
    fact: 'Bluet damselflies spend early life underwater as nymphs, then emerge as aerial hunters that often perch near still water.'
  },
  {
    src: './assets/41-DSC01173.jpg',
    alt: 'A common eastern firefly on a green leaf with tan dark-striped elytra raised, revealing hind wings; cream pronotum with a pinkish center faces the night.',
    commonName: 'Common Eastern Firefly',
    scientificName: 'Photinus pyralis',
    fact: 'Male Photinus fireflies flash a distinctive rising J-shaped light signal on summer evenings to attract females.'
  },
  {
    src: './assets/42-DSC01207.jpg',
    alt: 'A wet olive-brown eastern newt with dark spotting and a glimpse of orange belly rests in cupped hands among strands of aquatic vegetation.',
    commonName: 'Eastern Newt',
    scientificName: 'Notophthalmus viridescens',
    fact: 'Eastern newts live three lives: aquatic larva, bright orange land-dwelling red eft, then olive aquatic adult.'
  },
  {
    src: './assets/43-DSC01229.jpg',
    alt: 'A mottled brown dragonfly nymph crawls across glistening mud among thin green plant stems, its wide head and large eyes sharp in the foreground.',
    commonName: 'Dragonfly Nymph',
    scientificName: 'Anisoptera',
    fact: 'Dragonfly nymphs strike prey with a hinged lower lip that shoots forward in a split second—an underwater “mask” unique among insects.'
  },
  {
    src: './assets/44-DSC01345.jpg',
    alt: 'A small yellowish-olive viburnum leaf beetle with dark longitudinal elytral stripes crawls along a rough dark twig in profile.',
    commonName: 'Viburnum Leaf Beetle',
    scientificName: 'Pyrrhalta viburni',
    fact: 'Both adults and larvae feed on viburnum leaves, often skeletonizing them so only the veins remain.'
  },
  {
    src: './assets/45-DSC01385.jpg',
    alt: 'Two dark, yellow-speckled speckled sharpshooters mate end-to-end on a green stem; one shows bright white waxy brochosome patches on its side.',
    commonName: 'Speckled Sharpshooter',
    scientificName: 'Paraulacizes irrorata',
    fact: 'Female sharpshooters make microscopic soccer-ball-shaped wax granules called brochosomes and later coat their eggs with them for protection.'
  },
  {
    src: './assets/46-DSC01386.jpg',
    alt: 'Several tiny brownish-gray citrus flatid planthopper nymphs line a green spotted stem, each trailing a fluffy white fan of wax filaments.',
    commonName: 'Citrus Flatid Planthopper',
    scientificName: 'Metcalfa pruinosa',
    fact: 'Despite the name, these planthoppers feed on many woody plants in Michigan—not just citrus—and their wax can look like bits of lint on stems.'
  },
  {
    src: './assets/47-DSC01406.jpg',
    alt: 'A candy-striped rhododendron leafhopper with sky-blue wings and bold orange-red longitudinal bands rests on a textured green leaf.',
    commonName: 'Rhododendron Leafhopper',
    scientificName: 'Graphocephala fennahi',
    fact: 'Closely related to the red-banded leafhopper, this species is often found on rhododendron and other ornamental shrubs.'
  },
  {
    src: './assets/48-DSC01415.jpg',
    alt: 'A bright lime-green fork-tailed bush katydid nymph with extremely long white-banded antennae stands on a ridged orange-brown flower petal.',
    commonName: 'Fork-tailed Bush Katydid',
    scientificName: 'Scudderia furcata',
    fact: 'Katydids sense their leafy world mainly with antennae that can be several times longer than their bodies.'
  },
  {
    src: './assets/49-DSC01421.jpg',
    alt: 'An orange-and-black banded reticulated net-winged beetle clings vertically to a green grass blade, ridged net-like elytra and serrated black antennae raised.',
    commonName: 'Reticulated Net-winged Beetle',
    scientificName: 'Calopteron reticulatum',
    fact: 'Their bright orange and black colors warn predators that they contain distasteful lycid compounds.'
  },
  {
    src: './assets/50-DSC01432.jpg',
    alt: 'A slender rove beetle with a glossy black head and pronotum, short amber-orange wing covers, and an exposed black abdomen rests on a mottled green leaf.',
    commonName: 'Rove Beetle',
    scientificName: 'Tachinus fimbriatus',
    fact: 'Many Tachinus rove beetles live among fungi and decaying plant matter, where they hunt small arthropods.'
  },
  {
    src: './assets/51-DSC01508.jpg',
    alt: 'A large seafoam-green cecropia moth caterpillar arches on a leaf, bristling with red, yellow, and turquoise spiny tubercles and oval white spiracles along its side.',
    commonName: 'Cecropia Moth',
    scientificName: 'Hyalophora cecropia',
    fact: 'Cecropia is North America’s largest native moth; this flashy caterpillar becomes a giant brown silk moth with bold eyespots after pupating.'
  },
  {
    src: './assets/52-DSC01540.jpg',
    alt: 'Two flat-backed millipedes crawl on weathered mossy wood—one dark glossy brown and curled, the other smaller and tan—with many pale legs visible beneath each segment.',
    commonName: 'Traveling Cherry Millipede',
    scientificName: 'Pleuroloma flavipes',
    fact: 'Flat-backed millipedes help recycle forests by chewing through leaf litter and rotting wood, releasing nutrients back into the soil.'
  },
  {
    src: './assets/53-DSC01543.jpg',
    alt: 'A pale grayish-tan greenhouse millipede curves across dry leaf litter and twigs, its segmented body showing clear lateral flanges and many pairs of slender legs.',
    commonName: 'Greenhouse Millipede',
    scientificName: 'Oxidus gracilis',
    fact: 'Unlike centipedes, millipedes have two pairs of legs on most body segments and are mostly peaceful detritivores, not hunters.'
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
    button.setAttribute('aria-label', `Open slideshow for ${item.commonName}`);
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
