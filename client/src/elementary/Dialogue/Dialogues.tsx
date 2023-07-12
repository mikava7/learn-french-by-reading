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

const Dialogues = ({ nextButton, score, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const dialogueRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const dialogue = elementaryData[0].dialogue;
  const audioList = [
    jaimeAudio1,
    claireAudio1,
    jaimeAudio2,
    claireAudio2,
    jaimeAudio3,
    claireAudio3,
  ];

  const handlePlayAudio = () => {
    const audioFile = audioList[currentAudioIndex];
    const buttonAudio = new Audio(audioFile);
    buttonAudio.play();
    setCurrentAudioIndex(currentAudioIndex + 1);
  };

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

  const isLastMessage = currentIndex >= dialogue.length;

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
              speaker={phrase.speaker}
            >
              {phrase.speaker === "jamie" ? (
                <JaimeMessage>
                  <SpeakerImage src={Jaime} alt="Jaime" />
                  <MessageContent>
                    <MessageText>{phrase.message}</MessageText>
                    <Translation>{phrase.translation}</Translation>
                  </MessageContent>
                </JaimeMessage>
              ) : (
                <ClaireMessage>
                  <MessageContent>
                    <MessageText>{phrase.message}</MessageText>
                    <Translation>{phrase.translation}</Translation>
                  </MessageContent>
                  <SpeakerImage src={Claire} alt="Claire" />
                </ClaireMessage>
              )}
            </MessageContainer>
          );
        })}
      </ul>
      <Continue>Continue</Continue>{" "}
      <DialogueExercise setScore={setScore} score={score} />
    </DialogueSection>
  );
};

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.speaker === "jamie" ? "flex-start" : "flex-end"};
  align-items: center;
`;

const DialogueSection = styled.section`
  display: flex;
  width: 100vw;

  justify-content: space-between; /* Add this */
  min-height: 80vh; /* Change height to min-height */
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  border: 2px solid grey;
  border-bottom: none;
  background-color: white;
`;

const JaimeMessage = styled.li`
  display: flex;
  background-color: #3e3efa;
  color: white;
  padding: 1rem;
  border-radius: 30px 0 25px 0;
  align-items: center;
  margin-bottom: 1rem;
`;

const ClaireMessage = styled.li`
  display: flex;
  color: white;
  background-color: #4daffa;
  padding: 1rem;
  margin-bottom: 1rem;

  border-radius: 0 30px 0 25px;
  margin-right: 3rem;
  align-items: center;
  justify-content: flex-end;
`;

const SpeakerImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Translation = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;
export const Continue = styled.span`
  background-color: #70ff41;
  color: black;
  width: 20rem;
  font-weight: bold;

  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;

export default Dialogues;
