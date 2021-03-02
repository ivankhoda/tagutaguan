import { CssBaseline, makeStyles } from "@material-ui/core";
import "./App.css";
import { Header } from "./components/Header";
import { Pages } from "./components/Pages/Pages";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
    //backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100vw",

    background: `linear-gradient(to left, rgba(199, 115, 52, 0.5), rgba(93 42 17 / 50%)), url(${
      process.env.PUBLIC_URL +
      "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80"
    })`,
  },
}));
///Users/ivan/websites/landing/hidehouse/public/img/burger.jpg
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {" "}
      <CssBaseline />
      <Header />
      <Pages />
    </div>
  );
}

export default App;
