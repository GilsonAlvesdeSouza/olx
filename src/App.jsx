import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import  * as C  from "./components";

function App() {
  return (
    <BrowserRouter>
      <C.Template>
        <C.Header />
        <Routes />
        <C.Footer />
      </C.Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
