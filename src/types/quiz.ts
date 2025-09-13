export interface Question {
  id: number;
  category: 'logical' | 'mathematical' | 'verbal';
  question: string;
  options: string[];
  correctAnswer: number;
  timeLimit: number; // seconds
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizAttempt {
  questionId: number;
  selectedAnswer: number | null;
  timeSpent: number;
  isCorrect: boolean;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  attempts: QuizAttempt[];
  totalTimeSpent: number;
  categoryScores: {
    logical: { correct: number; total: number };
    mathematical: { correct: number; total: number };
    verbal: { correct: number; total: number };
  };
}

export interface AIFeedback {
  overallPerformance: string;
  strengths: string[];
  improvements: string[];
  recommendations: string[];
}