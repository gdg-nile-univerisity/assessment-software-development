import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import Pointer from "../../component/Pointer";
import "./Home.css";
import landing from "./../../../public/landing.jpg";

function Home() {
  function nav_to_next_pge() {
    setTimeout(() => {
      location.assign("/login");
    }, 1500);
  }

  return (
    <section id="home_page_outer">
      
    <Pointer />

      <main id="home_page_inner">
        {/* <img src={mascot} alt="" id='mascot'/> */}
        <h2>Pugsley</h2>
        <p>
          Pugsley is a friendly productivity companion designed to help you
          organize your tasks, manage your time, and stay focused without the
          stress or overwhelm of traditional productivity tools.
        </p>
        <div id="home_btns">
          <button onClick={() => nav_to_next_pge()}>Start Today</button>
          <button>Get a Sneak Peak</button>
        </div>
        <br />
        <img id="lnd_pge" src={landing} alt="" draggable="true" />

        <footer>
          <Link
            id="fig-ico"
            to={
              "https://www.figma.com/proto/sUnL96XknZfUsKPG5YUyeX/Untitled?node-id=0-1&t=kb3ZlIg7Ic3b3tUL-1"
            }
          >
            <FontAwesomeIcon icon={faFigma} />
          </Link>
        </footer>
      </main>
    </section>
  );
}

export default Home;
