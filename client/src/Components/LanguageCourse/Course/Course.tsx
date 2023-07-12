import { useState } from "react";
import styled from "styled-components";
import VerbConjugation from "../lesson/VerbConjugation/VerbConjugation";
import SentenceBasedExercise from "../lesson/SentenceBasedExercise/Sentence-based-exercise";
import GrammerWithDialogue from "../lesson/GrammerWithDialogue/GrammerWithDialogue";
import DialogueeExercise from "../lesson/DialogueeExercise/DialogueeExercise";
import Vocabulary from "../lesson/Vocabulary/Voacbulary";
import Dialogues from "../../../elementary/Dialogue/Dialogues";
const getInitialComponent = () => {
  // Logic to determine the initial component based on completed components or any other criteria
  return null;
};

const Course = () => {
  const [lessonsCurrentIndex, setLessonsCurrentIndex] = useState(1);
  const [completedComponents, setCompletedComponents] = useState([]);
  const [currentComponent, setCurrentComponent] = useState(() => {
    const initialComponent = getInitialComponent();
    return initialComponent ? initialComponent : 0;
  });

  const handleNext = () => {
    setCompletedComponents([...completedComponents, currentComponent]);
    setCurrentComponent((prevComponent) => prevComponent + 1);
  };

  const components = [
    {
      component: (
        <GrammerWithDialogue
          key={0}
          nextButton={<NextButton onClick={handleNext}>Next</NextButton>}
        />
      ),
      completed: completedComponents.includes(0),
    },
    {
      component: (
        <Vocabulary
          lessonsCurrentIndex={lessonsCurrentIndex}
          key={1}
          nextButton={<NextButton onClick={handleNext}>Next</NextButton>}
        />
      ),
      completed: completedComponents.includes(1),
    },
    {
      component: (
        <VerbConjugation
          key={2}
          nextButton={<NextButton onClick={handleNext}>Next</NextButton>}
        />
      ),
      completed: completedComponents.includes(2),
    },
    {
      component: (
        <SentenceBasedExercise
          key={3}
          nextButton={<NextButton onClick={handleNext}>Next</NextButton>}
        />
      ),
      completed: completedComponents.includes(3),
    },
    {
      component: (
        <GrammerWithDialogue
          key={4}
          lessonsCurrentIndex={lessonsCurrentIndex}
          nextButton={<NextButton onClick={handleNext}>Next</NextButton>}
        />
      ),
      completed: completedComponents.includes(4),
    },
  ];

  const handleLessonCompletion = () => {
    setLessonsCurrentIndex((prevIndex) => prevIndex + 1);
    setCompletedComponents([]);
    setCurrentComponent(getInitialComponent() || 0);
  };

  return (
    <div>
      {components.map(({ component, completed }, index) => (
        <div key={index}>{completed ? component : null}</div>
      ))}
      {components[currentComponent].component}
      {currentComponent === components.length - 1 ? (
        <button onClick={handleLessonCompletion}>Finish Lesson</button>
      ) : null}
    </div>
  );
};
const NextButton = styled.button`
  width: 18rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  background-color: #d3f125;
  margin: 0 auto;
  cursor: pointer;
`;
export default Course;
