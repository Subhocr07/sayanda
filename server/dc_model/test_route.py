import pandas as pd
import openai
import re
from flask import Flask, request, jsonify
from flask_cors import CORS

# Set up your OpenAI API credentials
openai.api_key = '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'

# Load the dataset from the "edited_data.xlsx" file
df = pd.read_excel(
    'D:\DC\Github\Gita_production\server\dc_model\edited_data.xlsx')

# Create a Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS support

# API endpoint to handle the question and return the response


@app.route('/ask-question', methods=['POST'])
def ask_question():
    # Get the question from the request's JSON data
    question = request.json['question']

    # Generate the response
    response = generate_response(question)

    # Return the response as JSON
    return jsonify(response)


def generate_response(question):
    # Construct the prompt with the question
    prompt = f"From the book: Bhagavad-gita As It Is written by A.C. Bhaktivedanta Swami Prabhupada, give a gentle advice on {question}. Mention from which chapter and what verse the answer is derived from."

    # Call the OpenAI API to generate the answer
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=500,
        n=1,
        stop=None,
        temperature=0.7
    )

    # Extract the generated answer from the API response
    answer = response.choices[0].text.strip()

    # Extract the chapter and verse numbers from the generated answer
    chapter_verse_numbers = re.findall(r'Chapter (\d+), Verse (\d+)', answer)

    # Initialize lists to store chapters, verses, shlokas, and translations
    chapters = []
    verses = []
    shlokas = []
    translations = []

    # Get the chapters, verses, shlokas, and translations for each chapter and verse
    for chapter, verse in chapter_verse_numbers:
        # Search the dataset for matching chapter and verse numbers
        matching_rows = df[(df['Chapter No'] == int(chapter))
                           & (df['Verse No'] == int(verse))]

        # Check if matching rows are found
        if len(matching_rows) > 0:
            chapters.append(int(chapter))
            verses.append(int(verse))
            shlokas.extend(matching_rows['Shloka'].values)
            translations.extend(matching_rows['English Translation'].values)

    # Prepare the response
    response_data = {
        "question": question,
        "answer": answer,
        "chapters": chapters,
        "verses": verses,
        "shlokas": shlokas,
        "translations": translations
    }

    return response_data


# Run the Flask application
if __name__ == '__main__':
    app.run()
