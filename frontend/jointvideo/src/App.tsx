import './App.css'
import {MainPage} from "./(client)/MainPage/mainPage.tsx";
import {Routes , Route} from "react-router";
import {ViewingComponent} from "./(client)/Watching/viewingComponent.tsx";
import {AnimeItemOnId} from "./(client)/item/AnimeOnId.tsx";

function App() {

  return (
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/login" element={<MainPage/>}/>
        <Route path="/register" element={<MainPage/>}/>
        <Route path="/viewing/:room" element={<ViewingComponent/>}/>
        <Route path="/item/:item" element={<AnimeItemOnId/>}/>
      </Routes>
  )
}

export default App
