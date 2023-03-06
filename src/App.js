import './App.css';
import INav from './components/navigation/INav';
import { useState } from 'react';
import MoviesListe from './components/moviesliste/MoviesListe'
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/filter/Filter';
import Add from './components/add/Add'
function App() {
  const [movies,setMovies]=useState([
  {
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/R.b537d33d49a4e202b7f4aa4e42c07c66?rik=fsApJ7aVzlmM6g&pid=ImgRaw&r=0",
    Title :'Prison Break',
    Description :"The Best Serie",
    Rate : 5
  },
  {
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/R.0c6ea5eab1c1fe08bc820f03763782a7?rik=iogcqg6sL4QVwQ&riu=http%3a%2f%2fwww.filmforlife.org%2fwp-content%2fuploads%2f2014%2f09%2fbreaking-bad.png&ehk=nfCUyEt5zSVf6vLj%2fGSMIaSN4Tcq5r5eCJBG3U4L9ag%3d&risl=&pid=ImgRaw&r=0",
    Title :'Breaking Bad',
    Description :"The Best Serie",
    Rate : 5
  },
  {
    
    id : uuidv4(),
    Image :"https://image.tmdb.org/t/p/original/6fzVz6c5hTk7lxUs8cXK1uJaiBx.jpg",
    Title :'Narcos',
    Description :"The Best Serie",
    Rate : 5
  },
  {
    
    id : uuidv4(),
    Image :"https://i0.wp.com/scriiipt.com/wp-content/uploads/2020/11/peaky-blinders.jpg?fit=960%2C504&ssl=1",
    Title :'Peaky Blinders',
    Description :"The Best Serie",
    Rate : 5
  },
  {
    
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/OIP.eleJ0EbMtokiz2MzJp9P8QHaD4?pid=ImgDet&rs=1",
    Title :'The Good Doctor',
    Description :"The Best Serie",
    Rate : 4
  },
  {
    
    id : uuidv4(),
    Image :"https://cdn.shopify.com/s/files/1/0269/4538/8591/articles/ragnar-lothbrok_1200x.png?v=1649934012",
    Title :'Vinking',
    Description :"The Best Serie",
    Rate : 4
  },
  {
    
    id : uuidv4(),
    Image :"https://journaldulam.sd.ac-dijon.fr/wp-content/uploads/sites/99/2021/11/squid-game.jpg",
    Title :'Squide Game ',
    Description :"The Best Serie",
    Rate : 4
  },
  {
    
    id : uuidv4(),
    Image :"https://cdn.psychologytoday.com/sites/default/files/styles/og_image/public/field_blog_entry_teaser_image/2017-06/13-reasons-why-netflix-01-1200x800.jpg?itok=PWVFvcpv",
    Title :'13 Reason Why ',
    Description :"The Best Serie",
    Rate : 4
  },
  {
    
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/R.958631f5c7a441059fab179e59ff87af?rik=Wo2zSKSQ%2fM4Fgg&pid=ImgRaw&r=0",
    Title :'Lucifer ',
    Description :"The Best Serie",
    Rate : 3
  },
  {
    
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/R.17b8b984910d714cf70c574eae942545?rik=tS6Y%2frueiJ1RDA&pid=ImgRaw&r=0",
    Title :'Casa De Papel ',
    Description :"The Best Serie",
    Rate : 3
  },
  {
    
    id : uuidv4(),
    Image :"https://www.tvqc.com/wp-content/uploads/2018/11/Narcos.jpeg",
    Title :'Narcos Mexico ',
    Description :"The Best Serie",
    Rate : 3
  },
  {
    
    id : uuidv4(),
    Image :"https://popculturetimes.com/wp-content/uploads/2020/03/elite.jpg",
    Title :'Elite ',
    Description :"The Best Serie",
    Rate : 3,
    
  }

  
])

  const [search,setSearch]=useState('')
  const [rating,setRating]=useState(1);


  const ToggleSearch =(text)=>{
    setSearch(text)
  
  }
  const rateMov =(num)=>{
    setRating(num)
  }
  const addNewMovie = (newMovie) => {
    setMovies([...movies,newMovie])
  }

  return (
    <div className="App">
      <INav ToggleSearch={ToggleSearch}></INav>
      <Filter rateMov={rateMov} ></Filter>
      <Add addNewMovie={addNewMovie}></Add>
      <MoviesListe movies={movies.filter(e=>e.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && e.Rate>=rating )} ></MoviesListe>
    </div>
  );
}

export default App;