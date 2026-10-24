import './App.css'
import {MainPage} from "./(client)/MainPage/mainPage.tsx";
import {Routes , Route} from "react-router";
import {ViewingComponent} from "./(client)/Watching/viewingComponent.tsx";
import {AnimeItemOnId} from "./(client)/item/AnimeOnId.tsx";
import LoginPage from "./(account)/login/loginpage.tsx";
import RegisterPage from "./(account)/register/registerpage.tsx";

function App() {

  return (
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/viewing/:room" element={<ViewingComponent/>}/>
        <Route path="/item/:item" element={<AnimeItemOnId/>}/>
      </Routes>
  )
}

export default App
