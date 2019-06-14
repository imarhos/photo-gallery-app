import './index.scss';
import imageUrl from './icon-square-small.jpg';
import pngImage from './icon-square-small-png.png';
import svgImage from './svgImage.svg';
import svgTextImage from './svgTextImage.svg';


const testing = 'testing';

console.log(`${testing} babel`);


const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'I am a title';



const makeImage = (url) => {
  const image = document.createElement("img");
  image.src = url;
  return image;
}

// Testing images

const jpgImageUrl = makeImage(imageUrl);
document.body.appendChild(jpgImageUrl);
const pngImageUrl = makeImage(pngImage);
document.body.appendChild(pngImageUrl);
const svgImageUrl = makeImage(svgImage);
document.body.appendChild(svgImageUrl);
const svgTxtImageUrl = makeImage(svgTextImage);
document.body.appendChild(svgTxtImageUrl);
