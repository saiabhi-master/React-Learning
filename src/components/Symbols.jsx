import {useState} from 'react' // this is a react hook because it starts with 'use'
import Header from "./components/Header.jsx"
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data'; 

function Symbols() {
    // you must call useState() on the top level
    const [selectedTopic, setSelectedTopic] = useState("components"); // useState always return two elements in an array
  
    function handleSelect(selectedButton) {
      // selectedButton should be a String of the name ==> "component", 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton)
      console.log(selectedTopic)
    }
  
    return (
      <div>
        <Header /> 
      
        <main>
          
          
          <section id="core-concepts" className="container my-5">
            <h2 className="text-center">Core Concepts</h2>
  
          
          <ul className="list-unstyled d-flex flex-wrap justify-content-center">
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image}/>
  
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect("components")}>Component</TabButton>
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    );
  }
  
  export default Symbols;
  