import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material'; // Import Material-UI Circular Progress
import { Button } from '@/components/ui/button';

const QuizComponent = ({ onQuizComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer

  // Sample question and answers
  const question = "What is the capital of France?";
  const answers = [
    { id: 1, text: "Berlin" },
    { id: 2, text: "Madrid" },
    { id: 3, text: "Paris" },
    { id: 4, text: "Rome" },
  ];

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit(); // Automatically submit when time runs out
    }
  }, [timeLeft, isSubmitted]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (selectedAnswer === 3) { // Assuming answer 3 (Paris) is correct
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }
    onQuizComplete(); // Call the prop function to signal quiz completion
  };

  return (
    <div className="p-5 rounded-lg border mx-auto shadow-md relative w-[500px] h-[450px]">
      {/* Timer centered above the question */}
      <div className="flex flex-col items-center mb-4">
        <CircularProgress 
          variant="determinate" 
          value={(timeLeft / 60) * 100} 
          size={80} 
          sx={{
            color: timeLeft > 10 ? '#1b0b75' : '#ff1744', 
          }}
        />
        <div className="text-center mt-1 text-sm">{timeLeft} seconds left</div>
      </div>

      <h2 className="text-xl font-semibold text-center mb-4">{question}</h2>

      <div className="grid grid-cols-2 gap-4 mt-10">
        {answers.map((answer) => (
          <div
            key={answer.id}
            className={`p-4 border rounded-lg cursor-pointer flex items-center justify-center text-center transition-colors duration-200 ${isSubmitted ? "cursor-not-allowed" : "hover:bg-[#1b0b75] hover:text-white" } ${selectedAnswer === answer.id ? "bg-[#1b0b75] text-white" : ""}`}
            onClick={() => {
              if (!isSubmitted) setSelectedAnswer(answer.id);
            }}
          >
            {answer.text}
          </div>
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        className={`mt-4 p-2  text-white rounded w-full ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSubmitted || selectedAnswer === null} // Disable button if already submitted or no answer selected
      >
        Submit
      </Button>
      {isSubmitted && (
        <div className="mt-4">
          {selectedAnswer === 3 ? (
            <p className="text-green-600">Correct! Paris is the capital of France.</p>
          ) : (
            <p className="text-red-600">Incorrect! Try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
