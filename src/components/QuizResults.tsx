import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  Clock, 
  Brain, 
  Calculator, 
  MessageCircle,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  XCircle
} from "lucide-react";
import { QuizResult, AIFeedback } from "@/types/quiz";

interface QuizResultsProps {
  result: QuizResult;
  feedback: AIFeedback;
  onRestart: () => void;
}

export const QuizResults = ({ result, feedback, onRestart }: QuizResultsProps) => {
  const percentage = (result.score / result.totalQuestions) * 100;
  const avgTimePerQuestion = result.totalTimeSpent / result.totalQuestions;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'logical':
        return <Brain className="w-5 h-5 text-primary" />;
      case 'mathematical':
        return <Calculator className="w-5 h-5 text-secondary" />;
      case 'verbal':
        return <MessageCircle className="w-5 h-5 text-accent" />;
      default:
        return null;
    }
  };

  const getPerformanceColor = (score: number, total: number) => {
    const perf = (score / total) * 100;
    if (perf >= 80) return "text-success";
    if (perf >= 60) return "text-warning";
    return "text-destructive";
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return minutes > 0 ? `${minutes}m ${secs}s` : `${secs}s`;
  };

  return (
    <div className="min-h-screen bg-quiz-gradient p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <Card className="text-center shadow-elegant border-0">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
              <CardDescription className="text-lg">Here's how you performed</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {Math.round(percentage)}%
              </div>
              <p className="text-lg text-muted-foreground mt-2">
                {result.score} out of {result.totalQuestions} questions correct
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-muted/30">
                <Target className="w-5 h-5 text-primary" />
                <div className="text-center">
                  <p className="font-medium">{result.score}/{result.totalQuestions}</p>
                  <p className="text-sm text-muted-foreground">Correct Answers</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-muted/30">
                <Clock className="w-5 h-5 text-secondary" />
                <div className="text-center">
                  <p className="font-medium">{formatTime(result.totalTimeSpent)}</p>
                  <p className="text-sm text-muted-foreground">Total Time</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-muted/30">
                <TrendingUp className="w-5 h-5 text-accent" />
                <div className="text-center">
                  <p className="font-medium">{formatTime(avgTimePerQuestion)}</p>
                  <p className="text-sm text-muted-foreground">Avg per Question</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card className="shadow-elegant border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Category Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(result.categoryScores).map(([category, scores]) => {
              const categoryPerf = (scores.correct / scores.total) * 100;
              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(category)}
                      <span className="font-medium capitalize">{category} Reasoning</span>
                    </div>
                    <span className={`font-medium ${getPerformanceColor(scores.correct, scores.total)}`}>
                      {scores.correct}/{scores.total} ({Math.round(categoryPerf)}%)
                    </span>
                  </div>
                  <Progress value={categoryPerf} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* AI Feedback */}
        <Card className="shadow-elegant border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5" />
              <span>AI-Powered Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-lg leading-relaxed">{feedback.overallPerformance}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="space-y-3">
                <h3 className="flex items-center space-x-2 font-medium text-success">
                  <CheckCircle className="w-4 h-4" />
                  <span>Your Strengths</span>
                </h3>
                <ul className="space-y-2">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0"></div>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas for Improvement */}
              {feedback.improvements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="flex items-center space-x-2 font-medium text-warning">
                    <XCircle className="w-4 h-4" />
                    <span>Areas for Improvement</span>
                  </h3>
                  <ul className="space-y-2">
                    {feedback.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div className="space-y-3">
              <h3 className="flex items-center space-x-2 font-medium">
                <Lightbulb className="w-4 h-4 text-accent" />
                <span>Personalized Recommendations</span>
              </h3>
              <div className="grid gap-2">
                {feedback.recommendations.map((recommendation, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-3 h-auto text-xs">
                    {recommendation}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button 
            onClick={onRestart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            size="lg"
          >
            Take Another Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};