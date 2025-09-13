import { QuizResult, AIFeedback } from '@/types/quiz';

export const generateAIFeedback = (result: QuizResult): AIFeedback => {
  const { score, totalQuestions, categoryScores, totalTimeSpent } = result;
  const percentage = (score / totalQuestions) * 100;
  
  // Calculate category performance
  const logicalPerf = (categoryScores.logical.correct / categoryScores.logical.total) * 100;
  const mathPerf = (categoryScores.mathematical.correct / categoryScores.mathematical.total) * 100;
  const verbalPerf = (categoryScores.verbal.correct / categoryScores.verbal.total) * 100;
  
  const avgTimePerQuestion = totalTimeSpent / totalQuestions;
  
  // Determine overall performance
  let overallPerformance = "";
  if (percentage >= 90) {
    overallPerformance = "Exceptional! You demonstrated outstanding cognitive abilities across all areas.";
  } else if (percentage >= 80) {
    overallPerformance = "Excellent performance! You show strong analytical and reasoning skills.";
  } else if (percentage >= 70) {
    overallPerformance = "Good work! You have solid problem-solving abilities with room for growth.";
  } else if (percentage >= 60) {
    overallPerformance = "Fair performance. Focus on strengthening your weaker areas for improvement.";
  } else {
    overallPerformance = "There's significant room for improvement. Consider practicing more in all areas.";
  }

  // Identify strengths
  const strengths: string[] = [];
  if (logicalPerf >= 75) strengths.push("Strong logical reasoning and pattern recognition");
  if (mathPerf >= 75) strengths.push("Excellent mathematical problem-solving skills");
  if (verbalPerf >= 75) strengths.push("Superior verbal reasoning and language comprehension");
  if (avgTimePerQuestion < 30) strengths.push("Quick thinking and efficient decision-making");
  if (percentage >= 80) strengths.push("Consistent performance across different question types");

  if (strengths.length === 0) {
    strengths.push("Shows potential for growth in cognitive abilities");
  }

  // Identify areas for improvement
  const improvements: string[] = [];
  if (logicalPerf < 60) improvements.push("Logical reasoning and pattern analysis");
  if (mathPerf < 60) improvements.push("Mathematical calculations and problem-solving");
  if (verbalPerf < 60) improvements.push("Vocabulary and verbal comprehension");
  if (avgTimePerQuestion > 60) improvements.push("Time management and quick decision-making");

  // Generate recommendations
  const recommendations: string[] = [];
  
  if (logicalPerf < mathPerf && logicalPerf < verbalPerf) {
    recommendations.push("Practice logical puzzles, sudoku, and pattern recognition games");
    recommendations.push("Work on deductive reasoning exercises and brain teasers");
  }
  
  if (mathPerf < logicalPerf && mathPerf < verbalPerf) {
    recommendations.push("Review basic arithmetic and algebra concepts");
    recommendations.push("Practice mental math and mathematical word problems");
  }
  
  if (verbalPerf < logicalPerf && verbalPerf < mathPerf) {
    recommendations.push("Expand vocabulary through reading and word games");
    recommendations.push("Practice analogies and verbal reasoning exercises");
  }
  
  if (avgTimePerQuestion > 45) {
    recommendations.push("Practice timed exercises to improve processing speed");
    recommendations.push("Work on eliminating obviously wrong answers quickly");
  }
  
  if (percentage < 70) {
    recommendations.push("Take practice IQ tests regularly to familiarize with question types");
    recommendations.push("Focus on understanding concepts rather than memorizing answers");
  }

  // Ensure at least one recommendation
  if (recommendations.length === 0) {
    recommendations.push("Continue challenging yourself with diverse cognitive exercises");
    recommendations.push("Maintain regular practice to keep your skills sharp");
  }

  return {
    overallPerformance,
    strengths,
    improvements,
    recommendations
  };
};