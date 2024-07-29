import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { increment, decrement, incrementByAmount } from "./counter";

const App = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [facts, setFacts] = useState([]);

  const getRandomFacts = () => {
    return axios({
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts/random",
      params: {
        amount: 2,
      },
    });
  };

  const getRandomFact = () => {
    return axios({
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts/random",
    });
  };

  useEffect(() => {
    Promise.race([getRandomFacts(), getRandomFact()]).then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <>
      <nav style={{ backgroundColor: "wheat" }}>
        <Link to="/">Main</Link>
        <a href=""></a>
        <span>{"   "}</span>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Main Fact:
              {facts.map((fact) => (
                <p>{fact}</p>
              ))}
              <button
                onClick={() => {
                  dispatch(increment());
                }}
              >
                +1
              </button>
              <button
                onClick={() => {
                  dispatch(decrement());
                }}
              >
                -1
              </button>
              <button
                onClick={() => {
                  dispatch(incrementByAmount(10));
                }}
              >
                +10
              </button>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              About <button onClick={() => navigate("/")}>login</button>
            </div>
          }
        />

        <Route index path="/news" element={<div>News</div>} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;
