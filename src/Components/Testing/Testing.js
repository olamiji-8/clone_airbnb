import { useState } from 'react';
import './Testing.css'
import '../Categories/Categories.css'
import '../Cards/Cards.css'
import Header from '../Header/Header';




const Testing = () => {

  // the value that holds the category
  const [key, setkey] = useState('');


  // the array of items
  const item = [
    
    {
      id: 6,
      title : "Općina Lastovo, Croatia",
      category: "beach",
      img:"https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/6_beach.webp?alt=media&token=010776d2-2839-4132-84e9-8c2f90d15bc3",
  description : "4,236 kilometers away Sep 1 – 7",
  price:"124 CHF",

},

{
      id: 7,
      title : "Uusikaupunki, Finland",
      category: "beach",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/7_beach.webp?alt=media&token=2dd0e382-868f-4fa3-ba51-0cbbbe185c11",
  description : "6,227 kilometers away Aug 24 – 29",
   price:"226 CHF"
},

{
      id: 8,
      category: "beach",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/8_beach.webp?alt=media&token=cc4e3e59-2dfb-4817-8547-8b7be1d34d58",
  title:"Gildeskål, Norway",
  description : "6,797 kilometers away Jul 24 – 29",
  price:"215 CHF"

},
    {
      id: 13,
      category: "artic",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/4_arctic.webp?alt=media&token=a83fa3cd-d9a2-43dd-a7f9-6ee884b3d87b",
      title: "Vis, Croatia",
      description: "4,262 kilometers away Jul 13 – 19",
      price: "1,520 CHF"
    },
    {
      id: 14,
      category: "artic",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_arctic.webp?alt=media&token=c66aacf3-abc8-4315-8bcb-47ad4bbd161d",
      title: "Angra dos Reis, Brazil",
      description: "6,135 kilometers away Jul 22 – 27",
      price: "681 CHF"


    },
    {
      id: 15,
      category: "artic",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/8_arctic.webp?alt=media&token=174155d7-2dd8-4d84-912f-cf5857164f13",
      title: "Općina Lastovo, Croatia",
      description: "4,236 kilometers away Sep 1 – 7",
      price: "124 CHF"


    },
    {
      id: 22,
      category: "breakfast",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/4_breakfast.webp?alt=media&token=30e9991d-0dc6-4c5c-892b-326c81f71678",
      title: "Vis, Croatia",
      description: "4,262 kilometers away Jul 13 – 19",
      price: "1,520 CHF",
    },
    {
      id: 23,
      category: "breakfast",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_breakfast.webp?alt=media&token=18e4654f-20f2-434b-8573-7c00d7d4620c",
      title: "Angra dos Reis, Brazil",
      description: "6,135 kilometers away Jul 22 – 27",
      price: "681 CHF"

    },
    {
      id: 24,
      category: "breakfast",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_breakfast.webp?alt=media&token=18e4654f-20f2-434b-8573-7c00d7d4620c",
      title: "Općina Lastovo, Croatia",
      description: "4,236 kilometers away Sep 1 – 7",
      price: "124 CHF"


    },
    {
      id: 30,
      category: "caves",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_caves.webp?alt=media&token=cffc6b0a-486e-487a-aefd-b8de06e25e32",
      title : "Murter, Croatia",
      description : "4,323 kilometers away Oct 16 – 23",
      price : "159 CHF"


  },


  {
      id: 31,
      category: "caves",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/4_caves.webp?alt=media&token=e0a56abd-17a6-4693-942b-99d526401d92",
      title : "Vis, Croatia",
      description : "4,262 kilometers away Jul 13 – 19",
  price : "1,520 CHF",
},
{
  id: 32,
  category: "caves",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_caves.webp?alt=media&token=4888dc8b-f5c1-45e0-ba22-d5704fc1640f",
  title : "Angra dos Reis, Brazil",
  description : "6,135 kilometers away Jul 22 – 27",
  price : "681 CHF"

},
{
  id: 37,
  category: "design",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_design.webp?alt=media&token=6d1a6229-49cb-470b-a239-a8ef96413369",
  title : "Badachro, UK",
  decription : "5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 38,
  category: "design",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_design.webp?alt=media&token=380be54f-8c14-41d2-8f17-ad1dd939d4dd",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
  price : "147 CHF"

},
{
  id: 39,
  category: "design",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_design.webp?alt=media&token=31e72e86-f806-4f9b-a62a-91805be5c8bd",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"

},
{
  id: 46,
  category: "home",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_home.webp?alt=media&token=2986293b-74cd-454c-88a7-cb58d9fa3c25",
  title : "Badachro, UK",
  description :"5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 47,
  category: "home",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_home.webp?alt=media&token=dc017ae3-a62d-4ce7-86b3-8ee014ef36a7",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
  price : "147 CHF"

},
{
  id: 48,
  category: "home",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_home.webp?alt=media&token=64036db3-fc84-4855-a07d-1f150a224878",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"


},
{
  id: 55,
  category: "island",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_island.webp?alt=media&token=cfdf72d3-496a-43e8-83c0-f193df1465a6",
  title : "Badachro, UK",
  description : "5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 56,
  category: "island",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_island.webp?alt=media&token=72332d49-1fd7-4e41-8590-4474ee9479b1",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
price : "147 CHF"

},
{
  id: 57,
  category: "island",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_island.webp?alt=media&token=89bc6b45-b970-46af-b4bf-40ccd01a153d",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"


},
{
  id: 64,
  category: "omg",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_omg.webp?alt=media&token=7fa973c2-4134-4ff6-828d-442c60ddd8d7",
  title : "Badachro, UK",
  decription : "5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 65,
  category: "omg",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_omg.webp?alt=media&token=15c9925d-46f9-4a35-9c6e-edd76bbd0221",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
  price : "147 CHF"

},
{
  id: 66,
  category: "omg",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_omg.webp?alt=media&token=da68bc27-10c5-4b21-8156-e4c9f915d81d",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"


},
{
  id: 73,
  category: "parks",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_parks.webp?alt=media&token=a9e53306-07b9-42d0-9594-ba3c4f6b9da1",
  title : "Badachro, UK",
  description : "5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 74,
  category: "parks",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_parks.webp?alt=media&token=f82faa6b-5931-4445-9487-21628c88e31e",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
  price : "147 CHF"

},
{
  id: 75,
  category: "parks",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_parks.webp?alt=media&token=42ac4e59-584c-4952-90e6-55cdbd0de6dc",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"


},
{
  id: 82,
  category: "pools",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_pools.webp?alt=media&token=ba5a0463-7665-48e5-bce1-1bae2ccdd3d7",
  title : "Badachro, UK",
  description : "5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 83,
  category: "pools",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_pools.webp?alt=media&token=07a13134-99c4-4af2-81bd-4321f060ce53",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
  price : "147 CHF"

},
{
  id: 84,
  category: "pools",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_pools.webp?alt=media&token=145c5312-0727-41ef-9102-2f538849ef63",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"


},
{
  id: 91,
  category: "surfing",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_surfing.webp?alt=media&token=095ad81b-3342-42a1-b0c7-8ffa7910c5a6",
  title : "Badachro, UK",
  description : "5,754 kilometers away Nov 12 – 17",
  price : "199 CHF"

},
{
  id: 92,
  category: "surfing",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_surfing.webp?alt=media&token=2bcc512b-3226-4482-a938-93efe6007ee0",
  title : "Sali, Croatia, Croatia",
  description : "4,316 kilometers away Sep 19 – 24",
  price : "147 CHF"

},
{
  id: 93,
  category: "surfing",
      img : "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_surfing.webp?alt=media&token=50e53ff9-22f0-4c2e-b112-51b620182c4c",
  title : "Murter, Croatia",
  description : "4,323 kilometers away Oct 16 – 23",
  price : "159 CHF"


},





  ]
  // the array of items

  // the array of catergory
  

 




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