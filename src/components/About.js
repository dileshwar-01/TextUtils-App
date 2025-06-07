import React from "react";

export default function About(props) {
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#1E293B' : 'white',
  }

  return (
    <div className="container">
      <h1 className="my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={mystyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>TextUtils is a simple yet powerful text utility tool.</strong> 
              It allows users to modify and analyze their text efficiently. 
              Whether you need to convert text to uppercase or lowercase, remove extra spaces, or copy text easily, 
              TextUtils provides a clean and easy-to-use interface to get the job done.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features of TextUtils
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>TextUtils offers multiple features to make text manipulation easier:</strong>
              <ul>
                <li>Convert text to **Uppercase** or **Lowercase** instantly.</li>
                <li>Remove **extra spaces** to clean up formatting.</li>
                <li>Copy text with a single click using the **Copy to Clipboard** feature.</li>
                <li>Get an instant **word and character count** for your text.</li>
                <li>Dark Mode support for better readability at night.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Use TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>TextUtils is perfect for students, writers, and developers.</strong> 
              Whether you're writing an essay, analyzing data, or formatting text for coding, 
              TextUtils helps you streamline your workflow. It's a lightweight and fast web app 
              that requires no installation—just open the website and start editing your text instantly!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
