import React, { useState } from "react";
import styled from "styled-components";
import { Chapter, Book, ChaptersProps } from "./bookTypes.ts";
import {
  Container,
  ChapterList,
  ChapterItem,
  ContentContainer,
  ChapterContent,
  ChapterTitle,
  ChapterText,
  UnknownWordsList,
  UnknownWordsItem,
  IconsContainer,
} from "../../Styles/globalStyles.ts";
import Tooltips from "../Tooltips";
import Favorite from "./Favorite.tsx";
import Listen from "./Listen.tsx";

const Chapters: React.FC<ChaptersProps> = ({ troisMous }) => {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [hoveredWord, setHoveredWord] = useState("");
  const [isStarred, setStarred] = useState(false);
  const handleStarClick = () => {
    setStarred(!isStarred);
    console.log("clicked");
  };

  const [book] = troisMous;
  const { chapters } = book;
  console.log("chapters", chapters);
  const newWords = {
    I: "Je",
    love: "aime",
    learning: "apprendre",
    languages: "les langues",
    language: "la langue",
    premier: "premier",
    cinq: "ssss",
  };

  const handleChapterClick = (chapterIndex: number) => {
    setSelectedChapter(chapterIndex);
  };

  const handleWordHover = (word: string) => {
    setHoveredWord(word);
  };

  const handleWordLeave = () => {
    setHoveredWord("");
  };

  const renderChapterText = () => {
    if (!chapters || chapters.length === 0) {
      return null;
    }

    const words = chapters[selectedChapter].content.split(" ");
    return words.map((word, index) => {
      const translation = newWords[word];
      const isHovered = hoveredWord === word;
      return (
        <ChapterText
          key={index}
          onMouseEnter={() => handleWordHover(word)}
          onMouseLeave={handleWordLeave}
        >
          {translation && isHovered ? (
            <Tooltips content={translation}>{word}</Tooltips>
          ) : (
            word
          )}{" "}
        </ChapterText>
      );
    });
  };

  // return (
  //   <Container>
  //     <ChapterList>
  //       {chapters &&
  //         chapters.map((chapter, index) => (
  //           <ChapterItem
  //             key={index}
  //             onClick={() => handleChapterClick(index)}
  //             selected={selectedChapter === index}
  //           >
  //             Chapter {chapter.chapter}
  //           </ChapterItem>
  //         ))}
  //     </ChapterList>
  //     <ContentContainer>
  //       {chapters && (
  //         <ChapterContent>
  //           <ChapterTitle>{chapters[selectedChapter].title}</ChapterTitle>
  //           {renderChapterText()}
  //           <UnknownWordsList>
  //             {chapters[selectedChapter].unknownWords.map((wordObj) => (
  //               <UnknownWordsItem key={wordObj.id}>
  //                 <span>{wordObj.word} </span>

  //                 <span>{wordObj.definition}</span>
  //                 <IconsContainer>
  //                   <Favorite />
  //                   <Listen />
  //                 </IconsContainer>
  //                 {/* <img src={star} alt="star" onClick={handleStarClick} /> */}
  //               </UnknownWordsItem>
  //             ))}
  //           </UnknownWordsList>
  //         </ChapterContent>
  //       )}
  //     </ContentContainer>
  //   </Container>
  // );
};

export default Chapters;
