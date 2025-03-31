
import React from "react";
import styled from "styled-components";
import { FaVk, FaEnvelope, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa"; // Добавлен импорт иконок

const ContactsPage = () => {
    // Функция для отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Ошибка отправки данных: ${response.status}`);
            }

            alert("Ваше сообщение успешно отправлено!");
            event.target.reset();
        } catch (error) {
            alert(`Произошла ошибка: ${error.message}`);
        }
    };

    return (
        <Wrapper>
            <Heading>С нами можно связаться:</Heading>
            <Section>
                <Heading>Контактная информация</Heading>
                <SocialLinks>
                    <SocialLink href="https://vk.com/newada_store" target="_blank">
                        <FaVk size={24} />
                        ВКонтакте
                    </SocialLink>
                    <SocialLink href="mailto:molstih@yandex.ru">
                        <FaEnvelope size={24} />
                        Email
                    </SocialLink>
                    <SocialLink href="https://t.me/molstih" target="_blank">
                        <FaTelegramPlane size={24} />
                        Telegram
                    </SocialLink>
                    <SocialLink href="tel:+79623502533">
                        <FaPhoneAlt size={24} />
                        +7 962 350-25-33
                    </SocialLink>
                </SocialLinks>
            </Section>
            <Section>
                <Heading>Форма обратной связи</Heading>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Ваше имя:
                        <Input type="text" name="name" required />
                    </Label>
                    <Label>
                        Ваш email:
                        <Input type="email" name="email" required />
                    </Label>
                    <Label>
                        Сообщение:
                        <TextArea rows="5" name="message" required />
                    </Label>
                    <Button type="submit">Отправить</Button>
                </Form>
            </Section>

        </Wrapper>
    );
};

export default ContactsPage;

// Стилизация компонентов
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 0 0;

@media screen and (max-width: 768px) {
  padding: 0 10px;
}
`;

const Section = styled.div`
  width: 500px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #c8a2c8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
  width: 100%;
  padding: 10px;
}
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;

  @media screen and (max-width: 768px) {
  font-size: 20px;
}
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-left: 40px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;
  color: black;
`;

const Input = styled.input`
  background-color: darkseagreen;
  color: black;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  @media screen and (max-width: 768px) {
  width: 90%;
}
`;

const TextArea = styled.textarea`
  background-color: darkseagreen;
  color: black;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  outline: none;

  @media screen and (max-width: 768px) {
  width: 90%;
}
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
  width: 100%;
}
`;