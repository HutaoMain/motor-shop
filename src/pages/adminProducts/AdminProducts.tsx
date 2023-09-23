import {
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "react-query";
import { ProductInterface } from "../../Types";
import axios from "axios";
import { useState } from "react";
import AdminAddProduct from "../../components/adminAddProduct/AdminAddProduct";

const AdminProducts = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(false);
  };

  const { data } = useQuery<ProductInterface[]>({
    queryKey: ["Product"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/product/list`)
        .then((res) => res.data),
  });

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_API_URL}/api/product/delete/${productId}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        marginTop: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TableContainer
        className="product"
        style={{ maxWidth: "1100px", width: "100%" }}
      >
        <button className="product-add-btn" onClick={() => setOpen(true)}>
          Add Product
        </button>
        <Table className="product-table">
          <TableHead className="product-tablehead">
            <TableRow>
              <TableCell className="assessment-header" align="center">
                Name
              </TableCell>
              <TableCell className="assessment-header" align="center">
                Image
              </TableCell>
              <TableCell className="assessment-header" align="center">
                Description
              </TableCell>
              <TableCell className="assessment-header" align="center">
                Price
              </TableCell>
              <TableCell className="assessment-header" align="center">
                Quantity
              </TableCell>
              <TableCell className="assessment-header" align="center">
                Action Button
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="product-tablebody">
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.productName}</TableCell>
                <TableCell align="center">
                  <img
                    src={item.productImage}
                    alt=""
                    className="product-image"
                  />
                </TableCell>
                <TableCell align="center">{item.description}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">
                  <button
                    className="product-btn"
                    onClick={() => handleDelete(item.id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={toggleModal}>
        <DialogContent>
          <AdminAddProduct toggleProductModal={toggleModal} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProducts;
