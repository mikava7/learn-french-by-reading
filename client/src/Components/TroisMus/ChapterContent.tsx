// import React, { useEffect, useState } from "react";
// import {
//   ChapterContentContainer,
//   ChapterTitle,
//   ChapterText,
//   UnknownWordsItem,
//   UnknownWordsList,
// } from "../Chapters/Chapter.style";
// import Tooltips from "../Tooltips";
// import Favorite from "../Chapters/Favorite";
// import { newWords } from "./wordTranslation";

// const ChapterContent = ({ chapter }) => {
//   const { title, content, words } = chapter;
//   const [hoveredWord, setHoveredWord] = useState("");

//   const handleWordHover = (word) => {
//     setHoveredWord(word);
//   };

//   const handleWordLeave = () => {
//     setHoveredWord("");
//   };

//   useEffect(() => {
//     setHoveredWord(""); // Reset the hoveredWord when the chapter changes
//   }, [chapter]);

//   const renderChapterText = () => {
//     const wordsArray = content.split(" ");

//     return wordsArray.map((word, index) => {
//       const translation = newWords[word];
//       const isHovered = hoveredWord === word;

//       return (
//         <ChapterText
//           key={index}
//           onMouseEnter={() => handleWordHover(word)}
//           onMouseLeave={handleWordLeave}
//         >
//           {translation && isHovered ? (
//             <Tooltips content={translation}>{word}</Tooltips>
//           ) : (
//             word
//           )}{" "}
//         </ChapterText>
//       );
//     });
//   };

//   return (
//     <ChapterContentContainer>
//       <ChapterTitle>{title}</ChapterTitle>
//       {renderChapterText()}
//       <UnknownWordsList>
//         {words.map((word) => (
//           <UnknownWordsItem key={word._id}>
//             <li>word{word.word}</li>
//             <li>definition{word.definition}</li>
//             <li>translation{word.translation}</li>
//             <Favorite />
//           </UnknownWordsItem>
//         ))}
//       </UnknownWordsList>
//     </ChapterContentContainer>
//   );
// };

// export default ChapterContent;
