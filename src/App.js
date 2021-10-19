import './App.css';
import styled from "styled-components/macro";
import Breadcrumbs from './components/Breadcrumbs'
import ButtonTable from "./components/ButtonTable";

const HeaderStyles = styled.header`
  text-align: center;
  font-weight: bold;
  margin: 20px auto;
  font-weight: 600;
  font-size:1.5rem;
`;



function App() {
  return (
    <div className="App">
      <HeaderStyles>
        <p>React Sandbox For Css for Js course</p>
      </HeaderStyles>
      <Breadcrumbs />
      <ButtonTable />
    </div>
  );
}

export default App;
