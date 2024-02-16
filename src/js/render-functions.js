import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { picCont } from "./pixabay-api";
import { hideSearch } from "./pixabay-api";


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
    hideSearch();
    return;
  }else{
    return pictureProm;
  }
}

export function renderPicture(picture) {
  const markup = picturesTemplate(picture);
  if(markup.length === 0)return;
  picCont.insertAdjacentHTML('beforeend', markup);
}
