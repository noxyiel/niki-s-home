
let garden = document.getElementById("garden");
let sky = document.getElementById("sky");
let flowers = JSON.parse(localStorage.getItem("flowers") || "[]");

function plantFlower() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight * 0.8;
  const flower = {x, y};
  flowers.push(flower);
  renderFlower(flower);
  localStorage.setItem("flowers", JSON.stringify(flowers));
}

function renderFlower(flower) {
  const f = document.createElement("div");
  f.className = "flower";
  f.style.left = flower.x + "px";
  f.style.top = flower.y + "px";
  garden.appendChild(f);
}

function waterGarden() {
  const drops = document.createElement("div");
  drops.className = "rain";
  sky.appendChild(drops);
  setTimeout(() => drops.remove(), 2000);
}

function dayNightCycle() {
  const hours = new Date().getHours();
  const isNight = hours < 6 || hours > 18;
  document.body.style.background = isNight ? "#1e3c72" : "linear-gradient(#a3d5ff, #ffffff)";
}

flowers.forEach(renderFlower);
dayNightCycle();

setInterval(() => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 50 + "vh";
  sky.appendChild(star);
  setTimeout(() => star.remove(), 3000);
}, 200);
