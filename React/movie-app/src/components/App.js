
import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {

  componentDidMount(){
    // make api call to add movies to store
    //dipatch call
    console.log("CDM");
    const { store }=this.props;
    store.subscribe(()=>{
       console.log("UPDATED" ,this.props.store.getState());
       this.forceUpdate(); // always try to not use this function
    })
    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState());
  }
  render(){
    console.log("render");
  const {list}=this.props.store.getState();//now get the object
  return (
    <div className="App">
     <Navbar/>
     <div className="main">
       <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
       </div>

       <div className="list">
         {list.map((movie,index)=>(
           <MovieCard movie={movie} key={`movies-${index}`}/> //passing as the props
         ))}
         {/* //key is passed just to remove warning */}
       </div>
     </div>
    </div>
  );
  }
}

export default App;
