const urls = [
  "https://images.unsplash.com/photo-1593642632823-8f785ba67e45", 
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed", 
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", 
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
  "https://images.unsplash.com/photo-1504707748692-419802cf939d",
  "https://images.unsplash.com/photo-1589561253898-768105ca91a8",
  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
];

for (const url of urls) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(url, res.status);
  } catch (e) {
    console.log(url, 'Error:', e.message);
  }
}
