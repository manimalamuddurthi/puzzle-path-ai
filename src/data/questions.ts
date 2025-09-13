import { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
  // Logical Reasoning Questions
  {
    id: 1,
    category: 'logical',
    question: 'If all roses are flowers and all flowers need water, then:',
    options: [
      'All roses need water',
      'Some roses need water',
      'No roses need water',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 2,
    category: 'logical',
    question: 'Complete the pattern: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 3,
    category: 'logical',
    question: 'Which figure completes the sequence? ○△□ → △□○ → □○△ → ?',
    options: ['○△□', '△○□', '□△○', '○□△'],
    correctAnswer: 0,
    timeLimit: 90,
    difficulty: 'hard'
  },

  // Mathematical Questions
  {
    id: 4,
    category: 'mathematical',
    question: 'What is 15% of 240?',
    options: ['32', '36', '40', '44'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 5,
    category: 'mathematical',
    question: 'If x + 3 = 2x - 5, what is the value of x?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 6,
    category: 'mathematical',
    question: 'A train travels 120 km in 1.5 hours. At the same speed, how far will it travel in 4 hours?',
    options: ['280 km', '300 km', '320 km', '340 km'],
    correctAnswer: 2,
    timeLimit: 75,
    difficulty: 'medium'
  },
  {
    id: 7,
    category: 'mathematical',
    question: 'What is the next number in the sequence: 1, 4, 9, 16, 25, ?',
    options: ['30', '32', '36', '40'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },

  // Verbal Reasoning Questions
  {
    id: 8,
    category: 'verbal',
    question: 'Choose the word that is most opposite to "VERBOSE":',
    options: ['Talkative', 'Concise', 'Eloquent', 'Articulate'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 9,
    category: 'verbal',
    question: 'Complete the analogy: Book is to Author as Painting is to ?',
    options: ['Canvas', 'Brush', 'Artist', 'Gallery'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 10,
    category: 'verbal',
    question: 'Which word does NOT belong with the others?',
    options: ['Apple', 'Orange', 'Banana', 'Carrot'],
    correctAnswer: 3,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 11,
    category: 'verbal',
    question: 'If "MONDAY" is coded as "NPEBVZ", how is "FRIDAY" coded?',
    options: ['GSJEBZ', 'GQJEBZ', 'GQJEAZ', 'GSJFAZ'],
    correctAnswer: 0,
    timeLimit: 90,
    difficulty: 'hard'
  },

  // Additional Mixed Questions
  {
    id: 12,
    category: 'logical',
    question: 'In a certain code, CAT = 24, DOG = 26. What is BIRD?',
    options: ['32', '34', '36', '38'],
    correctAnswer: 1,
    timeLimit: 75,
    difficulty: 'medium'
  },
  {
    id: 13,
    category: 'mathematical',
    question: 'What is 7² + 3² - 2²?',
    options: ['50', '52', '54', '56'],
    correctAnswer: 2,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 14,
    category: 'verbal',
    question: 'Choose the correctly spelled word:',
    options: ['Acommodate', 'Accommodate', 'Acomodate', 'Accomodate'],
    correctAnswer: 1,
    timeLimit: 20,
    difficulty: 'easy'
  },
  {
    id: 15,
    category: 'logical',
    question: 'If some Xs are Ys and all Ys are Zs, which statement must be true?',
    options: [
      'All Xs are Zs',
      'Some Xs are Zs',
      'No Xs are Zs',
      'Some Zs are not Xs'
    ],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'hard'
  }
];