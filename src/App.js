import { connect } from "react-redux";
import { Auth } from "./redux/action/Auth";
import { Loading } from "./redux/action/Loading";

function App(props) {
  setTimeout(() => {
    props.Auth({ isLogged: "LOGIN", token: 123456 });
    props.Loading(true);
  }, 2000);

  return <div>{props.LOGGED ? <div>Logged</div> : <div>Loading</div>}</div>;
}

const mapToStateProps = (state) => ({
  LOGGED: state.Auth.Logged,
});

export default connect(mapToStateProps, { Auth, Loading })(App);
