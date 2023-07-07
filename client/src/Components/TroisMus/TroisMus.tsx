import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChapterContainer,
  ChapterListContainer,
  ChapterItem,
  ContentContainer,
  ChapterContentContainer,
  ChapterTitle,
  ChapterText,
  UnknownWordsItem,
  UnknownWordsList,
} from "../../Styles/globalStyles";
import Words from "../Words/Words";
import Favorite from "../Chapters/Favorite";
import Tooltips from "../Tooltips";
import { newWords } from "./wordTranslation";
import { fetchChaptersData } from "../../redux/slices/chaptersSlice";
import ChapterList from "./ChapterList";

const TroisMus = () => {
  const [selectedChapter, setSelectedChapter] = useState(0); // State to keep track of the selected chapter index
  const [hoveredWord, setHoveredWord] = useState(""); // State to keep track of the hovered word
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.chapters.chapters || []); // Access the chapters data from the Redux store

  console.log(chapters);
  const loading = useSelector((state) => state.chapters.loading); // Loading state from Redux store
  const error = useSelector((state) => state.chapters.error); // Error state from Redux store
  console.log({ loading, error, chapters });
  useEffect(() => {
    // Fetch chapters data when the component mounts
    dispatch(fetchChaptersData());
  }, [dispatch]);

  const handleWordHover = (word) => {
    // Event handler when a word is hovered
    setHoveredWord(word);
  };

  const handleWordLeave = () => {
    // Event handler when the word hover is left
    setHoveredWord("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderChapterText = () => {
    if (!chapters || chapters.length === 0) {
      // Check if chapters data is available
      return null;
    }

    const words = chapters[selectedChapter].content.split(" "); // Split the content into individual words
    return words.map((word, index) => {
      const translation = newWords[word]; // Get the translation for the word from the `newWords` object
      const isHovered = hoveredWord === word; // Check if the word is currently being hovered

      return (
        <ChapterText
          key={index}
          onMouseEnter={() => handleWordHover(word)}
          onMouseLeave={handleWordLeave}
        >
          {translation && isHovered ? ( // Display the tooltip if the translation exists and the word is hovered
            <Tooltips content={translation}>{word}</Tooltips>
          ) : (
            word // Display the word as is
          )}{" "}
        </ChapterText>
      );
    });
  };

  return (
    <ChapterContainer>
      <ChapterListContainer>
        <ChapterList
          chapters={chapters}
          setSelectedChapter={setSelectedChapter} // Pass the function to set the selected chapter index
          selectedChapter={selectedChapter} // Pass the selected chapter index
        />
      </ChapterListContainer>

      <ContentContainer>
        {loading ? (
          <div>Loading...</div>
        ) : (
          chapters.length > 0 && (
            <ChapterContentContainer>
              <ChapterTitle>{chapters[selectedChapter].title}</ChapterTitle>
              {renderChapterText()}
              <UnknownWordsList>
                {chapters[selectedChapter].words.map((word) => (
                  <UnknownWordsItem key={word._id}>
                    <li>{word.word}</li>
                    <li>{word.definition}</li>

                    <Favorite />
                  </UnknownWordsItem>
                ))}
              </UnknownWordsList>
            </ChapterContentContainer>
          )
        )}
      </ContentContainer>
    </ChapterContainer>
  );
};

export default TroisMus;
