import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";



const Addcart = () => {
  const { addcart } = useSelector((state) => state?.addcart);
  console.log("addcart", addcart);
  const dispatch = useDispatch()
  const handleclick = async(id)=>{
      try{
       const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
       console.log('res',res?.data);
       return res?.data
      }
      catch(err){
        console.log(err);
      }
  }
    

  return (
    <>
      <Container maxWidth={"lg"}>
        <Grid item>
          <h2 style={{ textAlign: "center" }}> MY CART</h2>
          <Grid md={12} xs={12}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b style={{ textTransform: "uppercase" }}>Tittle</b>
                    </TableCell>
                    <TableCell align="right">
                      <b style={{ textTransform: "uppercase" }}>Category</b>
                    </TableCell>
                    <TableCell align="right">
                      <b style={{ textTransform: "uppercase" }}>price</b>
                    </TableCell>
                    <TableCell align="right">
                      <b style={{ textTransform: "uppercase" }}>quantity</b>
                    </TableCell>
                    <TableCell align="right">
                      <b style={{ textTransform: "uppercase" }}>total price</b>
                    </TableCell>
                    <TableCell align="right">
                      <b style={{ textTransform: "uppercase" }}>remove</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {addcart?.map((row) => (
                    <TableRow
                      
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.price} $</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.price * row.quantity} $</TableCell>
                      <TableCell align="right">
                        <button style={{padding:"8px 16px",color:"#fff",backgroundColor:"red",borderRadius:"8px",border:"none"}} onClick={()=>handleclick(row.id)}>Delete</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Addcart;
