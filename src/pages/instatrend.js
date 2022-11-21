import classes from "../styles/Home.module.css";
import Layout from "../components/Layout";
import DoneIcon from "@mui/icons-material/Done";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
// import Image1 from "./../../public/image1.jpg";
// import Image2 from "./../../public/image2.jpg";
// import Image3 from "./../../public/image3.jpg";
// import Image4 from "./../../public/image4.jpg";
// import Image5 from "./../../public/image5.jpg";
// import Typical from "react-typical";

export default function instatrend(props) {
  return (
    <div className={classes.container}>
      <Layout>
        <Container className={classes.main}>
          {/* <Typography variant="h3">Popular Products</Typography> */}
          <Grid container spacing={3}>
            <Grid item md={6} className={classes.contentBox}>
              <Typography
                variant="h2"
                fontFamily="'Abel', sans-serif;"
                margin="2rem"
                className={classes.contentBox_heading}
              >
                Be ready to share your best Product{" "}
                {/* <Typical
                  className={classes.typical}
                  loop={Infinity}
                  steps={["product", 2000, "", 2000, "Moments", 2000]}
                /> */}
              </Typography>

              <Typography
                margin="0rem 2rem 1rem 2rem"
                color="rgb(179, 193, 199)"
                className={classes.contentBox_statement}
              >
                Every product that you can share with your users, you should.
                They will love for this, we promise.
              </Typography>
              <Container className={classes.inputCon}>
                <Input
                  placeholder="Enter your email . . ."
                  className={classes.inputBox}
                />
                <Button color="inherit" className={classes.btn_main}>
                  Start selling
                </Button>
              </Container>
              <Typography className={classes.preSpan}>
                💜 By signing up you agree to{" "}
                <span className={classes.postSpan}>Privacy policy</span>
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.carousel_con}>
              <div className={classes.imageBox}>
                {/* <CarsouselSlider slideItem={imgData} /> */}
                <Carousel
                  // controls={false}
                  // indicators={false}
                  className={classes.carousel}
                  NextIcon={false}
                  PrevIcon={false}
                  // nextLabel={false}
                >
                  {/* <img src={Image1} width="400%" height="400%" />
                  <img src={Image2} width="400%" height="400%" />
                  <img src={Image3} width="400%" height="400%" />
                  <img src={Image4} width="400%" height="400%" />
                  <img src={Image5} width="400%" height="400%" />
                  <img src={Image3} width="400%" height="400%" /> */}
                </Carousel>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.section2}>
          <Typography
            variant="h3"
            padding="1rem"
            fontFamily="'Abel', sans-serif"
            className={classes.section2_heading}
          >
            Compare to competitors
          </Typography>
          <List className={classes.section2List}>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Product
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Competitor
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Another one
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Mabel
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem2}>
              {" "}
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Velit
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  2%Free
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  1%Free
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  No Free
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Buyer experience
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Sucks
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Decent
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Impeccable
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem2}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Egestas
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Sit
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem2}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Velit
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Amet
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Container>
        <Container className={classes.section3}>
          <Grid container spacing={2}>
            <Grid item sm={5} className={classes.section3_left}>
              <Typography
                variant="h3"
                className={classes.section3_left_heading}
              >
                Sign up now and get a free 3 month trial
              </Typography>
              <Typography className={classes.section3_left_para}>
                With paige, simply visit URL, drop a comment and you're done. No
                more wading through unclear, unactionable feedback.
              </Typography>
              <Button color="inherit" className={classes.section3_left_btn}>
                Schedule a call
              </Button>
              <Typography className={classes.section3_left_statement}>
                "if you aren't sure, always go fot paige. I didn't even need
                training."
              </Typography>
              <Typography className={classes.section3_left_statement2}>
                <span className={classes.section3_left_span}>Rated 5/5</span> -
                from 32 reviews
              </Typography>
            </Grid>
            <Grid item sm={4} className={classes.section3_right}>
              <Container className={classes.section3_right_con}>
                <Typography
                  className={classes.section3_right_heading}
                  variant="h5"
                >
                  Sign up for free
                </Typography>
                <Container className={classes.section3_right_title_con}>
                  <Typography className={classes.section3_right_title}>
                    Name
                  </Typography>
                  <Input className={classes.section3_right_input} />
                </Container>
                <Container className={classes.section3_right_title_con}>
                  <Typography className={classes.section3_right_title}>
                    Email
                  </Typography>
                  <Input className={classes.section3_right_input} />
                </Container>
                <Typography className={classes.section3_right_statement}>
                  <Checkbox className={classes.checkbox} /> I agree to the
                  privacy policy.
                </Typography>
                <Button className={classes.section3_right_btn}>Submit</Button>
                <Typography className={classes.section3_right_statement2}>
                  Already have an account?{" "}
                  <span className={classes.section3_right_span}>Sign in</span>
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
}
