import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const SectionAi = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [fetch, setFetch] = useState(false);
  const [error, setError] = useState(null);

  const generateHandler = async (e) => {
    e.preventDefault();
    try {
      setFetch(true);
      const response = await openai.createImage({
        prompt: text.toString(),
        n: 1,
        size: "1024x1024",
      });
      console.log(response);
      const image_url = response.data.data[0].url;
      setImage(image_url);
      setText("");
    } catch (error) {
      setError("Something went wrong!");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
    setFetch(false);
  };

  const handlerChageText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Generate Image By OpenAI</h1>
      <form onSubmit={generateHandler}>
        <input
          type="text"
          value={text}
          onChange={handlerChageText}
          placeholder="Text here!"
          required
        />
        <button type="submit">Generate Image</button>
      </form>
      {fetch && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {image && (
          <img src={image} width="500" height="500" alt="generatePic" />
        )}
      </div>
    </div>
  );
};

export default SectionAi;
