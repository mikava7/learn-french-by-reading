import React, { useEffect, useState } from "react";
import axios from "axios";
import star from "../../assets/starFilled.png";
import Favorite from "../Chapters/Favorite";
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
} from "../Chapters/Chapter.style";
const TroisMus = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5500/books");
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStarClick = (wordId) => {
    setContent((prevContent) => {
      const updatedContent = [...prevContent];

      for (const book of updatedContent) {
        for (const chapter of book.chapters) {
          for (const word of chapter.unknownWords) {
            if (word.id === wordId) {
              word.favorite = !word.favorite;
              break;
            }
          }
        }
      }

      return updatedContent;
    });
  };

  return (
    <Container>
      {content.map((book) => (
        <ContentContainer key={book._id}>
          <ChapterTitle>{book.chapters[0]?.title}</ChapterTitle>
          <ChapterText>{book.chapters[0]?.content}</ChapterText>
          <UnknownWordsList>
            {book.chapters[0]?.unknownWords.map((word) => (
              <UnknownWordsItem key={word.id}>
                <span>{word.word} </span>
                <span>{word.definition}</span>
                <span>{word.translation}</span>
                <IconsContainer>
                  <Favorite />
                </IconsContainer>
              </UnknownWordsItem>
            ))}
          </UnknownWordsList>
        </ContentContainer>
      ))}
    </Container>
  );
};

export default TroisMus;
