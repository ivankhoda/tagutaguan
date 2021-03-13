import { makeStyles } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import {
  default as AddLocationIcon,
  default as ChatIcon,
} from "@material-ui/icons/Chat";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleMapReact from "google-map-react";
import * as React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    opacity: "0.9",
    height: "100vh",
    backgroundColor: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#f2f5f5",
    fontSize: "2rem",

    textAlign: "center",
    margin: 0,
    maxWidth: 400,
  },
  desc: {
    color: "#f2f5f5",
    fontSize: "25px",
    height: "30px",
    lineHeight: "30px",
    maxWidth: 320,
    textAlign: "center",
    verticalAlign: "middle",

    margin: 0,
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",

    justifyContent: "space-between",
    minWidth: 320,
  },
  icon: { height: "30px", width: "30px", color: "#f2f5f5" },
  tel: { height: "30px", display: "flex" },
  map: {
    height: 300,
    /* The height is 400 pixels */
    width: 300,
    /* The width is the width of the web page */
  },
  location: {},
}));

export const Contacts: React.FC = () => {
  const classes = useStyles();

  const coords = {
    center: {
      lat: 14.619814,
      lng: 121.171937,
    },
  };
  //14.619814, 121.171937
  return (
    <article id="contacts" className={classes.root}>
      <h1 className={classes.title}>Contacts</h1>
      <div className={classes.contacts}>
        <div className={classes.tel}>
          <CallIcon className={classes.icon} />
          <ChatIcon className={classes.icon} />
          <p className={classes.desc}>+63 956 615 7416</p>
        </div>
        <a href={"https://www.facebook.com/tagutaguanfoodhouse/"}>
          <FacebookIcon className={classes.icon} />
        </a>
      </div>
      <div className={classes.location}>
        <h2 className={classes.title}>Come to visit us!</h2>
        <div id="map" className={classes.map}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDZUd4cEjAzZn_U4pq31ewsH4zFBhbZP6M",
            }}
            defaultCenter={coords.center}
            defaultZoom={18}
          >
            <AddLocationIcon className={classes.icon} />
          </GoogleMapReact>
        </div>
      </div>
    </article>
  );
};
