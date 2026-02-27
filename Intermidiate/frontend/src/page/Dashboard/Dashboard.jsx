import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faPenFancy,
  faDroplet,
  faWind,
  faCloud,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Pointer from "./../../component/Pointer";
import { faLightbulb, faMeh } from "@fortawesome/free-regular-svg-icons";
import "./Dashboard.css";
import avatar from "./../../assets/avatar.png";
import fire from "./../../assets/fire.png";
import cloud from "./../../assets/cute_cloud.png";

function Dashboard() {
  const [tasks, setTasks] = useState([
    "Grind LeetCode",
    "Study Java",
    "Build React Project",
    "Read DSA",
    "Work on Backend",
    "Revise Networking",
  ]);

  const the_date = new Date();
  const day_in_numbers = the_date.getDay();

  let day_in_words;

  switch (day_in_numbers) {
    case 0:
      day_in_words = "Sunday";
      break;
    case 1:
      day_in_words = "Monday";
      break;
    case 2:
      day_in_words = "Tuesday";
      break;
    case 3:
      day_in_words = "Wednesday";
      break;
    case 4:
      day_in_words = "Thursday";
      break;
    case 5:
      day_in_words = "Friday";
      break;
    case 6:
      day_in_words = "Saturday";
      break;
    default:
      day_in_words = "Unknown Day";
  }

  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < tasks.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

   const handlePrevious = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage >= 0
        ? prev - itemsPerPage
        : prev
    );
  };

  return (
    <section id="dashboard_outer">
      <Pointer />

      <section id="dashboard_inner">
        <header>
          <div id="circles">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>

          <nav>
            <li>
              <FontAwesomeIcon icon={faGear} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLightbulb} />
            </li>
            <li>
              <FontAwesomeIcon icon={faMeh} />
            </li>
          </nav>
        </header>

        <main id="main_page">
          {/* The Side Bar #1 */}
          <aside id="aside-1">
            {/* Pugsley says hello 👋 */}
            <div className="box greeting">
              {/* Greets based on the day of the week */}
              <div id="day_of_the_week">
                <h2>It's {day_in_words}</h2>
              </div>

              <div id="days_message">
                <p id="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  commodi quos deserunt reiciendis quis id.
                </p>
              </div>

              <div id="control_btn">
                <button>Pomodoro</button>

                <button>Set Task</button>
              </div>
            </div>

            {/* This part displays a calendar */}
            <div className="box calendar">
              <div id="calendar_prt1">
                {/* Calendar Caption */}
                <span id="cal_cap">
                  <h2>Calendar</h2>

                  <div id="calendar_controls">
                    <button></button>
                    <button></button>
                  </div>
                </span>

                <p>February</p>
              </div>

              <div id="calendar_num">
                <span className="number">1</span>
                <span className="number">2</span>
                <span className="number">3</span>
                <span className="number">4</span>
                <span className="number">5</span>
                <span className="number">6</span>
                <span className="number">7</span>
                <span className="number">8</span>
                <span className="number">9</span>
                <span className="number">10</span>
                <span className="number">11</span>
                <span className="number">12</span>
                <span className="number">13</span>
                <span className="number">14</span>
                <span className="number">15</span>
                <span className="number">16</span>
                <span className="number">17</span>
                <span className="number">18</span>
                <span className="number">19</span>
                <span className="number">20</span>
                <span className="number">21</span>
                <span className="number">22</span>
                <span className="number">23</span>
                <span className="number">24</span>
                <span className="number">25</span>
                <span className="number">26</span>
                <span className="number">27</span>
                <span className="number">28</span>
                <span className="number">29</span>
                <span className="number">30</span>
                <span className="number">31</span>
              </div>
            </div>

            {/* This part let's u create an avatar */}
            <div className="box avatar">
              <h2>Create an Avatar</h2>
              <img src={avatar} alt="" />
              <button>
                <FontAwesomeIcon icon={faPenFancy} />
              </button>
            </div>
          </aside>

          {/* The Side Bar #1 */}
          <aside id="aside-2">
            <div class="house split">
              <article>
                {/* This part let's you pick a country */}
                <div id="pick_country">
                  <p>Weather</p>

                  <span id="search_me">
                    <input type="text" />
                  </span>
                </div>

                <div id="display_the_weather">
                  <span>
                    <h1>12 °C</h1>
                    <h2>Cloudy</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </span>

                  <span>
                    <img src={cloud} alt="" />
                  </span>
                </div>

                <div id="add_info">
                  {/* <hr /> */}
                  <div id="actual_add_info">
                    <span>
                      <FontAwesomeIcon icon={faDroplet} />
                      <p>64</p>
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faWind} />
                      <p>64</p>
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCloud} />
                      <p>64</p>
                    </span>
                  </div>
                </div>
              </article>

              <article id="outer_todo">
                <div id="inner_todo">
                  {tasks
                    .slice(startIndex, startIndex + itemsPerPage)
                    .map((task, index) => (
                      <span key={index}>
                        <label>{task}</label>
                        <input type="checkbox" />
                      </span>
                    ))}
                  
                  <div id="next_prev">
                <button onClick={handlePrevious} style={{ marginTop: "10px" }}>

                      <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <button onClick={handleNext} style={{ marginTop: "10px" }}>

                      <FontAwesomeIcon icon={faArrowRight}/>
                </button>
                  </div>
                </div>
              </article>
            </div>

            <div class="house">
              <article>
                <div>
                  <img src={fire} alt="fire" />
                </div>

                <div>
                  <h2>View your Streak</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consequuntur repellendus nobis sint nihil doloremque
                    assumenda rem amet accusantium est voluptas?
                  </p>

                  <div id="streak_btn">
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </article>

              <article></article>
            </div>
          </aside>
        </main>
      </section>
    </section>
  );
}

export default Dashboard;
