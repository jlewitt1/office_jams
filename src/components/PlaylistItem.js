import React, { Component } from 'react';

const PlaylistItem = ({song}) => { 

    return( 
        <li className="list-group-item">
            <tr>
                <td>
                    <div className="trackName">{video.snippet.title}</div>
                </td>
                <td>
                    <div className="artistName">{video.contentDetails.duration}</div>
                </td>
            </tr>
        </li>
    );
};

export default PlaylistItem;