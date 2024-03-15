import { createContext, useState } from "react";

export const CursorContexts = createContext<any>(null);

const CursorContext = ({ children }: { children: React.ReactNode }) => {
  //Value
  const [Text, setText] = useState("");
  const [cursorVariant, setVariant] = useState("Default");
  const setCursor = (text: string, variant: string) => {
    setText(text);
    setVariant(variant);
  };
  return (
    <CursorContexts.Provider value={{ Text, cursorVariant, setCursor }}>
      {children}
    </CursorContexts.Provider>
  );
};

export default CursorContext;
