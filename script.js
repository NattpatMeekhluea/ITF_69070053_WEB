const foodDatabase = [
  {
    name: "Gotcha Pork Roast",
    description: "หมูย่างจำแลงที่ทำจากมันฝรั่งบดห่อด้วยเบคอนหนานุ่ม ราดด้วยซอสไวน์แดงรสชาติเข้มข้น",
    price: 250,
    imageUrl: "images/Roast_Pork.jpg"
    },
  {
    name: "Transforming Furikake Gohan",
    description: "ข้าวผัดไข่โปะด้วยเยลลี่ซุปไก่ที่ละลายเมื่อโดนความร้อน กลายเป็นข้าวต้มรสกลมกล่อม",
    price: 180,
    imageUrl: "images/Transforming_Furikake_Gohan.jpg"
  },
  {
    name: "Chaliapin Steak Don",
    description: "ข้าวหน้าสเต็กเนื้อนุ่มพิเศษที่หมักด้วยหัวหอมสับ ราดด้วยซอสเกรวี่สูตรเฉพาะ",
    price: 450,
    imageUrl: "images/Chaliapin Steak Don.jpg"
  },
  {
    name: "Apple Risotto",
    description: "ริซอตโต้แอปเปิ้ลรสชาติสดชื่น ตัดความเลี่ยนด้วยความเปรี้ยวอมหวานของแอปเปิ้ล",
    price: 320,
    imageUrl: "images/Apple_Risotto.jpg"
  },
  {
    name: "Sumire Karaage Roll",
    description: "ไก่ทอดคาราเกะกรอบนอกนุ่มใน ห่อด้วยแป้งเครปเวียดนามและผักสด ราดซอสพริกหวาน",
    price: 150,
    imageUrl: "images/Soma_presents_the_Karaage_Roll.jpg"
  }
];

const foodImageElement = document.getElementById("food-image");
const foodNameElement = document.getElementById("food-name");
const foodDescElement = document.getElementById("food-desc");
const foodPriceElement = document.getElementById("food-price");
const randomButton = document.getElementById("random-btn");

let lastSelectedIndex = -1;

function renderFood(food) {
  foodImageElement.src = food.imageUrl;
  foodNameElement.textContent = food.name;
  foodDescElement.textContent = food.description;
  foodPriceElement.textContent = food.price;
}

function getRandomFood() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * foodDatabase.length);
  } while (nextIndex === lastSelectedIndex && foodDatabase.length > 1);

  lastSelectedIndex = nextIndex;
  renderFood(foodDatabase[nextIndex]);
}

randomButton.addEventListener("click", getRandomFood);

document.addEventListener("DOMContentLoaded", () => {
  getRandomFood();
});