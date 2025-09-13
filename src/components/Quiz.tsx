import { useState } from 'react';
import { QuizStart } from './QuizStart';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { getRandomQuizQuestions } from '../data/questions';
import { generateAIFeedback } from '../utils/aifeedback';
import { QuizAttempt, QuizResult, Question } from '../types/quiz';

type QuizState = 'start' | 'question' | 'results';

export const Quiz = () => {
  const [state, setState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<Question[]>([]);

  const handleStart = () => {
    // Generate a new set of random questions for this quiz session
    const randomQuestions = getRandomQuizQuestions(12);
    setCurrentQuizQuestions(randomQuestions);
    setState('question');
    setCurrentQuestionIndex(0);
    setAttempts([]);
    setQuizStartTime(Date.now());
  };

  const handleAnswer = (selectedAnswer: number, timeSpent: number) => {
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    const attempt: QuizAttempt = {
      questionId: currentQuestion.id,
      selectedAnswer,
      timeSpent,
      isCorrect
    };

    setAttempts(prev => [...prev, attempt]);

    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 1500);
    } else {
      // Quiz completed
      setTimeout(() => {
        setState('results');
      }, 1500);
    }
  };

  const generateResults = (): QuizResult => {
    const correctAnswers = attempts.filter(attempt => attempt.isCorrect).length;
    const totalTimeSpent = (Date.now() - quizStartTime) / 1000;

    // Calculate category scores
    const categoryScores = {
      logical: { correct: 0, total: 0 },
      mathematical: { correct: 0, total: 0 },
      verbal: { correct: 0, total: 0 }
    };

    attempts.forEach(attempt => {
      const question = currentQuizQuestions.find(q => q.id === attempt.questionId);
      if (question) {
        categoryScores[question.category].total++;
        if (attempt.isCorrect) {
          categoryScores[question.category].correct++;
        }
      }
    });

    return {
      score: correctAnswers,
      totalQuestions: currentQuizQuestions.length,
      attempts,
      totalTimeSpent,
      categoryScores
    };
  };

  const handleRestart = () => {
    setState('start');
    setCurrentQuestionIndex(0);
    setAttempts([]);
    setQuizStartTime(0);
    setCurrentQuizQuestions([]);
  };

  if (state === 'start') {
    return <QuizStart onStart={handleStart} />;
  }

  if (state === 'question' && currentQuizQuestions.length > 0) {
    return (
      <QuizQuestion
        question={currentQuizQuestions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={currentQuizQuestions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  if (state === 'results') {
    const result = generateResults();
    const feedback = generateAIFeedback(result);
    
    return (
      <QuizResults
        result={result}
        feedback={feedback}
        onRestart={handleRestart}
      />
    );
  }

  return null;
};