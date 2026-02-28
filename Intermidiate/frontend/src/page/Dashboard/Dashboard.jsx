import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
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
import axios from "axios";

function Dashboard() {
  const pop_up_ref = useRef(null);
  const fill_up = useRef(null);
  const [search_city,set_search_city] = useState("")
  const [final_city,set_final_city] = useState("")
  const [tasks, setTasks] = useState([
    "Grind LeetCode",
    "Study Java",
    "Build React Project",
    "Read DSA",
    "Work on Backend",
    "Revise Networking",
  ]);

  const apiKey = "fb6356856934ea0586921de06e6d397d";
  const the_date = new Date();
  const day_in_numbers = the_date.getDay();
  const [current_task, set_current_task] = useState("");
  const [my_cal, set_my_cal] = useState([]);

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
      prev - itemsPerPage >= 0 ? prev - itemsPerPage : prev,
    );
  };

  const change_curr_task = (e) => {
    set_current_task(e.target.value);
  };

  function clear_pop() {
    pop_up_ref.current.classList.toggle("show_cover");
  }

  function add_task() {
    const task_in_safe = tasks;
    task_in_safe.push(current_task);
    clear_pop();
  }
  
  function task_init() {
    fill_up.current.focus()
    clear_pop();
  }

 async function get_the_weather(city) {
     // This Api is for the Weather
     try {
      const res_weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
    
      return res_weather.data;
    
    } catch (error) {
      console.error("Weather fetch failed:", error);
      return null;
    }
  }


  useEffect(() => {
    const fetchCalendar = async () => {
      try {

        // This Api is for the calendar
        const res = await axios.get("http://localhost:3500/all/calendar");
        set_my_cal(res.data);
        console.log(res.data);
        
       


      } catch (e) {
        alert("We have a problem fetching calendar");
      }
    };
    fetchCalendar();
  }, []);

  const find_a_city = (e) => {
    set_search_city(e.target.value);
  }

  const [the_temp , set_the_temp] = useState(0);
  const [the_humidity , set_the_humidity] = useState(0);
  const [the_city , set_city] = useState(0);
  const [the_desc , set_the_desc] = useState(0);

  const handleInput = async (e) => {
    if (e.key === "Enter") {
  
      const my_city = await get_the_weather(search_city);
  
      const {
        name: city,
        main: { temp, humidity },
        weather: [{ description }]
      } = my_city;
  
      set_the_temp((temp - 273).toFixed());
      set_the_humidity(humidity);
      set_city(city);
      set_the_desc(description);
    }
  };

  const dark_mode = useRef(null);

  function dark_trigger() {
    dark_mode.current.classList.toggle("dark-mode");
  }



  return (
    <section id="dashboard_outer" ref={dark_mode} className="dark-mode">
      <Pointer />

      <section className="dashboard_inner ">
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
              <FontAwesomeIcon icon={faLightbulb} onClick={() => dark_trigger() } />
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
              <br />
              <div id="days_message">
                <p id="message">
                  Stay consistent. Stay sharp. That’s real growth
                </p>
                <br />
              </div>

              <div id="control_btn">
                {/* <button>Pomodoro</button> */}

                <button onClick={() => task_init()}>Set Task</button>
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
                {my_cal[0]?.days.map((i) => (
                  <span className="number">{i + 1}</span>
                ))}
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
                    <input type="text" onKeyDown={(e) => handleInput(e)} onChange={(e) => find_a_city(e)} />
                  </span>
                </div>

                <div id="display_the_weather">
                  <span>
                  <h1>{the_temp ? the_temp : 0}°C</h1>
                  <h2>{the_desc ? the_desc: <p>No data yet</p>}</h2>
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
                      <p>{ the_humidity && the_humidity || 0}</p>
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
                    <button
                      onClick={handlePrevious}
                      style={{ marginTop: "10px" }}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={handleNext} style={{ marginTop: "10px" }}>
                      <FontAwesomeIcon icon={faArrowRight} />
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

      <section ref={pop_up_ref} className="dashboard_popup_cover">
        <div id="dashboard_popup_inner">
          <div id="close_space">
            <p>
              <FontAwesomeIcon icon={faClose} onClick={() => clear_pop()} />
            </p>
          </div>

          <br />

          <div id="pop_up_caption">
            <h3>Write Out A Task</h3>
            <p>This Popup lets you write out a task</p>
          </div>

          <br />

          <div id="fill_out_task">
            <label>My Task</label>

            <input type="text" ref={fill_up} onChange={(e) => change_curr_task(e)} />
          </div>

          <button id="confirm_task" onClick={() => add_task()}>
            {" "}
            Accept
          </button>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
