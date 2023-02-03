import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const API_KEY = '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';

function App() {
  const [tweet, setTweet] = useState('');
  const [sentiment, setSentiment] = useState('');

  async function callOpenAIAPI() {
    console.log('Calling OpenAIAPI.....');

    //   -H "Content-Type: application/json" \
    //   -H "Authorization: Bearer $OPENAI_API_KEY" \

    const APIBody = {
      model: 'text-davinci-003',
      prompt: 'What is the sentiment of this tweet ? ' + tweet,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setSentiment(data.choices[0].text.trim());
      });
  }

  console.log(tweet);

  return (
    <div className="App">
      <div>
        <textarea
          onChange={(e) => setTweet(e.target.value)}
          placeholder="Paste your tweet here !"
          cols={59}
          rows={10}
        ></textarea>
      </div>
      <div>
        <button onClick={callOpenAIAPI}>
          Get the tweet sentiment from OpenAI API
        </button>
        {sentiment !== '' ? <h3>This Tweet Is: {sentiment}</h3> : null}
      </div>
    </div>
  );
}

export default App;
