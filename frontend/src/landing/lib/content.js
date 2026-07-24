// Curated imagery + copy for the landing experience.
// Real photos: placedog.net (pets) + i.pravatar.cc (avatars) — reliable, no API key.
// Swap for your own uploads via Admin → Settings.

export const IMG = {
  hero: 'https://placedog.net/1400/1000?id=1',
  intro: 'https://placedog.net/1000/1250?id=2',
  men: 'https://placedog.net/1000/1250?id=7',
  newArrival: 'https://placedog.net/1600/1000?id=4',
  story: 'https://placedog.net/1200/1000?id=5',
};

// Fallback set (used only if /api/categories is unreachable).
export const CATEGORIES = [
  { name: 'Dogs', to: '/category/dogs', img: 'https://placedog.net/700/700?id=10' },
  { name: 'Cats', to: '/category/cats', img: 'https://placehold.co/700x700/e8e2d5/1c3025?text=Cats' },
  { name: 'Birds', to: '/category/birds', img: 'https://placehold.co/700x700/e8e2d5/1c3025?text=Birds' },
  { name: 'Fish', to: '/category/fish', img: 'https://placehold.co/700x700/e8e2d5/1c3025?text=Fish' },
];

export const SEASONS = [
  { name: 'Dogs', tone: 'Food, chews, beds & walk-ready gear', img: 'https://placedog.net/900/900?id=11' },
  { name: 'Cats', tone: 'Nutrition, litter, scratchers & play', img: 'https://placehold.co/900x900/e8e2d5/1c3025?text=Cats' },
  { name: 'Birds', tone: 'Fortified feed, cages & perches', img: 'https://placehold.co/900x900/e8e2d5/1c3025?text=Birds' },
  { name: 'Fish', tone: 'Flakes, tanks, filters & lighting', img: 'https://placehold.co/900x900/e8e2d5/1c3025?text=Fish' },
  { name: 'Small Pets', tone: 'Hay, habitats & wheels for the little ones', img: 'https://placehold.co/900x900/e8e2d5/1c3025?text=Small+Pets' },
];

export const TESTIMONIALS = [
  { name: 'Aarohi Menon', role: 'Dog Parent', quote: 'FURCIL gets my Labrador exactly what he needs — the food quality and fast delivery are unmatched.', img: 'https://i.pravatar.cc/200?img=45' },
  { name: 'Kabir Rao', role: 'Cat Parent', quote: 'From litter to toys, everything just works. My cats are happier and my home smells fresh.', img: 'https://i.pravatar.cc/200?img=12' },
  { name: 'Meera Nair', role: 'Bird Keeper', quote: 'The seed mixes and supplements are genuinely premium. My cockatiels have never looked brighter.', img: 'https://i.pravatar.cc/200?img=32' },
  { name: 'Dev Sharma', role: 'Aquarist', quote: 'Great gear at fair prices, delivered on time. FURCIL is my one-stop shop for the whole tank.', img: 'https://i.pravatar.cc/200?img=68' },
];

export const INSTAGRAM = [
  'https://placedog.net/500/500?id=20',
  'https://placedog.net/500/500?id=21',
  'https://placedog.net/500/500?id=22',
  'https://placedog.net/500/500?id=23',
  'https://placedog.net/500/500?id=24',
  'https://placedog.net/500/500?id=25',
  'https://placedog.net/500/500?id=26',
  'https://placedog.net/500/500?id=27',
];
