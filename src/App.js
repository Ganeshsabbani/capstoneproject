import Main from "./Pages/Createflashcard/components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Pages/detailsflash/Details";
import FlashCards from "./Pages/myflashcards/FlashCards";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/details/:groupName" element={<Details />} />
        <Route exact path="/flashcards" element={<FlashCards />} />
      </Routes>

    </Router>
    
       
   
    </>
   
  );
}

export default App;
