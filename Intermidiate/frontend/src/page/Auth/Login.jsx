import React from "react";
import Pointer from "../../component/Pointer";
import "./Login.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [User, setUser] = useState("");
  const [create_a_password, set_create_a_password] = useState(".");
  const [confirm_a_password, set_confirm_a_password] = useState("");
  const [match, setMatch] = useState(false);

  const [changeed_val, set_changed_val] = useState(true);

  useEffect(() => {
    if (create_a_password === "" && confirm_a_password === "") {
      setMatch(true);
    } else {
      setMatch(create_a_password === confirm_a_password);
    }
  }, [create_a_password, confirm_a_password]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (match && confirm_a_password != "" || confirm_a_password != " ") {

      try {
        
        const response = await axios.post("http://localhost:3500/all/user", {
          name: User,
          password: confirm_a_password,
        });
        console.log(response);

        setTimeout(() => {
            location.assign("/dashboard")
        }, 1000);

        
      } catch (error) {
        console.error(error.message)
      }
    } else {
      alert("Fill in a valid password")
      return;
    }
  }

  function create_my_password(e) {
    set_create_a_password(e.target.value);
  }

  function confirm_matching_passwords(e) {
    set_confirm_a_password(e.target.value);
  }

  return (
    <section id="login_page">
      <Pointer />

      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h2>Sign Up</h2>
          <hr />
        </div>

        <main>
          <span>
            <label htmlFor="">Username</label>
            <br />
            <input
              value={User}
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </span>
          <br />
          <span>
            <label htmlFor="">Create Password</label>
            <br />
            <input
              type="password"
              name=""
              id=""
              onChange={(e) => {
                create_my_password(e);
              }}
            />
          </span>
          <br />
          <span>
            <label htmlFor="">Confirm Password</label>
            <br />
            <input
              type="password"
              name=""
              id=""
              onChange={(e) => {
                confirm_matching_passwords(e);
              }}
            />
            <br />

            {match != true ? (
              <p id="no_match" className="password-message">
                Passwords Do Not Match 😭
              </p>
            ) : (
              <p id="match" className="password-message">
                Yay! They match 🌟
              </p>
            )}
          </span>
        </main>

        <footer>
          <hr />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </footer>
      </form>
    </section>
  );
}

export default Login;
