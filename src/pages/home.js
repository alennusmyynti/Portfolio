import Element from "./element.js"
import FluidGrid from 'react-fluid-grid'


const Home = () => {
    return (
        <div class="fluid_container">
            <FluidGrid>
            <Element projekti="Testiprojekti"
            image="./sivusto.png"
            text="Tämä on minun tekeleeni vähän väsyneenä"
            link="https://scratch.mit.edu/projects/725765243/"/>
            <Element projekti="Fluidin testausta varten"
            image="https://kodarit.com/wp-content/uploads/2021/12/jalkapallopeli-750x350.png"
            text="Tämä on minun tekeleeni pirteänä"
            link="https://unity.com/"/>
            </FluidGrid>
  </div>);
  };
  
  export default Home;