import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import { renderPicture } from "./render-functions";

const input = document.querySelector('.js-search-form');
export const picCont = document.querySelector('.gallery');
const picContAdd = document.querySelector('.js_picture_load');
const loadElem = document.querySelector('.js-loader');

let currentPage = 1;
let q = '';

const BASE_URL = 'https://pixabay.com/api/?';
const PARAMS = new URLSearchParams({
  key: '42108829-54920070c40067c28d8228e80',
  q,
  image_type:'photo',
  orientation:'horizontal',
  safesearch: true,
  page: currentPage,
  per_page: 3,
});
const url = BASE_URL + PARAMS;


picContAdd.addEventListener('click', onSearchMore)



input.addEventListener('submit', e =>{
  e.preventDefault();
  document.getElementById("loader").style.display = "flex";
  const name = e.target.elements.form.value.trim();

  if(name === ''){
  e.target.reset();
  picCont.innerHTML = "";
  document.getElementById("loader").style.display = "none";
  return;
}

  searchPicture(name).then(data => {
    document.getElementById("loader").style.display = "none";
    showSearch();
    renderPicture(data);
    gallery.refresh();
  });
  e.target.reset();
  picCont.innerHTML = "";
});

async function searchPicture(pixabay){
   q =`${pixabay}`;
    try{
      const res = await axios.get(url);
      return res.data;
    }catch(error){
      console.error('Error retrieving image link:', error);
    };
}

async function onSearchMore (){
  currentPage += 1;
  try{
    const res = await axios.get(url);
    return res.data;
  }catch(error){
    console.error('Error retrieving image link:', error);
  };
  renderPicture(data);

}

// console.log

function showSearch() {
  loadElem.classList.add('hidden');
  picContAdd.classList.remove('hidden');
}

function hideSearch() {
  loadElem.classList.add('hidden');
  picContAdd.classList.add('hidden');
}


const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

