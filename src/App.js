import styled from "styled-components"
import Gists from "./components/Gist"
import GlobalStyles from "./GlobalStyle"
const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Gists />
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  overflow-x: hidden;
`

export default App
