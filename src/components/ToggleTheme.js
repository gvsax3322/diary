import React from "react";
import { useRecoilState } from "recoil";
import { themeMode } from "../store/ThemeState";
import { motion } from "framer-motion";

const ToggleButton = motion.button;

const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(themeMode);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ToggleButton
        onClick={toggleTheme}
        whileHover={{
          scale: 1.05,
          backgroundColor: theme === "light" ? "#f0f0f0" : "#2c2c2c",
          color: theme === "light" ? "#333333" : "#ffffff",
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 100,
          height: 30,
          fontSize: 20,
          borderRadius: 10,
          backgroundColor: theme === "light" ? "#ffffff" : "#333333",
          color: theme === "light" ? "#333333" : "#ffffff",
          border: `2px solid ${theme === "light" ? "#cccccc" : "#666666"}`,
          outline: "none",
          cursor: "pointer",
          paddingBottom: 2,
        }}
      >
        {theme === "light" ? "🌝" : "🌚"}
      </ToggleButton>
    </div>
  );
};

export default ToggleTheme;
