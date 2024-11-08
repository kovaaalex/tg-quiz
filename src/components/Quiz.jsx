import React, {useState} from "react"
const questions = [
    {
      question: "Какой язык является основным для веб-разработки?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      question: "Какой символ используется для комментариев в JavaScript?",
      options: ["//", "##", "!!", "--"],
      correctAnswer: "//",
    },
    {
      question: "Что такое React?",
      options: ["Фреймворк", "Библиотека", "Язык", "IDE"],
      correctAnswer: "Библиотека",
    },
]
export default function Quiz({complete}) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    function handleAnswer(answer) {
        if(questions[currentQuestion].correctAnswer === answer) {
            setScore(++score)
        }
        if(currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else complete(score)
    }
    return (<>
            <h2>Quiz</h2>
            <h3>{questions[currentQuestion].question}</h3>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </>
    )
}