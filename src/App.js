
import react, {useState} from 'react'
import './App.css';
import Results from './components/Results';
import Quiz from './components/Quiz';

function App() {
  const [quizComplete, setQuizComplete] = useState(false)
  const [score, setScore] = useState(0)
  function onComplete(finalScore) {
    setScore(finalScore)
    setQuizComplete(true)
  }
  return (
    <div className="App">
      <h1>Quiz</h1>
      {quizComplete ? (
          <Results score={score}></Results>
        ) : (
          <Quiz complete={onComplete}></Quiz> 
        )
      }
    </div>
  );
}

export default App;
