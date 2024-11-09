import React, { useEffect } from "react";
import axios from "axios";

export default function Results({ score }) {
    const totalQuestions = 3;
    const token = '7470728509:AAESPkm1XRq4rynh1rOndGmS6kF5twHHAHY'; // Ваш токен
    const chatId = '856499347'; // Ваш chatId

    useEffect(() => {
        const sendTelegramMessage = async () => {
            const message = `Я прошёл квиз и набрал ${score} из ${totalQuestions} баллов!`;
            console.log('Отправка сообщения:', message); // Отладочное сообщение
            try {
                const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                    chat_id: chatId,
                    text: message
                });
                console.log('Message sent:', response.data);
            } catch (error) {
                console.error('Error sending message:', error.response ? error.response.data : error.message);
            }
        };

        // Отправка сообщения только если score изменился
        if (score !== null) {
            sendTelegramMessage();
        }
    }, [score]);

    return (
        <h2>Results: {score} from {totalQuestions}</h2>
    );
}