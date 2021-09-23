import React from "react";
import ChatBot from 'react-simple-chatbot';
export const VirtualAssistant = () => {
  return <ChatBot
    headerTitle="Virtual Assistant"
    speechSynthesis={{ enable: true, lang: 'en' }}
    style={{ height: '100vh', width: '100%' }}
    steps={[
      {
        id: '1',
        message: 'Welcome to virtual health assistant',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
    ]}
  />
}
