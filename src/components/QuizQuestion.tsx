import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Brain, Calculator, MessageCircle } from "lucide-react";
import { Question } from "@/types/quiz";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedAnswer: number, timeSpent: number) => void;
}

export const QuizQuestion = ({ question, questionNumber, totalQuestions, onAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(question.timeLimit);
  const [startTime] = useState(Date.now());

  const getCategoryIcon = (category: Question['category']) => {
    switch (category) {
      case 'logical':
        return <Brain className="w-5 h-5" />;
      case 'mathematical':
        return <Calculator className="w-5 h-5" />;
      case 'verbal':
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: Question['category']) => {
    switch (category) {
      case 'logical':
        return 'text-primary bg-primary/10';
      case 'mathematical':
        return 'text-secondary bg-secondary/10';
      case 'verbal':
        return 'text-accent bg-accent/10';
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const timeSpent = (Date.now() - startTime) / 1000;
          onAnswer(selectedAnswer ?? -1, timeSpent);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedAnswer, onAnswer, startTime]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      const timeSpent = (Date.now() - startTime) / 1000;
      onAnswer(answerIndex, timeSpent);
    }, 1000);
  };

  const progress = ((questionNumber - 1) / totalQuestions) * 100;
  const timeProgress = (timeLeft / question.timeLimit) * 100;

  return (
    <div className="min-h-screen bg-quiz-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-elegant border-0">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Question {questionNumber} of {totalQuestions}</span>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getCategoryColor(question.category)}`}>
                {getCategoryIcon(question.category)}
                <span className="capitalize">{question.category}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4" />
              <span className={timeLeft <= 10 ? 'text-destructive font-bold' : 'text-muted-foreground'}>
                {timeLeft}s
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <Progress 
              value={timeProgress} 
              className={`h-1 ${timeLeft <= 10 ? 'bg-destructive/20' : ''}`} 
            />
          </div>
          
          <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {question.options.map((option, index) => {
              let buttonVariant: "outline" | "default" = "outline";
              let buttonClass = "w-full text-left justify-start h-auto p-4 transition-all duration-300";

              if (selectedAnswer === index) {
                buttonClass += " bg-primary text-primary-foreground border-primary shadow-glow";
              } else {
                buttonClass += " hover:bg-muted hover:scale-[1.02]";
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={buttonClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </Button>
              );
            })}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            {selectedAnswer !== null ? (
              <span className="text-success">Answer recorded! Moving to next question...</span>
            ) : (
              "Select an answer to continue"
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};