import React from "react";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const SectionAi = () => {
  return <div>SectionAi</div>;
};

export default SectionAi;
