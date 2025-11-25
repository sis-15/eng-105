import InfiniteMenu from '../InfiniteMenu'
// import giorgione from '../assets/giorgione.jpg';
import cooper from '../assets/cooper.png';
import romano from '../assets/romano.webp';
import rafman from '../assets/rafman.jpg';
import emperor from '../assets/emperor.jpeg'
import { labels } from '../assets/texts';
const items = [
  // { image: giorgione, link: 'https://google.com/', title: 'The Tempest', description: 'This is pretty cool, right?',author: 'Giorgio Barbarelli da Castelfranco', medium: 'Oil on canvas', size: '33 x 29"', date: 'c. 1508'},
  { image: emperor, link: 'https://google.com/', title: 'Emperor Riding to Heaven on a Dragon', description: labels.emperorLabel,author: 'Unidentified artist', medium: 'Watercolor on silk', size: '6 7/8 in. x 9 5/16 in.', date: 'n.d.'},
  { image: cooper, link: 'https://google.com/', title: 'Untitled artwork from the budget Design Store', description: labels.cooperLabel, author: 'Mark Cooper', medium: 'Digital painting', size: '12x12"', date: 'October 23, 2021'},
  { image: romano, link: 'https://google.com/', title: 'Sleep of Reason', description: labels.romanoLabel, author: 'Paul Romano', medium: 'Charcoal & ink on Rives BFK', size: '11x15”', date: '2015'},
  { image: rafman, link: 'https://google.com/', title: 'You Are Standings in an Open Field (Mount Adams, Washington)', description: labels.rafmanLabel, author: 'Jon Rafman', medium: 'Archival pigment print on Hahnemühle photo rag paper', size: '80 x 107 cm', date: '2019'},
];

export default function Gallery() {
  return (
    <div style={{height: '100%', width: '100%', position: 'relative', zIndex: 20 }}>
      <InfiniteMenu items={items}/>
    </div>
  );
}
