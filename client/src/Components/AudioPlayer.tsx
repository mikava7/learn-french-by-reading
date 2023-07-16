import React, { useEffect } from "react";
import axios from "axios";
const AudioPlayer = () => {
  const [audioData, setAudioData] = React.useState([]);

  useEffect(() => {
    fetchAudio();
  }, []);

  const fetchAudio = () => {
    // Fetch the list of audio files from the folder in S3
    const audioFolderUrl =
      "https://francophoenix.s3.eu-north-1.amazonaws.com/audio/Cest-exemples-1.mp3";
    // Make an API call or use a library like axios to fetch the list of audio files
    // and set them in the audioData state
    // Example using axios:
    axios
      .get(audioFolderUrl)
      .then((response) => {
        const audioFiles = response.data; // Assuming the API response contains the list of audio files
        setAudioData(audioFiles);
      })
      .catch((error) => {
        console.error("Error fetching audio files:", error);
      });
  };
  const audioFolderUrl =
    "https://francophoenix.s3.eu-north-1.amazonaws.com/audio/Cest-exemples-1.mp3";

  const playSound = () => {
    const audio = new Audio(audioFolderUrl);
    audio.play();
  };

  return (
    <div>
      <button onClick={() => playSound()}>Play Audio</button>
      {/* {audioData.map((audioUrl, index) => (
        <button key={index} onClick={() => playSound(audioUrl)}>
          Play Audio {index + 1}
        </button>
      ))} */}
    </div>
  );
};

export default AudioPlayer;
