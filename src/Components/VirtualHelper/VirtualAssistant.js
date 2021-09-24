import React from "react";
import ChatBot from 'react-simple-chatbot';
export const VirtualAssistant = () => {
  return <ChatBot
            headerTitle="Virtual Assistant"
            speechSynthesis={{ enable: true, lang: 'en' }}
            style= {{height: '100vh', width: '100%'}}
            steps={[
              {
                id: '1',
                message: 'Welcome to virtual health assistant, please enter your name.',
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
                trigger: '4',
              },
              {
                id: '4',
                message: 'Please enter your age',
                trigger: '5',
              },
              {
                id: '5',
                user: true,
                trigger: '6',
              },
              {
                id: '6',
                message: 'Are you facing any of the following symptoms, please select',
                trigger: '7',
              },
              {
                id: '7',
                options: [
                  { value: 'Fever', label: 'Fever', trigger: '8' },
                  { value: 'Cold & Cough', label: 'Cold & Cough', trigger: '8' },
                  { value: 'Headache', label: 'Headache', trigger: '8' },
                ],
              },
              {
                id: '8',
                message: 'So you are suffering from {previousValue}, follow the instructions of our health consultant',
                end: true,
              },
            ]}
          />
 }
