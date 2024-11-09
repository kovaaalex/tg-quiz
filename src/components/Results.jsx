import React, {useEffect} from "react"
export default function Results({score}) {
    const totalQuestions = 3
    useEffect(() => {
        const tg = window.Telegram ? window.Telegram.WebApp : null;

if (tg) {
  // Используем методы tg, если объект доступен
  tg.MainButton.setText("Отправить результат");
  tg.MainButton.show();
} else {
  console.log("Запустите приложение внутри Telegram для доступа к Web App API.");
}
    }, [score])
    return (
        <h2>Results {score} from {totalQuestions}</h2>
    )
}