import React, { useState, useEffect } from "react";
import axios from "axios";

const Words = () => {
  const [words, setWords] = useState([]);
  console.log("words", words);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    try {
      const response = await axios.get("http://localhost:5500/words");
      setWords(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {words.map((chapter, index) => (
        <div key={chapter._id}>
          <h2>Chapter {chapter.chapter}</h2>
          {chapter.words.map((word) => (
            <div key={word.id}>
              <p>Word: {word.word}</p>
              <p>Definition: {word.definition}</p>
              <p>Translation: {word.translation}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Words;
