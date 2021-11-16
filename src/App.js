import { connect } from "react-redux";
import Button from "./components/Button";
import { Auth } from "./redux/action/Auth";
import { Loading } from "./redux/action/Loading";

function App(props) {
  // setTimeout(() => {
  //   props.Auth({ isLogged: "LOGIN", token: 123456 });
  //   props.Loading(true);
  // }, 2000);

  return (
    <div className="container">
      <div className="">
        <Button />
      </div>
    </div>
  );
}

const mapToStateProps = (state) => ({
  LOGGED: state.Auth.Logged,
});

export default connect(mapToStateProps, { Auth, Loading })(App);
