"use strict";

/* 
Aşağıdaki işlevselliğe sahip bir element koleksiyonu oluşturma ve temizleme scripti yaz.

Kullanıcının istediği öğe sayısını girdiği bir input var. Create düğmesine tıkladıktan sonra, doğru sayıda öğeye sahip bir koleksiyon (DOM'a eklenen) gerçekleştirilmeli ve input içindeki değer temizlenmelidir. Create düğmesine tekrar tıklanırsa, mevcut koleksiyonun üzerine yeni bir koleksiyonun getirilmesi gerekmektedir. Destroy düğmesine tıkladıktan sonra, öğe koleksiyonu temizlenmelidir.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Kullanıcı Create düğmesine bastıktan sonra, input içindeki değerlerin 1 ila 100 arasında olması gerektiğini doğrulamak gerekir. Yalnızca bu şartı sağlıyorsa, DOM'a yeni <div> öğeleri eklenmelidir.



Sayfadaki öğeleri oluşturmak için, createBoxes(amount) adında bir fonksiyon oluşturun. Bu fonksiyon, oluşturulacak öğe sayısını içeren bir parametre almalıdır. Fonksiyon, amount parametresinde belirtilen kadar <div> öğesi oluşturmalı ve bunları div#boxes için DOM'un alt öğeleri olarak eklemelidir.

İlk <div> öğesinin boyutu 30px x 30px olmalıdır.
Her sonraki öğe, öncekinden 10px daha geniş ve yüksek olmalıdır.
Tüm öğelerin rastgele bir arka plan rengine sahip olması gerekir. Rastgele bir renk elde etmek için hazır olan getRandomHexColor() fonksiyonunu kullanın.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Koleksiyonu temizlemek için Destroy düğmesine basıldıktan sonra, destroyBoxes() fonksiyonunu oluşturun. Bu fonksiyon , oluşturulan tüm öğeleri kaldırarak div#boxes içeriğini temizler.
*/

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
let boxSize = 30;
createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
    boxSize = 30; // Reset box size for next creation
  } else {
    alert("Lütfen 1 ile 100 arasında bir sayı girin.");
    input.value = "";
    boxesContainer.innerHTML = "";
    boxSize = 30; // Reset box size
  }
});
destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  boxesContainer.innerHTML = ""; // Clear existing boxes
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    boxSize += 10; // Increase size for next box
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
  boxSize = 30; // Reset box size
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
