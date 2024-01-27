import React from 'react';
import { Podcast } from 'podcast';
import podcastsData from '../../data/podcast_data.json';


const Podcast = () => {
    return (
      <div>
        {podcastsData.map((podcast) => (
          <div key={podcast.id}>
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <audio controls>
              {/* <source src={podcast.audioUrl} type="audio/mpeg" /> */}
              <source src="https://file-examples.com/storage/fed61549c865b2b5c9768b5/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    )
  };
  export default Podcast;
  

    <figure>
        <figcaption>Listen to the T-Rex:</figcaption>
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>
        <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
    </figure>
