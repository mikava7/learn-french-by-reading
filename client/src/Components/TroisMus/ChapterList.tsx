import React from "react";
import { ChapterListContainer, ChapterItem } from "../Chapters/Chapter.style";

// Define the shape of a chapter object
interface Chapter {
  chapter: number;
  title: string;
}

// Define the prop types for the ChapterList component
interface ChapterListProps {
  chapters: Chapter[];
  setSelectedChapter: (index: number) => void;
  selectedChapter: number;
}

// ChapterList component
const ChapterList: React.FC<ChapterListProps> = ({
  chapters,
  setSelectedChapter,
  selectedChapter,
}) => {
  // Click handler for chapter items
  const handleChapterClick = (chapterIndex: number) => {
    setSelectedChapter(chapterIndex);
  };

  return (
    <ChapterListContainer>
      {/* Map over the chapters array and render each chapter item */}
      {chapters.map((chapter, index) => (
        <ChapterItem
          // Set the 'selected' prop based on the equality check between the selectedChapter and the current index
          selected={selectedChapter === index}
          key={index}
          onClick={() => handleChapterClick(index)}
        >
          Chapter {chapter.chapter} - {chapter.title}
        </ChapterItem>
      ))}
    </ChapterListContainer>
  );
};

export default ChapterList;
