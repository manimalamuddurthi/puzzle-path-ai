import { Question } from '../types/quiz';

export const allQuizQuestions: Question[] = [
  // Logical Reasoning Questions (20 questions)
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
  {
    id: 4,
    category: 'logical',
    question: 'In a certain code, CAT = 24, DOG = 26. What is BIRD?',
    options: ['32', '34', '36', '38'],
    correctAnswer: 1,
    timeLimit: 75,
    difficulty: 'medium'
  },
  {
    id: 5,
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
  },
  {
    id: 6,
    category: 'logical',
    question: 'What comes next in this series: 1, 1, 2, 3, 5, 8, ?',
    options: ['11', '13', '15', '16'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 7,
    category: 'logical',
    question: 'If A = 1, B = 2, C = 3... what is the value of LOGIC?',
    options: ['64', '67', '70', '73'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 8,
    category: 'logical',
    question: 'Which number is the odd one out: 2, 4, 6, 9, 12?',
    options: ['2', '4', '9', '12'],
    correctAnswer: 2,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 9,
    category: 'logical',
    question: 'If today is Monday, what day will it be 100 days from now?',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 10,
    category: 'logical',
    question: 'Complete the analogy: Eye is to See as Ear is to ?',
    options: ['Sound', 'Hear', 'Listen', 'Music'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 11,
    category: 'logical',
    question: 'What is the next letter in the sequence: A, D, G, J, ?',
    options: ['K', 'L', 'M', 'N'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 12,
    category: 'logical',
    question: 'If all birds can fly and penguins are birds, but penguins cannot fly, what is wrong?',
    options: [
      'Birds cannot fly',
      'Penguins are not birds',
      'The first statement is incorrect',
      'Nothing is wrong'
    ],
    correctAnswer: 2,
    timeLimit: 75,
    difficulty: 'hard'
  },
  {
    id: 13,
    category: 'logical',
    question: 'Mirror image of AMBULANCE written backwards is:',
    options: ['ECNALUBMA', 'AMBULANCE', 'ƎƆNⱯ⅃UBMA', 'AMBU⅃AИƆƎ'],
    correctAnswer: 3,
    timeLimit: 90,
    difficulty: 'hard'
  },
  {
    id: 14,
    category: 'logical',
    question: 'Complete: 5, 10, 20, 40, ?',
    options: ['60', '70', '80', '90'],
    correctAnswer: 2,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 15,
    category: 'logical',
    question: 'If RED = 18, BLUE = 21, what is GREEN?',
    options: ['25', '27', '29', '31'],
    correctAnswer: 0,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 16,
    category: 'logical',
    question: 'Water is to Ice as ? is to Steam',
    options: ['Fire', 'Heat', 'Water', 'Gas'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 17,
    category: 'logical',
    question: 'Which does not belong: Circle, Square, Triangle, Sphere?',
    options: ['Circle', 'Square', 'Triangle', 'Sphere'],
    correctAnswer: 3,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 18,
    category: 'logical',
    question: 'If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?',
    options: ['5 minutes', '20 minutes', '100 minutes', '500 minutes'],
    correctAnswer: 0,
    timeLimit: 90,
    difficulty: 'hard'
  },
  {
    id: 19,
    category: 'logical',
    question: 'Complete the pattern: Z, Y, X, W, ?',
    options: ['V', 'U', 'T', 'S'],
    correctAnswer: 0,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 20,
    category: 'logical',
    question: 'If you rearrange the letters "CIFAIPC" you would have the name of a:',
    options: ['City', 'Country', 'Ocean', 'Animal'],
    correctAnswer: 2,
    timeLimit: 75,
    difficulty: 'hard'
  },

  // Mathematical Questions (20 questions)
  {
    id: 21,
    category: 'mathematical',
    question: 'What is 15% of 240?',
    options: ['32', '36', '40', '44'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 22,
    category: 'mathematical',
    question: 'If x + 3 = 2x - 5, what is the value of x?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 23,
    category: 'mathematical',
    question: 'A train travels 120 km in 1.5 hours. At the same speed, how far will it travel in 4 hours?',
    options: ['280 km', '300 km', '320 km', '340 km'],
    correctAnswer: 2,
    timeLimit: 75,
    difficulty: 'medium'
  },
  {
    id: 24,
    category: 'mathematical',
    question: 'What is the next number in the sequence: 1, 4, 9, 16, 25, ?',
    options: ['30', '32', '36', '40'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 25,
    category: 'mathematical',
    question: 'What is 7² + 3² - 2²?',
    options: ['50', '52', '54', '56'],
    correctAnswer: 2,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 26,
    category: 'mathematical',
    question: 'If a = 3 and b = 4, what is √(a² + b²)?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 0,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 27,
    category: 'mathematical',
    question: 'What is 25% of 80% of 200?',
    options: ['30', '35', '40', '45'],
    correctAnswer: 2,
    timeLimit: 75,
    difficulty: 'medium'
  },
  {
    id: 28,
    category: 'mathematical',
    question: 'If 3x - 7 = 14, what is x?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 29,
    category: 'mathematical',
    question: 'What is the area of a circle with radius 7? (Use π ≈ 3.14)',
    options: ['44', '154', '176', '196'],
    correctAnswer: 1,
    timeLimit: 90,
    difficulty: 'hard'
  },
  {
    id: 30,
    category: 'mathematical',
    question: 'Convert 3/8 to a percentage:',
    options: ['35%', '37.5%', '40%', '42.5%'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 31,
    category: 'mathematical',
    question: 'If y = 2x + 5 and x = 3, what is y?',
    options: ['9', '10', '11', '12'],
    correctAnswer: 2,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 32,
    category: 'mathematical',
    question: 'What is 144 ÷ 12 × 3?',
    options: ['4', '12', '36', '48'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 33,
    category: 'mathematical',
    question: 'If the average of 5 numbers is 20, what is their sum?',
    options: ['80', '90', '100', '110'],
    correctAnswer: 2,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 34,
    category: 'mathematical',
    question: 'What is 2³ × 3²?',
    options: ['54', '64', '72', '81'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 35,
    category: 'mathematical',
    question: 'A rectangle has length 12 and width 8. What is its perimeter?',
    options: ['32', '36', '40', '44'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 36,
    category: 'mathematical',
    question: 'If 2^x = 32, what is x?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 37,
    category: 'mathematical',
    question: 'What is 0.25 + 0.75?',
    options: ['0.9', '1.0', '1.1', '1.25'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 38,
    category: 'mathematical',
    question: 'If a car travels 60 mph for 2.5 hours, how far does it go?',
    options: ['120 miles', '130 miles', '140 miles', '150 miles'],
    correctAnswer: 3,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 39,
    category: 'mathematical',
    question: 'What is the square root of 169?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 40,
    category: 'mathematical',
    question: 'If f(x) = 3x - 2, what is f(4)?',
    options: ['8', '10', '12', '14'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'medium'
  },

  // Verbal Reasoning Questions (20 questions)
  {
    id: 41,
    category: 'verbal',
    question: 'Choose the word that is most opposite to "VERBOSE":',
    options: ['Talkative', 'Concise', 'Eloquent', 'Articulate'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 42,
    category: 'verbal',
    question: 'Complete the analogy: Book is to Author as Painting is to ?',
    options: ['Canvas', 'Brush', 'Artist', 'Gallery'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 43,
    category: 'verbal',
    question: 'Which word does NOT belong with the others?',
    options: ['Apple', 'Orange', 'Banana', 'Carrot'],
    correctAnswer: 3,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 44,
    category: 'verbal',
    question: 'If "MONDAY" is coded as "NPEBVZ", how is "FRIDAY" coded?',
    options: ['GSJEBZ', 'GQJEBZ', 'GQJEAZ', 'GSJFAZ'],
    correctAnswer: 0,
    timeLimit: 90,
    difficulty: 'hard'
  },
  {
    id: 45,
    category: 'verbal',
    question: 'Choose the correctly spelled word:',
    options: ['Acommodate', 'Accommodate', 'Acomodate', 'Accomodate'],
    correctAnswer: 1,
    timeLimit: 20,
    difficulty: 'easy'
  },
  {
    id: 46,
    category: 'verbal',
    question: 'What is a synonym for "METICULOUS"?',
    options: ['Careless', 'Detailed', 'Quick', 'Lazy'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'medium'
  },
  {
    id: 47,
    category: 'verbal',
    question: 'Complete: Flock is to Sheep as ? is to Fish',
    options: ['Group', 'School', 'Pack', 'Herd'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'easy'
  },
  {
    id: 48,
    category: 'verbal',
    question: 'Which word is the antonym of "ABUNDANT"?',
    options: ['Plentiful', 'Scarce', 'Rich', 'Full'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 49,
    category: 'verbal',
    question: 'Arrange these words alphabetically: Zebra, Apple, Moon, Book',
    options: ['Apple, Book, Moon, Zebra', 'Apple, Moon, Book, Zebra', 'Book, Apple, Moon, Zebra', 'Zebra, Moon, Book, Apple'],
    correctAnswer: 0,
    timeLimit: 60,
    difficulty: 'medium'
  },
  {
    id: 50,
    category: 'verbal',
    question: 'What does "UBIQUITOUS" mean?',
    options: ['Rare', 'Everywhere', 'Ancient', 'Unique'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 51,
    category: 'verbal',
    question: 'Choose the word that completes: "He spoke with great ___"',
    options: ['Eloquence', 'Elephants', 'Elements', 'Elegance'],
    correctAnswer: 0,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 52,
    category: 'verbal',
    question: 'Which is NOT a synonym for "HAPPY"?',
    options: ['Joyful', 'Elated', 'Miserable', 'Cheerful'],
    correctAnswer: 2,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 53,
    category: 'verbal',
    question: 'Complete the phrase: "A stitch in time saves ___"',
    options: ['Eight', 'Nine', 'Ten', 'Seven'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 54,
    category: 'verbal',
    question: 'What is the plural of "ANALYSIS"?',
    options: ['Analysises', 'Analysis', 'Analyses', 'Analyzis'],
    correctAnswer: 2,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 55,
    category: 'verbal',
    question: 'Which word means "to make less severe"?',
    options: ['Aggravate', 'Mitigate', 'Complicate', 'Eliminate'],
    correctAnswer: 1,
    timeLimit: 60,
    difficulty: 'hard'
  },
  {
    id: 56,
    category: 'verbal',
    question: 'Choose the correct usage: "The data ___ conclusive"',
    options: ['is', 'are', 'was', 'been'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 57,
    category: 'verbal',
    question: 'What does "PROCRASTINATE" mean?',
    options: ['Work hard', 'Delay', 'Complete quickly', 'Organize'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 58,
    category: 'verbal',
    question: 'Which word has the same meaning as "ENIGMATIC"?',
    options: ['Clear', 'Mysterious', 'Simple', 'Obvious'],
    correctAnswer: 1,
    timeLimit: 45,
    difficulty: 'medium'
  },
  {
    id: 59,
    category: 'verbal',
    question: 'Complete: "Birds of a feather ___ together"',
    options: ['fly', 'flock', 'sing', 'nest'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'easy'
  },
  {
    id: 60,
    category: 'verbal',
    question: 'What is the past tense of "LEAD" (to guide)?',
    options: ['Lead', 'Led', 'Leaded', 'Leading'],
    correctAnswer: 1,
    timeLimit: 30,
    difficulty: 'medium'
  }
];

// Function to get randomized quiz questions
export const getRandomQuizQuestions = (count: number = 12): Question[] => {
  // Create a copy of all questions to avoid modifying the original array
  const shuffled = [...allQuizQuestions];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Ensure we have a good mix of categories
  const logical = shuffled.filter(q => q.category === 'logical').slice(0, 4);
  const mathematical = shuffled.filter(q => q.category === 'mathematical').slice(0, 4);
  const verbal = shuffled.filter(q => q.category === 'verbal').slice(0, 4);
  
  const selected = [...logical, ...mathematical, ...verbal];
  
  // Shuffle the selected questions again for random order
  for (let i = selected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selected[i], selected[j]] = [selected[j], selected[i]];
  }
  
  return selected.slice(0, count);
};

// For backward compatibility
export const quizQuestions = getRandomQuizQuestions();