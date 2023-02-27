import "./App.css";
import Index from "./components/Index/Index.jsx";
import IndexLayout from "./layouts/IndexLayout/IndexLayout.jsx";

function App() {
  return (
    <div className="App">
       <IndexLayout>
        <Index/>
      </IndexLayout>
    </div> 
  );
}

export default App;
