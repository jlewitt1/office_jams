import React, { Component } from 'react';
import PlaylistItem from './PlaylistItem';

const PlaylistHolder = (props) => { 
    const songItems = props.songs.map((song)=> { 
         return (
         <PlaylistItem  //give each item a key so can update the element without needing to re-render the whole list 
             key = {song.etag}
             song = {song} /> 
         );
     });
     return (
         <ul className = "col-md-12 list-group" >
             {songItems}
         </ul>
     );
 }; 
 
 export default PlaylistHolder;