import * as styles from "./App.module.css";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useMatch,
  useLocation,
  useParams,
} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav style={{ backgroundColor: "wheat" }}>
        <Link to="/">Main</Link>
        <a href=""></a>
        <span>{"   "}</span>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route
          path="/about"
          element={
            <div>
              About <button onClick={() => navigate("/")}>login</button>
            </div>
          }
        />

        <Route index path="/news" element={<div>News</div>} />
        <Route path="/news/:newsId" element={<NewsPost />} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

const NewsPost = () => {
  const params = useParams();

  console.log(params);
  return <div>{params.newsId}</div>;
};

export default App;
