import { useState } from "react";
import { FaQuoteLeft, FaTwitterSquare } from "react-icons/fa";
import { FaSquareTumblr } from "react-icons/fa6";
import listQuote from './assets/listQuote';

function App() {
  const colorList = ["#472e32", "#169D83", "#27AE60", "#16A085", "#9B59B6", "#73A857", "#342224", "#E74C3C", "#BDBB99", "#FB6964", "#F39C12", "#2C3E50"];
  
  const [quote, setQuote] = useState(Object);
  const [randomColor, setRandomColor] = useState("");

  const handleNewQuote = () => {
    setQuote(listQuote[Math.floor(Math.random() * listQuote.length)]);
    setRandomColor(colorList[Math.floor(Math.random() * colorList.length)]);
  }

  const handleFirstLoad = () =>{
    setRandomColor(colorList[Math.floor(Math.random() * colorList.length)]);
    handleNewQuote(listQuote[Math.floor(Math.random() * listQuote.length)]);
  }

  window.addEventListener("load", handleFirstLoad);  // Run the handleFirstLoad function when the page is fully loaded

  return (
    <div className="backgound" style={{backgroundColor: randomColor, transition: "all 1s"}}>
      <div id="wrapper">
        <div id="quote-box" style={{borderColor: randomColor}}>
          <div className="quote-text" id="text"
          style={{
            color: randomColor,
          }}
          >
            <FaQuoteLeft style={{marginRight: "10px"}}/>
            {quote.quote}
          </div>
          <div className="quote-author"
          style={{
            color: randomColor,
          }}
          >
            <span id="author">- {quote.author}</span>
          </div>
          <div className="buttons">
            <div className="buttons-icons">
              <a target="_blank" id="tweet-quote" title="Tweet this quote!" href="twitter.com/intent/tweet"><FaTwitterSquare className="faTwitterSquare" style={{color: randomColor}}/></a>
              <a target="_blank" title="Post this quote on tumblr!" href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DGrandma%2BMoses%26content%3DLife%2Bis%2Bwhat%2Bwe%2Bmake%2Bit%252C%2Balways%2Bhas%2Bbeen%252C%2Balways%2Bwill%2Bbe.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"><FaSquareTumblr className="faSquareTumblr" style={{color: randomColor}}/></a>
            </div>
            <div className="buttons-newQuote">
              <button id="new-quote" type="button" onClick={handleNewQuote}
              style={{backgroundColor: randomColor, borderColor: randomColor}}
              >New quote</button>
            </div>
          </div>
        </div>
        <div className="footer">
          by <a href="https://codepen.io/hezag/">hezag</a>
        </div>
      </div>
    </div>
  )
}

export default App
