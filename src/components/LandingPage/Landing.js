import React, {useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import "./Landing.css";

const Landing = () => {
    const [song, setSong] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .get(`http://localhost:3333/api/getSong`)
            .then((res) => {
                setSong(res.data);
                console.log(res.data);
            });
    };

  return (
    <div className='landing-page'>
        <div>
            <Header />
        </div>

        <div>
             <form onSubmit={handleSubmit}>
                <div className='question-one'>
                    <h4> Did you cry today? </h4>
                    <input type="radio" id="question-one-answer-one" name="radio-one" />
                    <label>yes</label>
                    <input type="radio" id="question-one-answer-two" name="radio-one" />
                    <label>no</label>
                </div>

                <div className="question-two">
                    <h4>Choose the best description of how you feel right now?</h4>
                    <input type="radio" id="question-two-answer-one" name="radio-two" />
                    <label>troubled</label>
                    <input type="radio" id="question-two-answer-two" name="radio-two" />
                    <label>content</label>
                    <input type="radio" id="question-two-answer-three" name="radio-two" />
                    <label>mad</label>
                    <input type="radio" id="question-two-answer-four" name="radio-two" />
                    <label>pumped</label>
                </div>

                <div className="question-three">
                    <h4>If you could travel to any of these destinations right now, which would it be?</h4>
                    <input type="radio" id="question-three-answer-one" name="radio-three" />
                    <label>yes</label>
                    <input type="radio" id="question-three-answer-two" name="radio-three" />
                    <label>no</label>
                </div>

                <div className="question-four">
                    <h4>Do you miss anyone right this moment?</h4>
                    <input type="radio" id="question-four-answer-one" name="radio-four" />
                    <label>always</label>
                    <input type="radio" id="question-four-answer-two" name="radio-four" />
                    <label>nope</label>
                    <input type="radio" id="question-four-answer-three" name="radio-four" />
                    <label>just a little</label>
                    <input type="radio" id="question-four-answer-four" name="radio-four" />
                    <label>yes, but I really shouldn't</label>
                </div>

                <div className="question-five">
                    <h4>What weather would you change outside to?</h4>
                    <input type="radio" id="question-five-answer-one" name="radio-five" />
                    <label>sunny and warm</label>
                    <input type="radio" id="question-five-answer-two" name="radio-five" />
                    <label>light rain </label>
                    <input type="radio" id="question-five-answer-three" name="radio-five" />
                    <label>snowy</label>
                    <input type="radio" id="question-five-answer-four" name="radio-five" />
                    <label>grey and cloudy</label>
                    <input type="radio" id="question-five-answer-five" name="radio-five" />
                    <label>hot hot hot</label>
                </div>

                <div></div>

                <input type="submit" value="Submit" />
             </form>
        </div>
    </div>
  )
}

export default Landing