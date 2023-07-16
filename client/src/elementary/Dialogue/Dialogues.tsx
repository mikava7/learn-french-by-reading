import React, { useState, useEffect, useRef } from "react";
import { elementaryData } from "../elementary";
import styled from "styled-components";
import DialogueExercise from "./DialogueExercise";
import Jaime from "../../assets/jm.jpeg";
import Claire from "../../assets/clairefraser.webp";
import jaimeAudio1 from "../../audio/drive-download-20230711T213315Z-001/bonjor je mappelle jaime.mp3";
import jaimeAudio2 from "../../audio/drive-download-20230711T213315Z-001/et toi tu tappelle commonen jaime.mp3";
import jaimeAudio3 from "../../audio/drive-download-20230711T213315Z-001/enchante claire jaime.mp3";
import claireAudio1 from "../../audio/drive-download-20230711T213315Z-001/bonjour jaime claire.mp3";
import claireAudio2 from "../../audio/drive-download-20230711T213315Z-001/je mappelle Claire claire.mp3";
import claireAudio3 from "../../audio/drive-download-20230711T213315Z-001/encante Claire.mp3";
import {
  DialogueSection,
  MessageContainer,
  JaimeMessage,
  ClaireMessage,
  SpeakerImage,
  MessageContent,
  MessageText,
  ContinueButtonWrapper,
  TranslationText,
} from "../style-elementaryComponant";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDialoguesForLesson,
  fetchAudioFiles,
} from "../../redux/slices/elementary/dialogueSlice";

const Dialogues = ({ Continue, lessonsCurrentIndex }) => {
  const dispatch = useDispatch();
  const dialogue = useSelector((state) => state.dialogues.dialogues) || [];
  const audioFiles = useSelector((state) => state.dialogues.audioFiles) || [];
  console.log("audioFiles", audioFiles);
  console.log("dialogue", dialogue);
  const s3BucketUrl =
    "https://francophonixaudio.s3.eu-north-1.amazonaws.com/Audio-20230715T065055Z-001/";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const dialogueRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const audioLists = audioFiles.map((audioFile) => audioFile);
  console.log("audioListsssssssss", audioLists);

  const handlePlayAudio = () => {
    const audioFileName = audioLists[currentAudioIndex];
    const audioFileUrl = `${s3BucketUrl}${audioFileName}`;
    const buttonAudio = new Audio(audioFileUrl);
    buttonAudio.play();
    setCurrentAudioIndex(currentAudioIndex + 1);
  };
  useEffect(() => {
    handlePlayAudio(s3BucketUrl);
  }, []);
  const playSound = (index) => {
    if (!isDisabled) {
      setIsDisabled(true);

      const audio = new Audio(audioList[index]);
      audio.play();

      audio.addEventListener("ended", () => {
        setTimeout(() => {
          setIsDisabled(false);
        }, 2000);
      });
    }
  };
  useEffect(() => {
    dispatch(fetchDialoguesForLesson(lessonsCurrentIndex));
    dispatch(fetchAudioFiles());
  }, []);

  useEffect(() => {
    handlePlayAudio();
  }, []);

  useEffect(() => {
    let timeout;

    if (isDisabled) {
      timeout = setTimeout(() => {
        setIsDisabled(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isDisabled]);

  const handleNextPhrase = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleMessage = () => {
    handleNextPhrase();
    handlePlayAudio();
  };

  const isLastMessage = currentIndex >= dialogue.length - 1;

  return (
    <DialogueSection onClick={handleMessage} ref={dialogueRef}>
      <ul>
        {dialogue.slice(0, currentIndex + 1).map((phrase, index) => {
          return (
            <MessageContainer
              onClick={
                isLastMessage && !isDisabled
                  ? () => playSound(index)
                  : undefined
              }
              key={index}
              index={index}
            >
              {index % 2 === 0 ? (
                <JaimeMessage>
                  <SpeakerImage src={Jaime} alt="Jaime" />
                  <MessageContent>
                    <MessageText>{phrase.message}</MessageText>
                    <TranslationText>{phrase.translation}</TranslationText>
                  </MessageContent>
                </JaimeMessage>
              ) : (
                <ClaireMessage>
                  <MessageContent>
                    <MessageText>{phrase.message}</MessageText>
                    <TranslationText>{phrase.translation}</TranslationText>
                  </MessageContent>
                  <SpeakerImage src={Claire} alt="Claire" />
                </ClaireMessage>
              )}
            </MessageContainer>
          );
        })}
      </ul>
      <ContinueButtonWrapper>{isLastMessage && Continue}</ContinueButtonWrapper>
    </DialogueSection>
  );
};

export default Dialogues;
