import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartdata } from "../Redux/Cartslice";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { addcartt } from "../Redux/Addcartslice";


const Home = () => {
  const cart = useSelector((state) => state?.cart?.cart);
//   console.log(cart, "cart");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartdata());
  },[dispatch]);
  
  return (
    <>
      <Container>
        <Grid container>
          {cart?.map((item) => {
            return (
              <>
               <Grid item md={3} sm={4} xs={12}>
               <Card sx={{ maxWidth: 345,margin:"8px",minHeight:"450px",maxHeight:"450px" }}>
                  <CardMedia
                    sx={{ height: 200,backgroundPosition:"top",backgroundSize:"cover" }}
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title.slice(0,25)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Category </b> : {item.category} <br />
                        <b>Description</b> : {item.description.slice(0,70)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="outlined">Buy</Button>
                    <Button size="small" variant="contained" onClick={()=> dispatch(addcartt(item))} >add to cart</Button>
                  </CardActions>
                </Card>
               </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
