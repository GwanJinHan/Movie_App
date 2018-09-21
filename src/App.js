import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title: "Matrix",
    poster: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=304&h=450"
  },
  {
    title:"Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title:"Oldboy",
    poster: "http://cfs2.tistory.com/upload_control/download.blog?fhandle=YmxvZzU1NDI5QGZzMi50aXN0b3J5LmNvbTovYXR0YWNoLzAvMTIwMDAwMDAwMDAwLmpwZw%3D%3D"
  },
  {
    title:"Star Wars",
    poster: "https://ae01.alicdn.com/kf/HTB1yIBiIpmWBuNjSspdq6zugXXau/DIY-frame-Star-Wars-Episode-I-The-Phantom-Menace-Movie-Posters-print-fabric-Silk-Print-art.jpg_640x640.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
