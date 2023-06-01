import styled from "styled-components"

//customise pure css loader
const Loader = () => {
  return (
    <Spinner>
      <div className="gist-loader"></div>
    </Spinner>
  )
}

const Spinner = styled.div`
  .gist-loader {
    width: 80px;
    height: 80px;
    margin: 40px auto;
  }
  .gist-loader:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #2f81f7;
    border-color: #2f81f7 transparent #2f81f7 transparent;
    animation: gist-loader 1.2s linear infinite;
  }
  @keyframes gist-loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
