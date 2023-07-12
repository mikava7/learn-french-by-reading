import CourseDataSchema from "../modules/Course.js";

// Fetch dialogues for a specific lesson
export const getDialogueForLesson = async (req, res) => {
  const { lessonNumber } = req.params; // Extract the lesson number from the request params

  try {
    const course = await CourseDataSchema.findOne({
      lesson: lessonNumber,
    }); // Find the course that matches the lesson number
    const dialogue = course.dialogue;

    if (!dialogue) {
      // Handle the case when dialogue is null
      return res.status(404).json({ error: "Dialogue not found" });
    }
    if (!course) {
      // If the course is not found, return a 404 error
      return res.status(404).json({ error: "Lesson not found" });
    }

    res.status(200).json(dialogue); // Return the dialogue in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllVocabulary = async (req, res) => {
  const { lessonNumber } = req.params;
  try {
    const course = await CourseDataSchema.findOne({
      lesson: parseInt(lessonNumber),
    });
    if (!course) {
      // If the course is not found, return a 404 error
      return res.status(404).json({ error: "Lesson not found" });
    }
    const vocabulary = course.vocabulary;
    if (!vocabulary) {
      // If the course is not found, return a 404 error
      return res
        .status(404)
        .json({ error: "Vocabulary not found for this lesson" });
    }
    res.status(200).json(vocabulary);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVerbConjugation = async (req, res) => {
  const { lessonNumber } = req.params;
  try {
    const course = await CourseDataSchema.findOne({
      lesson: parseInt(lessonNumber),
    });
    if (!course) {
      // If the course is not found, return a 404 error
      return res.status(404).json({ error: "Lesson not found" });
    }
    const verbsConjugations = course.verbsConjugations;
    if (!verbsConjugations) {
      // If the course is not found, return a 404 error
      return res
        .status(404)
        .json({ error: "verbs Conjugations not found for this lesson" });
    }
    res.status(200).json(verbsConjugations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVerbExercise = async (req, res) => {
  const { lessonNumber } = req.params;
  try {
    const course = await CourseDataSchema.findOne({
      lesson: parseInt(lessonNumber),
    });
    if (!course) {
      // If the course is not found, return a 404 error
      return res.status(404).json({ error: "Lesson not found" });
    }
    const verbExercise = course.verbExercise;
    if (!verbExercise) {
      // If the course is not found, return a 404 error
      return res
        .status(404)
        .json({ error: "verbs verbs Exercise not found for this lesson" });
    }
    res.status(200).json(verbExercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
