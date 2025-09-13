import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Target, Zap } from "lucide-react";
import quizHero from "@/assets/quiz-hero.jpg";

interface QuizStartProps {
  onStart: () => void;
}

export const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="min-h-screen bg-quiz-gradient flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${quizHero})` }}
      />
      <Card className="w-full max-w-2xl shadow-elegant border-0 relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            IQ & Aptitude Quiz
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Test your logical reasoning, mathematical skills, and verbal abilities with our AI-powered assessment
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">15 Questions</p>
                <p className="text-sm text-muted-foreground">Mixed difficulty levels</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30">
              <Clock className="w-5 h-5 text-secondary" />
              <div>
                <p className="font-medium">Timed</p>
                <p className="text-sm text-muted-foreground">20-90 seconds per question</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30">
              <Zap className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">AI Feedback</p>
                <p className="text-sm text-muted-foreground">Personalized insights</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <h3 className="font-medium text-foreground">What you'll be tested on:</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span><strong>Logical Reasoning:</strong> Pattern recognition, deductive reasoning, and analytical thinking</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span><strong>Mathematical Skills:</strong> Arithmetic, algebra, and problem-solving abilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span><strong>Verbal Reasoning:</strong> Vocabulary, analogies, and language comprehension</span>
              </li>
            </ul>
          </div>

          <Button 
            onClick={onStart} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            size="lg"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};