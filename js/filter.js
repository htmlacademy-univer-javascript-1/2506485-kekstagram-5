import { getRandomUniqueNumberGenerate} from "./util.js";

const Filter = {
    DEFAULT :'filter-default',
    RANDOM:'filter-random',
    DISCUSSED: 'filter-discussed',
}
const filterElement = document.querySelector('.img-filters');
let pictures = [];
let currentFilter = Filter.DEFAULT
const sortByComments = (picture_1, picture_2) => picture_2.comments.length - picture_1.comments.length;
const getfilteredPictures = (loadedPictures) =>{
    pictures = [...loadedPictures];
    if (Filter.DISCUSSED === currentFilter) {
            return [...pictures].sort(sortByComments);
    }
    else if (Filter.RANDOM === currentFilter){
        let randonNumbers = [];
        for(var i = 1; i <= 10; i++){
            getRandomUniqueNumberGenerate(0, 24, randonNumbers)
        }
        return randonNumbers.map(index => pictures[index]);
        }
    else return [...pictures];
}

const putFilter = (loadedPictures, callback) => {
    filterElement.classList.remove('img-filters--inactive');
    filterElement.addEventListener('click', (evt) =>{
        if (!evt.target.classList.contains('img-filters__button')) return;
    
        const clickedButton = evt.target;
        if (clickedButton.id === currentFilter) return;
        
        filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
        clickedButton.classList.add('img-filters__button--active');
        currentFilter = clickedButton.id;
        callback(getfilteredPictures(loadedPictures));
    })
}

export {putFilter, getfilteredPictures};