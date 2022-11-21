import React, { useContext } from "react";
import { useState } from "react";

import { Divider, Drawer, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./../styles/tailwind.css";
export default function Layout({ title, description, children }) {
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };
  return (
    <div>
      <head>
        <title>{title ? `${title} - InstaTrend` : "InstaTrend"}</title>
        {description && <meta name="description" content={description}></meta>}

        <link
          href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className={classes.box}>
        <AppBar position="static" className={classes.appBar}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={4} display="flex">
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                className={classes.menuButton}
              >
                <MenuIcon
                  onClick={sidebarOpenHandler}
                  className={classes.navbarButton}
                />
              </IconButton>
              <div className={classes.firstBox}>InstaTrend</div>
              <Drawer
                anchor="left"
                open={sidbarVisible}
                onClose={sidebarCloseHandler}
              >
                <List>
                  <ListItem>
                    <Container
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography>Sidebar panel</Typography>
                      <IconButton
                        aria-label="close"
                        onClick={sidebarCloseHandler}
                      ></IconButton>
                    </Container>
                  </ListItem>
                  <Divider light />
                  <ListItem>
                    <Button>Home</Button>
                  </ListItem>
                  <ListItem>
                    <Button>About</Button>
                  </ListItem>
                  <ListItem>
                    <Button>Feedback</Button>
                  </ListItem>
                </List>
              </Drawer>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <div className={classes.secondBox}>
                <Typography className={classes.secondBox_menu}>Sell</Typography>
                <Typography className={classes.secondBox_menu}>Buy</Typography>
                <Typography className={classes.secondBox_menu}>
                  Feedback
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4} justifyContent="flex-end">
              <div className={classes.thirdBox}>
                <Button color="inherit">Login</Button>
              </div>
            </Grid>
          </Grid>
        </AppBar>
        {children}
      </div>
      <footer className={classes.footer}>
        <Grid className={classes.footerGridCon} container spacing={2}>
          <Grid item sm={4} className={classes.footerGridItem}>
            <List className={classes.footerList1}>
              <Container className={classes.footer_logo}>Logo</Container>
              <Typography className={classes.footer_statement}>
                With name. simply visit a URL. drop a comment and you're done.
                No more wading through unclear. unactionable feedback.
              </Typography>
            </List>
          </Grid>
          <Grid container sm={8} className={classes.footerGridCon}>
            <Grid item sm={3}>
              <List>
                <ListItem>Landing Pages</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 1</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 2</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 3</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 4</ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem2}>
              <List>
                <ListItem>Conpany Pages</ListItem>
                <ListItem className={classes.footerGridItem2}>
                  About us
                </ListItem>
                <ListItem className={classes.footerGridItem2}>Blog</ListItem>
                <ListItem className={classes.footerGridItem2}>Careers</ListItem>
                <ListItem className={classes.footerGridItem2}>
                  Help Center
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem2}>
              <List>
                <ListItem>Other Pages</ListItem>
                <ListItem className={classes.footerGridItem2}>contact</ListItem>
                <ListItem className={classes.footerGridItem2}>Sign up</ListItem>
                <ListItem className={classes.footerGridItem2}>Sign in</ListItem>
                <ListItem className={classes.footerGridItem2}>
                  Licensing
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Typography>All rights reserved.</Typography>
      </footer>
    </div>
  );
}
