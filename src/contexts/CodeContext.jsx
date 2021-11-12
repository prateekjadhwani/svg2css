import React, { Component } from "react";

const CodeContext = React.createContext(null);
export const CodeContextConsumer = CodeContext.Consumer;

class CodeContextProvider extends Component {
    // Context state
    state = {
      cssString: '',
      htmlString: '',
      builtKeyFrames: []
    }
  
    // Method to update state
    setCssString = (cssString) => {
      this.setState((prevState) => ({ cssString }))
    }
    // Method to update state
    setHtmlString = (htmlString) => {
      this.setState((prevState) => ({ htmlString }))
    }

    // Method to update state
    setBuiltKeyFrames = (builtKeyFrames) => {
      let hasOld = false;
      let newKeyFrames = this.state.builtKeyFrames.map(keyFrames => {
        if (keyFrames['keyFrameName'] == builtKeyFrames['keyFrameName']) {
          hasOld = true;
          keyFrames['builtCSS'] = builtKeyFrames['builtCSS'];
        }
        return keyFrames;
      });

      if (!hasOld) {
        newKeyFrames.push(builtKeyFrames);
      }
      builtKeyFrames = newKeyFrames;
      this.setState((prevState) => ({ builtKeyFrames }))
    }
  
    render() {
      const { children } = this.props
      const { cssString, htmlString, builtKeyFrames } = this.state
      const { setCssString, setHtmlString, setBuiltKeyFrames } = this
  
      return (
        <CodeContext.Provider
          value={{
            cssString,
            htmlString,
            builtKeyFrames,
            setCssString,
            setHtmlString,
            setBuiltKeyFrames
          }}
        >
          {children}
        </CodeContext.Provider>
      )
    }
  }
  
  export default CodeContext;  
export { CodeContextProvider }

