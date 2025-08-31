"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.listStyle = "none";
galleryEl.style.gap = "20px";
galleryEl.style.padding = "0";
galleryEl.style.justifyContent = "center";
galleryEl.style.alignItems = "center";

const makeGalleryItem = ({ url, alt }) => {
  return `
    <li class="gallery-item" style="flex-basis: calc((100% - 40px) / 3); box-sizing: border-box;">
      <img src="${url}" alt="${alt}" style="width: 100%; height: auto; display: block; border-radius: 8px;">
    </li>
  `;
};

const galleryItems = images.map(makeGalleryItem).join("");
galleryEl.insertAdjacentHTML("beforeend", galleryItems);
