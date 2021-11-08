import React, { Component } from "react";

const CodeContext = React.createContext(null);
export const CodeContextConsumer = CodeContext.Consumer;

class CodeContextProvider extends Component {
    // Context state
    state = {
      cssString: '',
      htmlString: ''
    }
  
    // Method to update state
    setCssString = (cssString) => {
      this.setState((prevState) => ({ cssString }))
    }
    // Method to update state
    setHtmlString = (htmlString) => {
        this.setState((prevState) => ({ htmlString }))
      }
  
    render() {
      const { children } = this.props
      const { cssString, htmlString } = this.state
      const { setCssString, setHtmlString } = this
  
      return (
        <CodeContext.Provider
          value={{
            cssString,
            htmlString,
            setCssString,
            setHtmlString
          }}
        >
          {children}
        </CodeContext.Provider>
      )
    }
  }
  
  export default CodeContext;  
export { CodeContextProvider }

