import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector('.js-search-form');
const picCont = document.querySelector('.gallery');


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
    renderPicture(data);
    gallery.refresh();
  });
  e.target.reset();
  picCont.innerHTML = "";
});

function searchPicture(pixabay){
  const BASE_URL = 'https://pixabay.com/api/?';
    const PARAMS = new URLSearchParams({
      key: '42108829-54920070c40067c28d8228e80',
      q: `${pixabay}`,
      image_type:'photo',
      orientation:'horizontal',
      safesearch: true,

    });
    const url = BASE_URL + PARAMS;
  return fetch(url).then(res => res.json()).catch(error => {
    console.error('Error retrieving image link:', error);
  });
}

function pictureTemplate({webformatURL,largeImageURL,tags,likes,views,comments,downloads}){
  return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${likes}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${views}</h3>
      </li>
      <li class="description-item">
        <h2>comments</h2>
        <h3>${comments}</h3>
      </li>
      <li class="description-item">
        <h2>downloads</h2>
        <h3>${downloads}</h3>
      </li>
    </ul>
</li> `; }

function picturesTemplate(picture){

  let  pictureProm = picture.hits.map(pictureTemplate).join('');

  if(pictureProm.length === 0){
    iziToast.show({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      backgroundColor: '#B51B1B',
      position: 'topRight',
    });
    return;
  }else{
    return pictureProm ;
  }
}

function renderPicture(picture) {
  const markup = picturesTemplate(picture);
  if(markup.length === 0)return;
  picCont.insertAdjacentHTML('beforeend', markup);
}

const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

