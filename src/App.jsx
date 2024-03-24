import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleTheme, setTheme } from "./redux/Slices/UserSlice";
import { FiSun, FiMoon } from "react-icons/fi";
import "./App.css";

function App() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  const getThemeStyles = () => {
    if (theme === "dark") {
      return {
        backgroundColor: "#000000",
        color: "#ffffff",
      };
    } else {
      return {
        backgroundColor: "#ffffff",
        color: "#000000",
      };
    }
  };

  return (
    <div className="App" style={getThemeStyles()}>
      <div className="content">
        <button className="buttonStyle" onClick={toggleThemeHandler}>
          {theme === "dark" ? <FiSun className="lightMode" /> : <FiMoon className="darkMode" />}
        </button>
        <p>This is {theme === "dark" ? "Dark" : "Light"} Theme</p>
      </div>
    </div>
  );
}

export default App;
