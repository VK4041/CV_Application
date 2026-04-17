import { Fragment } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import "./styles/App.css";
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
