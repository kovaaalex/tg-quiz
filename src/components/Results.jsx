import React, { useEffect } from "react";
import axios from "axios";

export default function Results({ score }) {
    const totalQuestions = 3;

    useEffect(() => {
        const tg = window.Telegram ? window.Telegram.WebApp : null;

        if (tg) {
            tg.MainButton.setText("Отправить результат");
            tg.MainButton.show();

            tg.MainButton.onClick(async () => {
                const token = '7470728509:AAESPkm1XRq4rynh1rOndGmS6kF5twHHAHY'; // Ваш токен
                const chatId = '856499347'; // Ваш chatId
                const message = `Я прошёл квиз и набрал ${score} из ${totalQuestions} баллов!`;

                try {
                    const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                        chat_id: chatId,
                        text: message
                    });
                    console.log('Message sent:', response.data);
                } catch (error) {
                    console.error('Error sending message:', error.response ? error.response.data : error.message);
                }

                tg.MainButton.hide(); // Скрываем кнопку после отправки
            });
        } else {
            console.log("Запустите приложение внутри Telegram для доступа к Web App API.");
        }
    }, [score]);

    return (
        <h2>Results: {score} from {totalQuestions}</h2>
    );
}