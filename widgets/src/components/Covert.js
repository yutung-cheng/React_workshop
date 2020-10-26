import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  //Create a piece of state to store the translated text.
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    //Helper function and mark it as async
    const doTranslation = async () => {
      //we only need Data property -> Just distructor out {data}
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        //Query String parameters
        //We dont send along any information in the body of the request.
        //instead we want to provide the third argument to a Second object.
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
          }
        }
      );
      //Pull translated text out of the data object
      //The first data is the information inside of the Axios response.
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
