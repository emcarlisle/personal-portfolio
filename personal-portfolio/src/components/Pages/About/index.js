import React from "react";

function About() {
  return (
    <main className="container-fluid" id="home-pg">
      <section id="about-me-section" style="position: relative;">
        <img
          src="assets/images/website-photo.jpeg"
          id="website-photo"
          className="img-fluid border border-dark rounded"
          alt="bio-photo"
        />
        <div style="position: absolute;" id="photo-credit">
          Photo By: K-9
        </div>
        <h1 className="header">Get to Know Me</h1>
        <p className="text-break" id="bio">
          When I was 13, I learned the essence of working by volunteering with
          my mother at Salvation Army. I learned that helping people, connecting
          with them became a passion of mine. Throughout high school, I worked a
          part time job as a line cook and I discovered my love for the culinary
          arts and decided to pursue that and elevate my skills in customer
          relations and culinary. I moved my way up from line cook to a chef
          position and I thought that's where I wanted to be. After years of
          being in the back of the house making food for people and their loved
          ones, I felt something was missing. I realized I lost that passion,
          that motivation that drove me to where I'm at today. I took a step
          back and asked myself what I wanted. I wanted to seek more, I wanted
          to learn more. I finally decided to pursue my dreams of becoming a
          coder and I'm grateful for that decision as I know that coding is
          something that is forever evolving; there would always be something
          new for me to learn and connecting with people came with the
          territory. I am humble for my background in the service and food
          industry. It taught me hard work, patience, and how to work with
          people who don't see things the same way that I do. It taught me
          leadership and how to take initiative and get my team to work smarter.
          It taught me that I can learn anything. That's what I'm grateful for
          the most. I am a Full Stack Web Developer in training and I look
          forward to using the new skills that I learned.
        </p>
      </section>
    </main>
  );
}

export default About;