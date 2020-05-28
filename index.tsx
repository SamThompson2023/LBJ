import ReactDom from "react-dom";
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function VisitFarallon() {
  return (
    <div>
      <p> Visit Farallon </p>
      <button onClick={() => window.open("https://www.faralloncapital.com/")}>
        Visit Farallon
      </button>
    </div>
  );
}

function Custom() {
  var [label, setLabel] = useState("LBJ");
  var [currentLabel, setCurrentLabel] = useState("LBJ");

  return (
    <div
      style={{
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={(e) => {
        if ((currentLabel = "LBJ")) {
          setLabel("MJ");
          setCurrentLabel("MJ");
        } else {
          setLabel("LBJ");
          setCurrentLabel("LBJ");
        }
      }}
    >
      {label}
    </div>
  );
}

function CustomTwo() {
  const LebronTheGoatJames = "LBJ";
  const MJNotTheGoat = "MJ";
  var [label, setLabel] = useState(LebronTheGoatJames);

  return (
    <div
      style={{
        backgroundColor: "purple",
      }}
      onClick={(e) => {
        setLabel(MJNotTheGoat);
      }}
    >
      {label}
    </div>
  );
}

function CustomThree() {
  const goatDebate: [string, string] = ["LBJ", "MJ"];
  var [label, setLabel] = useState(goatDebate[0]);
  var [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "purple",
      }}
      onClick={(e) => {
        setCounter((counter + 1) % 2);
        setLabel(goatDebate[counter]);
      }}
    >
      {label}
    </div>
  );
}

function CustomFour() {
  const goatDebate: [string, string] = ["LBJ", "MJ"];
  var [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "purple",
      }}
      onClick={(e) => {
        setCounter((counter + 1) % 2);
      }}
    >
      {goatDebate[counter]}
    </div>
  );
}

function CustomFive() {
  //const goatDebate: [string, string] = ["LBJ", "MJ"];
  var [LBJ, setLBJ] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "purple",
      }}
      onClick={(e) => {
        setLBJ(!LBJ);
      }}
    >
      {LBJ ? (
        "LBJ"
      ) : (
        <div>
          Search Results Web results Play Snake on Google
          Mapssnake.googlemaps.com Navigate different cities around the world in
          this rendition of the classic arcade game Snake. Google
          Snakewww.google.com › fbx › fbx=snake_arcade 0. 0. End game Mute. 0.
          0. Shuffle. Play again. People also ask How do you play Snake on
          Google? What happened to the Google Snake Game? How do you get the
          rainbow snake on Google snake? What is the highest score on play
          snake? Feedback Web results Play "Snake Game" by Google -
          elgooGelgoog.im › snake Google built an online HTML5 game inspired by
          the classic arcade game Snake to welcome Chinese 2013 New Year. Not
          just any drawing — it is an actual ... Play Snake in Google Maps -
          Android - Google Maps Helpsupport.google.com › maps › answer Play
          Snake in Google Maps. Play Snake and explore famous landmarks in
          exciting cities around the world. Choose to play by yourself or with
          your friends. Videos 10:03 Google Snake TheSlickGecko YouTube - Jan
          16, 2020 5:01 Google rainbow snake completed/ tęczowy wąż ukończony
          slawek382 YouTube - Oct 11, 2018 PREVIEW 0:50 Google Maps Brings Back
          'Snake' Game CBS New York YouTube - Apr 1, 2019 PREVIEW 14:28 Google
          Snake/Wąż the game - maximum score - 252 points ... slawek382 YouTube
          - Oct 28, 2017 PREVIEW 12:14 Google Snake Game | 135 Score Splendid
          Gaming YouTube - Sep 29, 2017 1:06 How to Play Google Snake Game -
          Google Easter Egg Fidbee YouTube - Aug 27, 2019 PREVIEW 4:05 So I
          tried to play Google Snake... Ayro YouTube - Sep 27, 2019 15:00 GOOGLE
          SNAKE WORLD RECORD | Maximum Score Full ... Baklol Bunny YouTube - Sep
          24, 2019 0:58 How to play SNAKE in Google Maps - GUIDE TechBlogPool
          YouTube - Apr 1, 2019 PREVIEW 17:26 Google rainbow snake the game/
          Tęczowy wąż gameplay slawek382 YouTube - Jun 11, 2018 Web results
          Snake game - Google Chromechrome.google.com ›
          lljpgahbeilaecaaiecghpmfajfeclge Aug 18, 2019 - Move the snake around
          with the arrow keys, eat the red dots to grow bigger, and avoid
          hitting your own tail. Code functions from codepen.io. Snake Game -
          Apps on Google Playplay.google.com › store › apps › details ›
          id=com.snak... Feeling nostalgic for retro games? Download Snake Game,
          a fun classic gam
        </div>
      )}
    </div>
  );
}

function Ford() {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={(e) => {
        setCount(count + 1);
        console.log(e.clientX);
      }}
    >
      Ford{count}
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        color: "white",
        backgroundImage:
          "url('https://clutchpoints.com/wp-content/uploads/2020/05/LeBron-James-not-in-_MJ-conversation_-claims-former-Cavs-player.jpg')",
        padding: 20,
        height: 500,
        width: 1200,
        alignContent: "center",
        alignItems: "center,",
      }}
    >
      <Ford />
      <FriendStatus />
      <Custom />
      <CustomTwo />
      <CustomThree />
      <CustomFour />
      <CustomFive />
      Hello <br />
      Ask about Goat Button / How to center
      <Ford />
      <Example />
      <VisitFarallon />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("AppHome"));
