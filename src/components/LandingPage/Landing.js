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
                    <input type="radio" id="question-one-answer-one" name="yes" />
                    <label>yes</label>
                    <input type="radio" id="question-one-answer-two" name="no" />
                    <label>no</label>
                </div>

                <div className="question-two">
                    <h4>Choose the best description of how you feel right now?</h4>
                    <input type="radio" id="question-two-answer-one" name="yes" />
                    <label>yes</label>
                    <input type="radio" id="question-two-answer-two" name="no" />
                    <label>no</label>

                </div>

                <div></div>

                <input type="submit" value="Submit" />
             </form>
        </div>
    </div>
  )
}

export default Landing