import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-quiz-gradient-start to-quiz-gradient-end">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-quiz-accent bg-clip-text text-transparent">
          Quiz App
        </h1>
        <Link to="/auth">
          <Button variant="outline">
            Login / Sign Up
          </Button>
        </Link>
      </header>
      <Quiz />
    </div>
  );
};

export default Index;
