"use client";

export default function TestButton() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
        color: "#fff",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#e91e63",
          border: "none",
          borderRadius: "8px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Test Button
      </button>
    </div>
  );
}
