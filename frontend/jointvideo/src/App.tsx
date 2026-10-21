import './App.css'
import {MainPage} from "./(client)/MainPage/mainPage.tsx";
import {Routes , Route} from "react-router";
import {ViewingComponent} from "./(client)/Watching/viewingComponent.tsx";

function App() {

  return (
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/login" element={<MainPage/>}/>
        <Route path="/register" element={<MainPage/>}/>
        <Route path="/viewing/:id" element={<ViewingComponent/>}/>
      </Routes>
  )
}

export default App
