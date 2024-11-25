import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import YouTubeIframe from "react-native-youtube-iframe";

// Define valid question keys
type QuestionKey = "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7";

// Define correct answers as a record of question keys to answers
const correctAnswers: Record<QuestionKey, string> = {
  q1: "144",
  q2: "4611",
  q3: "2080",
  q4: "165",
  q5: "4050",
  q6: "510",
  q7: "276",
};

// Define the selected answers state type
type SelectedAnswers = Record<QuestionKey, string | null>;

const ThirdGradeLesson1: React.FC = () => {
  const router = useRouter();

  // State for selected answers and feedback
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
  });
  const [submitted, setSubmitted] = useState(false);

  // Questions and options
  const questions = [
    {
      key: "q1",
      text: "Do the Multiplication: 12 * 12",
      options: ["2", "144", "101", "24"],
    },
    {
      key: "q2",
      text: "Do the Multiplication: 53 * 87",
      options: ["7300", "500", "4611", "33"],
    },
    {
      key: "q3",
      text: "Do the Multiplication: 65 * 32",
      options: ["41", "2080", "51", "8"],
    },
    {
      key: "q4",
      text: "Do the Multiplication: 11 * 15",
      options: ["580", "218", "165", "88"],
    },
    {
      key: "q5",
      text: "Do the Multiplication: 45 * 90",
      options: ["130", "510", "4050", "109"],
    },
    {
      key: "q6",
      text: "Do the Multiplication: 34 * 15",
      options: ["990", "510", "000", "632"],
    },
    {
      key: "q7",
      text: "Do the Multiplication: 23 * 12",
      options: ["276", "701", "510", "301"],
    },
  ];

  // Function to handle option selection
  const handleOptionSelect = (questionKey: QuestionKey, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionKey]: option }));
  };

  // Function to handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.logo}
      />

      {/* Title Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Lesson 1: Multiplication</Text>
        <Text style={styles.description}>
          In this lesson, we will discuss multiplication of two-digit numbers.
          After you have finished the video below, enjoy practicing with the new
          skills you have achieved today. Go Magicians!
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Watch the Video</Text>
        <View style={styles.video}>
          <YouTubeIframe height={200} videoId="PZjIT9CH6bM" />
        </View>
      </View>

      {/* Practice Problems Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Practice Problems</Text>
        {questions.map((question) => (
          <View key={question.key} style={styles.problemContainer}>
            <Text style={styles.problemText}>{question.text}</Text>
            {question.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedAnswers[question.key] === option &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  handleOptionSelect(question.key as QuestionKey, option)
                }
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            {submitted && (
              <Text
                style={[
                  styles.feedbackText,
                  selectedAnswers[question.key as QuestionKey] ===
                  correctAnswers[question.key as QuestionKey]
                    ? styles.correct
                    : styles.wrong,
                ]}
              >
                {selectedAnswers[question.key as QuestionKey] ===
                correctAnswers[question.key as QuestionKey]
                  ? "Correct!"
                  : `Wrong! The correct answer is ${
                      correctAnswers[question.key as QuestionKey]
                    }.`}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Submit Button */}
      <View style={styles.quizSection}>
        <TouchableOpacity style={styles.quizButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Answers</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation to Graded Quiz */}
      <View style={styles.quizSection}>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => router.push("/ThirdGrade/ThirdGradeQuiz1")}
        >
          <Text style={styles.buttonText}>Go to Graded Quiz</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  sectionContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  problemContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    alignItems: "center",
  },
  problemText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  optionButton: {
    width: "90%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#483d8b",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#dcdcdc",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  feedbackText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  correct: {
    color: "green",
  },
  wrong: {
    color: "red",
  },
  quizSection: {
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
  },
  quizButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#483d8b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ThirdGradeLesson1;
