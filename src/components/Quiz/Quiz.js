import React from "react";
import "./Quiz.css";

export default class Quiz extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         questions: [
            {
               questionText: "What is the capital of France?",
               answerOptions: [
                  { answerText: "New York", isCorrect: false },
                  { answerText: "London", isCorrect: false },
                  { answerText: "Paris", isCorrect: true },
                  { answerText: "Dublin", isCorrect: false },
               ],
            },
            {
               questionText: "Who is CEO of Tesla?",
               answerOptions: [
                  { answerText: "Jeff Bezos", isCorrect: false },
                  { answerText: "Elon Musk", isCorrect: true },
                  { answerText: "Bill Gates", isCorrect: false },
                  { answerText: "Tony Stark", isCorrect: false },
               ],
            },
            {
               questionText: "The iPhone was created by which company?",
               answerOptions: [
                  { answerText: "Apple", isCorrect: true },
                  { answerText: "Intel", isCorrect: false },
                  { answerText: "Amazon", isCorrect: false },
                  { answerText: "Microsoft", isCorrect: false },
               ],
            },
            {
               questionText: "How many Harry Potter books are there?",
               answerOptions: [
                  { answerText: "1", isCorrect: false },
                  { answerText: "4", isCorrect: false },
                  { answerText: "6", isCorrect: false },
                  { answerText: "7", isCorrect: true },
               ],
            },
         ],
         currentQuestion: 0,
         showScore: false,
         score: 0,
      };
   }

   nextQuestion = (isCorrect) => {
      const { questions, currentQuestion } = this.state;

      if (isCorrect) {
         this.setState((prevState) => ({ score: prevState.score + 1 }));
      }

      if (currentQuestion < questions.length - 1) {
         this.setState((prevState) => ({
            currentQuestion: prevState.currentQuestion + 1,
         }));
      } else {
         this.setState({ showScore: true });
      }
   };

   render() {
      const { questions, currentQuestion, showScore, score } = this.state;
      return (
         <div className="app">
            {/* next div is for showing user score */}
            {showScore ? (
               <div className="score-section">
                  You scored {score} out of {questions.length}
               </div>
            ) : (
               <>
                  <div className="question-section">
                     <div className="question-count">
                        <span>Question {currentQuestion + 1}</span>/{" "}
                        {questions.length}
                     </div>
                     <div className="question-text">
                        {questions[currentQuestion].questionText}
                     </div>
                  </div>
                  <div className="answer-section">
                     {questions[currentQuestion].answerOptions.map(
                        (answerOption, index) => (
                           <button
                              onClick={() =>
                                 this.nextQuestion(answerOption.isCorrect)
                              }
                              key={index}
                           >
                              {answerOption.answerText}
                           </button>
                        )
                     )}
                  </div>
               </>
            )}
         </div>
      );
   }
}
