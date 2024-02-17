import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import { renderPicture } from "./render-functions";

const picContAdd = document.querySelector('.js_picture_load');
const loadElemLast = document.getElementById("loader_serch");

export const picCont = document.querySelector('.gallery')

const input = document.querySelector('.js-search-form');
let currentPage = 1;
let nameSearch = '';
let PER_PAGE = 200;
let namHits;
let heightScrol;


input.addEventListener('submit', onFormSubmit);
picContAdd.addEventListener('click', onSearchMore);

async function onFormSubmit(e){
      e.preventDefault();
      hideSearch();
      nameSearch = e.target.elements.form.value.trim();
      picCont.innerHTML = "";
      currentPage = 1;
      if(nameSearch === ''){
      e.target.reset();
      picCont.innerHTML = "";
      noSearch();
        return;
    }
    let namberHits;
    try {
      const data = await searchPicture();
      namberHits = data.totalHits;
      checkBtnStatus();
      renderPicture(data);
      gallery.refresh();
    } catch (error) {
      noSearch();
      console.error('Error retrieving image link:', error);
    }
    const elementImage = document.querySelector('.gallery-item');
    const elementImageParams = elementImage.getBoundingClientRect();
    const heightElement = elementImageParams.height;
    heightScrol = heightElement + heightElement;
    namHits = namberHits;
    e.target.reset();
showSearch()

};



async function searchPicture(){
    const BASE_URL = 'https://pixabay.com/api/?';
    const params = new URLSearchParams({
    key: '42108829-54920070c40067c28d8228e80',
    q: nameSearch,
    image_type:'photo',
    orientation:'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: PER_PAGE,
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

  document.getElementById("loader").style.display = "flex";
  currentPage += 1;
  checkBtnStatus();

  try {
    const data = await searchPicture();
    document.getElementById("loader").style.display = "none";
    renderPicture(data);
    gallery.refresh();
  } catch (error) {
    console.error('Error retrieving image link:', error);
  }
  window.scrollBy({
    top: `${heightScrol}`,
    behavior: 'smooth',
  });
  // showSearch()
}

function checkBtnStatus() {
  const maxPage = Math.ceil(namHits/ PER_PAGE);
  const isLastPage = maxPage <= currentPage;
  if (isLastPage) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#FFFFFF',
      backgroundColor: '#1bb5b0',
      position: 'topRight',
    });
    noButton();
    // noSearch();
  } else {
    showSearch();
  }
}

function showSearch() {
  loadElemLast.classList.add('is-open')
  picContAdd.classList.remove('hidden');
}

export function hideSearch() {
  loadElemLast.classList.remove('is-open')
  picContAdd.classList.add('hidden');
}
function noSearch(){
  loadElemLast.classList.add('is-open')

}
function noButton(){
  picContAdd.classList.add('hidden');

}

const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

// showSearch()
// hideSearch()
// noSearch()
// noButton()