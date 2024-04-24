// import logo from './logo.svg';
import './App.css';
import NavSectionContainer from './components/NavSectionContainer';
import ContainerSection from './components/ContainerSection';
import ContainerCard from './components/ContainerCard';


function App() {
  return (
    <div className="App">
    <NavSectionContainer></NavSectionContainer>
    <ContainerSection>
      <ContainerCard></ContainerCard>
    </ContainerSection>
    </div>
  );
}

export default App;
