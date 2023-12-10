import { useState } from 'react';
import './style.css';

function App() {
  return (
    <div>
      <FlastCards />
    </div>
  );
}

export default App;

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

const FlastCards = () => {
  // Here, the selectedId will be the id of the question, that we click
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className='flashcards'>
      {questions.map(question => (

        // Here, we are also changing the className based on the condition
        // Here, we cannot directly pass the function with a parameter so, we have to do something like this
        <div key={question.id} className={question.id === selectedId ? 'selected' : ""} onClick={() => handleClick(question.id)}>
          <p>

            {/* If the question id become equal to our state then, we will show the answer otherwise it will be the question */}
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
