import React, { Component } from 'react';

const PlaylistItem = ({song}) => { 

    const songId = song.id.videoId;
    const url = `https://www.youtube.com/embed/${songId}`;

    return( 
        <li className="list-group-item">
            <tr style="border:1px solid black">
                <td>
                    <div className="trackName">{song.snippet.title}</div>
                </td>
                <td>
                    <div className="artistName">{song.contentDetails.duration}</div>
                </td>
            </tr>
        </li>
    );
};

export default PlaylistItem;