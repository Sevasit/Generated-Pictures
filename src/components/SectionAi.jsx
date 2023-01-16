import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Typed from "react-typed";
import Fetch from "./fetch/Fetch";
import Error from "./Error";

const configuration = new Configuration({
  apiKey: "<<YOUR API KEY>>",
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
      setError("Something went wrong !");
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
    <section className="font-medium">
      <div className="max-w-[900px] w-full h-[650px] md:h-[900px] lg:h-screen mx-auto text-center flex flex-col py-5 items-center rounded-xl">
        <h1 className="text-xl md:text-2xl tracking-widest uppercase text-violet-800">
          <Typed
            strings={[`Generate Image By OpenAI`]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h1>
        <form onSubmit={generateHandler} className="mt-5">
          <input
            type="text"
            value={text}
            onChange={handlerChageText}
            placeholder="Text here!"
            className="transition duration-500 p-2 mr-2 rounded-lg bg-slate-200 text-black focus:bg-violet-500 focus:text-white focus:placeholder-white placeholder-black shadow-xl text-center border"
            required
          />
          <button
            className="transition duration-500 text-black bg-slate-200 py-2 px-2 rounded-lg mx-auto mt-5 font-medium shadow-xl hover:text-white hover:bg-violet-500 "
            type="submit"
          >
            Generate Image
          </button>
        </form>
        <Fetch fetch={fetch} />
        <Error error={error} />
        <div className="mt-10">
          {image && (
            <img
              className="mx-auto w-[300px] h-[300px] rounded-xl shadow-xl md:w-[500px] md:h-[500px] border-4 border-violet-900"
              src={image}
              alt="generatePic"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionAi;
