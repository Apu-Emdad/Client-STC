import React from "react";

import { HashLink } from "react-router-hash-link";
import image from "../Assets/Images/Group 76721.png";
import Dropdown from "./Dropdown";

const BlogContent = () => {
  return (
    <div className="BlogContent">
      <div className="sideNav">
        <HashLink to="#intro">
          <p style={{ fontWeight: "Bold", opacity: 1 }}>Intro</p>
        </HashLink>
        <HashLink to="/blog#RedRover">
          <p>Red Rover</p>
        </HashLink>
        <HashLink to="/blog#GymnasticTalentShow">
          <p>Gymnastic Talent Show</p>
        </HashLink>
        <HashLink to="/blog#eliminationRunning">
          <p>Elimination Running</p>
        </HashLink>
        <HashLink to="/blog#title">
          <p>Conclusion</p>
        </HashLink>
      </div>

      <Dropdown />
      <div className="content">
        <div className="content-paragraph">
          <p id="intro">
            Learning some fun PE games that don’t need equipment can be very
            useful for busy PE teachers, parents and child care professionals.
            They can help you provide the children you are caring for with fun
            activities that improve their fitness – without the need to pull out
            a cupboard full of equipment.
            <br />
            <br />
            PE games that don’t need equipment are also useful as impromptu
            activities at BBQs, parties, and trips away. In this guide, I will
            be sharing three of the best PE games needing no equipment.
          </p>

          <h3 id="RedRover">Red Rover</h3>

          <p>
            This classic game is a lot of fun and easy to learn. In Red Rover,
            the participants are split into two teams of equal size that form
            two lines opposite each other. The members of each team will hold
            hands. Each team will choose a player from the opposing team, saying
            “Red Rover Red Rover, send Peter over” to nominate Peter. Peter then
            has to let go of his team mates hands and attempt to run through the
            other team’s line, breaking their hold on each other.
          </p>

          <h3 id="GymnasticTalentShow">Gymnastic Talent Show</h3>

          <p>
            Have the students split into groups of 3-4 children each and ask
            them to devise a short gymnastic routine that shows off their
            skills. Encourage them to do their best, but remind them to only
            perform stunts they are comfortable with.
          </p>

          <img src={image} alt="" />

          <p>
            During the next 10 minutes, walk between the groups and help them
            plan their routines, suggesting gymnastic feats appropriate for
            their skill levels. Remind them that they can help each other
            perform their rolls, handstands, and jumps. After the 10 minutes has
            expired, have the groups perform their routines for each other.
          </p>

          <h3 id="eliminationRunning">Elimination Running</h3>

          <p>
            This exhausting game will help you discover which kids are the
            fastest in the class.Have your students line up against a wall of
            the gymnasium. When you say “Ready, Go!”, they will run to the other
            wall. If you say “Ready, Go!” again while they are running towards
            the wall, they must turn back and reach the wall that they came
            from. If you blow your whistle, any student who hasn’t reached the
            wall will be eliminated. Eventually, you will only have a small
            number of children left in the group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
