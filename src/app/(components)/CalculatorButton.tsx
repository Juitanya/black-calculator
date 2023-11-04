"use client";

type Props = {
  text: string;
};

export default function CalculatorButton({ text }: Props) {
  return (
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
      className="hover:opacity-100 opacity-80"
    >
      {text}
    </div>
  );
}
