import React from "react";
import { useTheme } from '../context/ThemeContext';

function BlogPage() {
  const { darkMode } = useTheme();
  
  return (
    <div style={{ padding: "20px", backgroundColor: darkMode ? "#1f2937" : "#dbeafe" }}>
      <h1 style={{ color: darkMode ? "white" : "black" }}>Blog Page Works!</h1>
      <p style={{ color: darkMode ? "#e5e7eb" : "#374151" }}>
        Dark mode is: {darkMode ? "ON" : "OFF"}
      </p>
      <p>If you can see this, routing and theme are working.</p>
    </div>
  );
}

export default BlogPage;
