import styled from "styled-components";

const Loader = () => {
  return (
    <Spinner>
      <div className="lds-dual-ring"></div>
    </Spinner>
  );
};

const Spinner = styled.div`
  .lds-dual-ring {
    width: 80px;
    height: 80px;
    margin: 40px auto;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #2f81f7;
    border-color: #2f81f7 transparent #2f81f7 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
