import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const UserProgress: React.FC = () => {
  // Progress data for each grade (values between 0 to 100)
  const gradesProgress = {
    Kindergarten: 70,
    "Grade 1": 85,
    "Grade 2": 50,
    "Grade 3": 90,
    "Grade 4": 40,
    "Grade 5": 75,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Progress</Text>
      {Object.keys(gradesProgress).map((grade, index) => (
        <View key={index} style={styles.gradeSection}>
          <Text style={styles.gradeHeader}>{grade}</Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${gradesProgress[grade]}%` }, 
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {gradesProgress[grade]}% Complete
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#483d8b",
    textAlign: "center",
    marginBottom: 20,
  },
  gradeSection: {
    backgroundColor: "#e6e6fa",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  gradeHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#483d8b",
    borderRadius: 10,
  },
  progressText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
});

export default UserProgress;
