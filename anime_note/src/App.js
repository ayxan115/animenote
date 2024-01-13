import Header from "./components/Header";
import './App.scss'
import Footer from "./components/Footer";
import Home from "./components/Home";

const anime = [
  {
    id: "1",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100
  },
  {
    id: "2",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100
  },
  {
    id: "3",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100
  },
  {
    id: "4",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100
  },
  {
    id: "5",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100
  },
  {
    id: "6",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100
  }

]

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Home items={anime}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
