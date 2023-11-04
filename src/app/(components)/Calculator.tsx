"use client";

import CalculatorButton from "./CalculatorButton";

export default function Calculator() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        {["7", "8", "9"].map((item) => {
          return <CalculatorButton text={item} key={item} />;
        })}
        <div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                border: "solid gray 1px",
                borderRadius: "8px",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "gray",
                color: "white",
              }}
            >
              X
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {["4", "5", "6"].map((item) => {
          return <CalculatorButton text={item} key={item} />;
        })}
        <div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                border: "solid gray 1px",
                borderRadius: "8px",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "gray",
                color: "white",
                fontSize: "50px",
                fontWeight: "100",
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {["1", "2", "3"].map((item) => {
          return <CalculatorButton text={item} key={item} />;
        })}

        <div
          style={{
            border: "solid gray 1px",
            borderRadius: "8px",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "gray",
            color: "white",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          -
        </div>
      </div>
    </div>
  );
}
