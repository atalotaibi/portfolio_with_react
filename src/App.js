import React, { Component } from "react";
import "./css/main.css";
import "./images/banner.jpg";
import "./images/pic01.jpg";
import "./images/pic02.jpg";

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <head>
          <title>Introspect by TEMPLATED</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="./css/main.css" />
        </head>
        <body>
          <header id="header">
            <div className="inner">
              <a href="./images/banner" className="logo">
                Atallah
              </a>
            </div>
          </header>

          <section id="banner">
            <div className="inner">
              <h1>“The Saudi’s strength is like that the Tuwaiq mountain.” </h1>{" "}
              <h3>
                <span>Crown Prince Mohammad Bin Salman</span>
              </h3>
              <ul className="actions" />
            </div>
          </section>

          <section id="one">
            <div className="inner">
              <header>
                <h2>A little about me:</h2>
              </header>
              <p>
                I am a Tuwaiq boot camp participant. My name is Atallah
                Alotaibi. I am a computer engineer. I have graduated in November
                2017 from Indiana University- Purdue University Indianapolis. I
                am married. I love to read about different topics because I like
                to be a conscious person.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button alt">
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="two">
            <div className="inner">
              <article>
                <div className="content">
                  <header>
                    <h3>My life’s rules: </h3>
                  </header>
                  <div className="image fit">
                    <img src="images/pic01" alt="" />
                  </div>
                  <p>
                    To be patient is my key for success; moreover, it is my key
                    for happiness after fearing my God. Also, I like to do
                    everything I can to finish my work and don’t leave any space
                    for being regret.{" "}
                  </p>
                </div>
              </article>
              <article className="alt">
                <div className="content">
                  <header>
                    <h3>Targets:</h3>
                  </header>
                  <div className="image fit">
                    <img src="images/pic02" alt="" />
                  </div>
                  <p>
                    I believe that I have a lot of skills and a lot of life
                    experience. So, I hope this is going to take me to a better
                    and better positions in my professional and social life.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="footer">
            <div className="inner">
              <header>
                <h2>Good Look For All</h2>
              </header>
            </div>
          </section>
        </body>
      </div>
    );
  }
}

export default App;
