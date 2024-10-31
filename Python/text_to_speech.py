# pip install pyttsx3

import pyttsx3

# Initialize the text-to-speech engine
engine = pyttsx3.init()

# Set properties before adding anything to speak
engine.setProperty('rate', 150)    # Speed of speech
engine.setProperty('volume', 1)     # Volume level (0.0 to 1.0)

text = input("Enter your text which you want to convert to speech: ")

# Say the provided text
engine.say(text)

engine.runAndWait()

