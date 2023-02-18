import { useState } from 'react';
import { Configuration, OpenAIApi  } from 'openai';
import './App.css';

function App() {

  const [prompt, setPrompt] = useState('');

  const [result, setResult] = useState('');

  // configuring apikey
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  // generating images
  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });

    console.log(response.data.data[0].url);
    setResult(response.data.data[0].url);
  };


  /* if the result is not 0, display image with src=result, otherwise display empty element */
  return (
    <div className='app-main'>
      <h3>Generate and image using OpenAI API</h3>
      <input 
        className='app-input'
        placeholder='Type here to generate an image' 
        onChange={(e) => setPrompt(e.target.value)}/>
      <button onClick={generateImage}>Generate an image</button>

      {result.length > 0 ? <img className='result-image'src={result} alt="result"></img> : <> </>} 
    </div>
  )
}

export default App
