import React from 'react';

function Siform() {
  return (
    <div>
      <style>
        {`
        :root {
          --box-height: 40px;
          --border-radius: 5px;
          --space-between: 20px;
          --font-size: 16px;
      
          --color-0: #ffffff;
          --color-1: #dcdcdd;
          --color-2: #c5c3c6;
          --color-3: #212529;
          --color-4: #659b5e;
          --color-5: #ce4257;
        }
        
        * {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          box-sizing: border-box;
        }
        
        body {
          padding: 0 10px;
          {/* background-image: url("https://i.pinimg.com/736x/18/b4/38/18b4381229b7ee8651be1e9eecb250c4.jpg"); */}
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center center;
        }
        
        #survey-container {
          margin: 20px auto;
          padding: 30px 20px;
          width: 100%;
          max-width: 840px;
          border-radius: calc(3 * var(--border-radius));
        }
        
        #title {
          margin: 30px 0;
          text-align: center;
          font-family: "Kumbh Sans", sans-serif;
          font-size: 50px;
          text-transform: capitalize;
          color: var(--color-3);
        }
        
        #description {
          margin: 30px 0;
          padding: 5px;
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          color: var(--color-3);
        }
        
        #survey-form {
          padding: 30px;
          padding-top: 20px;
          background: var(--color-1);
          {/* opacity: 98%; */}
          border: none;
          border-radius: calc(2 * var(--border-radius));
        }
        
        #survey-form * {
          font-size: var(--font-size);
        }
        
        .row-label,
        .row-input {
          padding: 5px 10px;
          margin: 0;
          height: var(--box-height);
          width: 100%;
          display: block;
        }
        
        .row-label {
          color: var(--color-3);
          font-weight: 600;
        }
        
        .row-label:not(:first-child) {
          margin-top: var(--space-between);
        }
        
        .row-input:not(.small) {
          background: white;
          border: none;
          border-radius: var(--border-radius);
        }
        
        .inline-label {
          margin-left: 10px;
          font-size: 14px;
          color: var(--color-3);
        }
        
        .small {
          height: calc(var(--box-height) * 0.75);
        }
        
        #comments {
          padding: 10px;
          margin: 0;
          height: 120px;
          width: 100%;
          background: white;
          border: none;
          border-radius: var(--border-radius);
          resize: none;
        }
        
        #submit {
          margin-top: calc(2 * var(--space-between));
          height: var(--box-height);
          width: 100%;
          background: var(--color-4);
          border: none;
          border-radius: var(--border-radius);
          color: white;
          font-weight: 600;
          cursor: pointer;
          text-transform: capitalize;
        }
        
        #submit:hover {
          box-shadow: 0 0 2px var(--color-3);
        }
        `}
      </style>

      <div id="survey-container">

        <h1 id="title">Job form</h1>

        <p id="description">Fill in to apply</p>

        <form id="survey-form">

          {/* name */}
          <label id="name-label" className="row-label" htmlFor="name">Name:</label>
          <input id="name" className="row-input" type="text" placeholder="Enter your name" required />

          {/* email */}
          <label id="email-label" className="row-label" htmlFor="email">Email:</label>
          <input id="email" className="row-input" type="email" placeholder="Enter your email" required />

          {/* education dropdown */}
          <label className="row-label" htmlFor="dropdown">Level of education:</label>
          <select id="dropdown" className="row-input" required>
            <option disabled selected>Select an option</option>
            <option value="primary">Primary education</option>
            <option value="secondary">Secondary education</option>
            <option value="higher">Higher education</option>
            <option value="na">No answer</option>
          </select>

          {/* years of experience */}
          <label id="number-label" className="row-label" htmlFor="number">Years of experience (optional):</label>
          <input id="number" className="row-input" type="number" placeholder="Enter number of years of experience" min="0" max="50" />

          {/* programs checkbox */}
          <p className="row-label">Known programs:</p>

          <label className="row-input small" htmlFor="box-windows">
            <input type="checkbox" id="box-windows" name="checkbox" value="windows" />
            <span className="inline-label">Windows</span>
          </label>

          {/* More checkbox labels go here */}

          {/* salary radio */}
          <p className="row-label">Expected salary:</p>

          <label className="row-input small" htmlFor="below-3k">
            <input type="radio" id="below-3k" name="radio" value="below-3k" />
            <span className="inline-label">Below $3K</span>
          </label>

          {/* More radio button labels go here */}

          {/* comments textarea */}
          <label className="row-label" htmlFor="comments">Additional informations:</label>
          <textarea id="comments" placeholder="Enter other informations here..."></textarea>

          {/* submit button */}
          <button id="submit" type="submit">Submit</button>

        </form>

      </div>
    </div>
  );
}

export default Siform;
