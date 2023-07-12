import React, { useState, useEffect, useRef } from "react";
import GrammerTooltip from "./GrammerTooltip";
import { useSelector, useDispatch } from "react-redux";
import { fetchDialoguesForLesson } from "../../../../redux/slices/courseSlice";
import Loading from "../../../Loading/Loading";
import {
  DialogueContainer,
  ScrollToBox,
  BoxContainer,
} from "./style-GrammerWithDialogue";

const GrammerWithDialogue = ({ lessonsCurrentIndex, nextButton }) => {
  console.log("lessonsCurrentIndex", lessonsCurrentIndex);
  const dispatch = useDispatch();
  const [currentlessonsCurrentIndex, setCurrentlessonsCurrentIndex] =
    useState(1);

  const [chapterComplete, setChapterComplete] = useState(false);
  const { content, title } =
    useSelector((state) => state.dialogue.dialogue) || [];
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error) || null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogueRef = useRef(null);
  const scrollToBoxRef = useRef(null);

  useEffect(() => {
    dispatch(fetchDialoguesForLesson(lessonsCurrentIndex));
    setCurrentIndex(0); // Reset currentIndex when lessonsCurrentIndex changes
    setChapterComplete(false); // Reset chapterComplete when lessonsCurrentIndex changes
  }, [lessonsCurrentIndex]);

  useEffect(() => {
    const container = dialogueRef.current;

    if (container && container.scrollHeight > 600) {
      container.scrollTo({
        top: container.scrollTop + 100,
        behavior: "smooth",
      });
    }

    if (scrollToBoxRef.current) {
      scrollToBoxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentIndex]);

  const handleNextPhrase = () => {
    if (currentIndex < content.length - 5) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex);
      setChapterComplete(true);
      setCurrentlessonsCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  console.log("lessonsCurrentIndex", lessonsCurrentIndex);
  console.log("currentlessonsCurrentIndex", currentlessonsCurrentIndex);

  return (
    <DialogueContainer>
      <BoxContainer onClick={handleNextPhrase} ref={dialogueRef}>
        {isLoading && <Loading />}
        {error && <p>error</p>}

        <h2>{title}</h2>
        {currentlessonsCurrentIndex == lessonsCurrentIndex &&
          content &&
          content
            .slice(0, currentIndex + 5)
            .map((phrase, index) => (
              <GrammerTooltip
                key={index}
                text={`${phrase.speaker}: ${phrase.phrase}`}
                translation={phrase.translation}
              />
            ))}
        {chapterComplete && nextButton}
        <ScrollToBox ref={scrollToBoxRef}></ScrollToBox>
      </BoxContainer>
    </DialogueContainer>
  );
};

export default GrammerWithDialogue;
