import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// for navitation purpose
import {useRoute} from '@react-navigation/native';
import BackButton from '../components/Back__btn';

//  passing navigation as a prop to make use of navagating user to home screen
export default function Info({navigation}: {navigation: any}) {
  const faqs = [
    {
      question:
        "I'm new to this. What difficulty levels do I have to choose from?",
      answer:
        "If you're just starting out, you can select from three difficulty levels: easy, medium, and hard. We've got the perfect challenge for every level of experience!",
    },
    {
      question: 'What happens when I answer a question incorrectly?',
      answer:
        "Don't worry, we've got you covered! When you submit an incorrect answer, your device will gently vibrate, and the answer will turn red. It's instant feedback to help you learn and improve.",
    },
    {
      question: 'Are the result screens different based on my score?',
      answer:
        "Absolutely! Your score determines your experience. Score more than 50 points, and you'll be treated to a cheerful and animated celebration. If you score lower, we'll keep it low-key. The higher your score, the more exciting the outcome!",
    },
    {
      question: 'Can I skip a question if I find it too challenging?',
      answer:
        "Of course! If a question is too tricky or you're unsure about the answer, you can use the 'Next' option to move on to the next one. It's all about having a great experience while enjoying the game.",
    },
    {
      question: 'Is there a limit to how many questions I can skip?',
      answer:
        "No, there's no limit to the number of questions you can skip. Feel free to skip as many questions as you need to keep the game enjoyable for you. It's all about having fun and learning.",
    },
  ];

  const [expanded, setExpanded] = useState(-1);

  const toggleAnswer = (index: React.SetStateAction<number>) => {
    if (expanded === index) {
      setExpanded(-1);
    } else {
      setExpanded(index);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <View>
        <Text style={styles.infoTitle}>
          Click on the question to see the answer ✌️
        </Text>
      </View>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleAnswer(index)}>
            <Text style={styles.question}>
              {index + 1}. {faq.question}
            </Text>
          </TouchableOpacity>
          {expanded === index && (
            <Text style={styles.answer}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#0F172A',
    fontFamily: 'Lato, Arial, sans-serif',
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
    color: '#fff',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 7,
    color: '#fff',
  },
  answer: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#fff',
  },
  infoTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  backButton: {
    fontSize: 33,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: -20,
  },
});
