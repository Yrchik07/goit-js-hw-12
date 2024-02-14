import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import { renderPicture } from "./render-functions";

const picContAdd = document.querySelector('.js_picture_load');
const loadElem = document.querySelector('.js-loader');

export const picCont = document.querySelector('.gallery')

const input = document.querySelector('.js-search-form');

input.addEventListener('submit', onFormSubmit);
picContAdd.addEventListener('click', onSearchMore);


async function onFormSubmit(e){
  e.preventDefault();
  document.getElementById("loader").style.display = "flex";
   test = e.target.elements.form.value.trim();
  picCont.innerHTML = "";
  currentPage = 1;
  if(test === ''){
  e.target.reset();
  picCont.innerHTML = "";
  document.getElementById("loader").style.display = "none";
  hideSearch();
  return;
}

try {
  const data = await searchPicture();
  document.getElementById("loader").style.display = "none";
  renderPicture(data);
  showSearch();
  gallery.refresh();
} catch (error) {
  console.error('Error retrieving image link:', error);
}
  e.target.reset();
};

let currentPage = 1;
let test = null;


async function searchPicture(){
  const BASE_URL = 'https://pixabay.com/api/?';
const params = new URLSearchParams({
  key: '42108829-54920070c40067c28d8228e80',
  q: test,
  image_type:'photo',
  orientation:'horizontal',
  safesearch: true,
  page: currentPage,
  per_page: 15,
});
const url = BASE_URL;


   try{
     const res = await axios.get(url, {params});
     return res.data;
   }catch(error){
     console.error('Error retrieving image link:', error);
   };
}
async function onSearchMore (){
  hideSearch();
  currentPage += 1;
  try {
    const data = await searchPicture();
    document.getElementById("loader").style.display = "none";
    renderPicture(data);
    showSearch();
    gallery.refresh();
  } catch (error) {
    console.error('Error retrieving image link:', error);
  }

}


function showSearch() {
  loadElem.classList.add('hidden');
  picContAdd.classList.remove('hidden');
}

function hideSearch() {
  loadElem.classList.add('hidden');
  picContAdd.classList.add('hidden');
}


const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});
