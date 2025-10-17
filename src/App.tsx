import Footer from "./components/Footer/Footer";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-stretch">
      <Header />
      <GameBoard />
      <Footer />
    </div>
  )
}

export default App;