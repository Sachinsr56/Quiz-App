import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Game() {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Rome', 'Paris'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['African Elephant', 'Killer Whale', 'Blue Whale', 'Giraffe'],
      answer: 'Blue Whale',
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      answer: 'Carbon Dioxide',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      answer: 'Au',
    },
    {
      question: 'Which famous scientist developed the theory of general relativity?',
      options: ['Isaac Newton', 'Marie Curie', 'Albert Einstein', 'Galileo Galilei'],
      answer: 'Albert Einstein',
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Liver', 'Brain', 'Skin'],
      answer: 'Skin',
    },
    {
      question: 'Which gas makes up the majority of Earth’s atmosphere?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
      answer: 'Nitrogen',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Kilimanjaro', 'Mount Fuji', 'Mount Everest', 'Mount McKinley'],
      answer: 'Mount Everest',
    },
    {
      question: 'Which gas is responsible for the green color of plants?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Chlorophyll'],
      answer: 'Chlorophyll',
    },
    // Add more questions here
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [Completed, setCompleted] = useState(false)

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answer === selectedOption;
    const updatedUserAnswers = { ...userAnswers, [currentQuestionIndex]: isCorrect };

    setUserAnswers(updatedUserAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate total score and display it
      const correctAnswers = Object.values(updatedUserAnswers).filter((isCorrect) => isCorrect);
      setTotalScore(correctAnswers.length);
      setCompleted(true)
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <h3>Quiz Game</h3>
            </div>
            <div className="card-body">
              {Completed===false ? (
                <div>
                  <h5>{questions[currentQuestionIndex].question}</h5>
                  <div>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="btn btn-secondary m-2"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h5>Quiz Completed</h5>
                  {totalScore !== 0 && (
                    <p>Total Score: {totalScore} out of {questions.length}</p>
                  )}
                </div>
              )}
            </div>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
