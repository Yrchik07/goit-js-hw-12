import iziToast from "izitoast";
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
      hideSearch();
      test = e.target.elements.form.value.trim();
      picCont.innerHTML = "";
      currentPage = 1;
      if(test === ''){
      e.target.reset();
      picCont.innerHTML = "";
      document.getElementById("loader").style.display = "none";
        return;
    }
let namHits;
    try {
      const data = await searchPicture();
      namHits = data;
      document.getElementById("loader").style.display = "none";
      renderPicture(data);
      gallery.refresh();
    } catch (error) {
      console.error('Error retrieving image link:', error);
    }
    showSearch();
    // console.log(x)
    checkBtnStatus(namHits);
    e.target.reset();
};

let currentPage = 1;
let test = null;
let PER_PAGE = 150;

async function searchPicture(){
    const BASE_URL = 'https://pixabay.com/api/?';
    const params = new URLSearchParams({
    key: '42108829-54920070c40067c28d8228e80',
    q: test,
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
  document.getElementById("loader").style.display = "flex";
  currentPage += 1;

  try {
    const data = await searchPicture();
    document.getElementById("loader").style.display = "none";
    renderPicture(data);
    gallery.refresh();
  } catch (error) {
    console.error('Error retrieving image link:', error);
  }

}

function checkBtnStatus(namHits) {
  console.log(namHits.totalHits);
  const maxPage = Math.ceil(namHits.totalHits/ PER_PAGE);
  const isLastPage = maxPage <= namHits.page;
  console.log(maxPage);
  console.log(page);

  if (isLastPage) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#FFFFFF',
      backgroundColor: '#B51B1B',
      position: 'topRight',
    });
  hideSearch();
  } else {
    showSearch();
    console.log(1212121)
  }
}

function showSearch() {
  // loadElem.classList.add('hidden');
  picContAdd.classList.remove('hidden');
}

function hideSearch() {
  // loadElem.classList.add('hidden');
  picContAdd.classList.add('hidden');
}


const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});
