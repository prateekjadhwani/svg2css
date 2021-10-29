import React from "react";

const CodeContext = React.createContext(null);
export const CodeContextProvider = CodeContext.Provider;
export const CodeContextConsumer = CodeContext.Consumer;

export default CodeContext;