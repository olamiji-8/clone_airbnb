import { useState } from 'react';
import './Testing.css'
import '../Categories/Categories.css'
import '../Cards/Cards.css'
import Header from '../Header/Header';
import {item} from '../Data/Data'


const Testing = () => {

  // the value that holds the category
  const [key, setkey] = useState('');

  const allcategory = [
    { name: 'All',time:'', key: '', image: "./assest/images/11.jpg" },
    { name: 'island', key: 'island', image: "./assest/images/1.jpg" },
    { name: 'parks', key: 'parks', image: "./assest/images/2.jpg" },
    { name: 'pools', key: 'pools', image: "./assest/images/3.jpg" },
    { name: 'omg', key: 'omg', image: "./assest/images/4.jpg" },
    { name: 'beach', key: 'beach', image: "./assest/images/5.jpg" },
    { name: 'home', key: 'home', image: "./assest/images/6.jpg" },
    { name: 'design', key: 'design', image: "./assest/images/7.jpg" },
    { name: 'artic', key: 'artic', image: "./assest/images/8.jpg" },
    { name: 'caves', key: 'caves', image: "./assest/images/9.jpg" },
    { name: 'breakfast', key: 'breakfast', image: "./assest/images/10.jpg" },
    { name: 'surfing', key: 'surfing', image: "./assest/images/11.jpg" },
    
  ]

  // the array of catergory

  // the function to set the filter key
  function filter(key) {
    setkey(key)
  }
  // the function to set the filter key

  // The filtering and mapping of items
  const filtered = item.filter((x) => x.category
    .includes(key.toLowerCase()))
    .map(
      ({ id, category, img, price, title, description }, i) => {
        return (
          <div className='Cards'>
            <img src={img} alt='' />
            <div>
              <h2>{title}</h2>
              <h4>  Category: {category}</h4>
              <h4>{description}</h4>
              <h3>{price}</h3>
            </div>
          </div>)
      }
    )
  // The filtering and mapping of items

  // The mapping of category of each access

  const category = allcategory.map(({ name,image, key }, i) => {
    return (
      
      <button onClick={() => filter(key)}>
      <img src={image} alt='' className=''/>
      <p>{name}</p>
      </button>
      
    )
  })

  // The mapping of category of each access
console.log(filtered)

  return (
    <>

    <Header setkey={setkey}/>
      {/* All the Category */}

      <div className="testing">
        
        <div className="Categories">
          {category}
        </div>

        {/* All the Category */}
        {/* All the Category */}


        {/* All the Items */}
        <div className="row">
          {filtered}
        </div>
        {/* {result} */}

      </div>

      {/* All the Items */}




    </>
  );
}

export default Testing;