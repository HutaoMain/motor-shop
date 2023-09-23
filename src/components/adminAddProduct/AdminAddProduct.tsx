import axios from "axios";
import { ProductInterface } from "../../Types";
import "./AdminAddProduct.css";
import { Close, Check } from "@mui/icons-material";
// import { useQuery } from "react-query";
import React, { useState } from "react";

interface props {
  toggleProductModal: () => void;
}

const AdminAddProduct = ({ toggleProductModal }: props) => {
  //   const { data } = useQuery<CategoryInterface[]>({
  //     queryKey: ["addProduct"],
  //     queryFn: async () =>
  //       await axios
  //         .get(`${import.meta.env.VITE_APP_API_URL}/api/category/list`)
  //         .then((res) => res.data),
  //   });

  const [ImageFile, setImageFile] = useState<string>("");
  const [addProductInfo, setAddProductInfo] = useState<ProductInterface>({
    id: "",
    productName: "",
    productImage: "",
    description: "",
    category: "",
    quantity: 0,
    price: 0,
  });

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = event.target;

    setAddProductInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("file", ImageFile);
      data.append("upload_preset", "upload");
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/alialcantara/image/upload",
        data
      );
      const { url } = uploadRes.data;

      console.log(url);

      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/product/create`,
        {
          ...addProductInfo,
          productImage: url,
        }
      );
      //   toast.success("Sucessfully added product!", {
      //     position: "bottom-center",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addProductInfo);

  const fileTypeChecking = (e: any) => {
    var fileInput = document.getElementById("file-upload") as HTMLInputElement;
    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = /(\.png|\.jpg|\.jpeg)$/i;
    // |\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd

    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type");
      fileInput.value = "";
      return false;
    }

    setImageFile(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div style={{ padding: "10px 0", fontSize: "20px" }}>Add Product</div>
      <hr style={{ marginBottom: "20px" }} />
      <div className="upload-image-container">
        <img
          src={
            ImageFile
              ? URL.createObjectURL(
                  new Blob([ImageFile], { type: "image/jpeg" })
                )
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt="AddImage"
          className="addcategory-img"
        />
        <label htmlFor="file-upload" className="receipt-input-image">
          Upload the image of category here..
          <input
            type="file"
            id="file-upload"
            onChange={fileTypeChecking}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <section className="addproduct-item-section" style={{ width: "100%" }}>
        <div className="addproduct-item-list" style={{ width: "50%" }}>
          <label>
            Product Name
            <input
              className="addproduct-input"
              style={{ width: "95%" }}
              type="text"
              name="productName"
              defaultValue={addProductInfo.productName}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        {/* <div className="addproduct-item-list" style={{ width: "50%" }}>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              height: "63px",
            }}
          >
            Category
            <select
              className="addproduct-input"
              name="categoryId"
              defaultValue={addProductInfo.category}
              onChange={(e) => {
                setAddProductInfo((data) => ({
                  ...data,
                  category: e.target.value,
                }));
              }}
            >
              <option value="">please select category</option>
              {data?.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </label>
        </div> */}
      </section>

      <section className="addproduct-item-list" style={{ width: "100%" }}>
        <label
          style={{ display: "flex", flexDirection: "column", height: "63px" }}
        >
          Description
          <input
            className="addproduct-input"
            type="text"
            name="description"
            defaultValue={addProductInfo.description}
            onChange={onChangeHandler}
          />
        </label>
      </section>

      <section
        className="addproduct-item-section"
        style={{ width: "100%", gap: "15px" }}
      >
        <div className="addproduct-item-list" style={{ width: "50%" }}>
          <label>
            Qty
            <input
              className="addproduct-input addproduct-input-number"
              type="number"
              style={{ width: "100%" }}
              name="quantity"
              defaultValue={addProductInfo.quantity}
              onChange={(e) => {
                setAddProductInfo((data) => ({
                  ...data,
                  quantity: parseInt(e.target.value),
                }));
              }}
            />
          </label>
        </div>
        <div className="addproduct-item-list" style={{ width: "50%" }}>
          <label>
            Price
            <input
              className="addproduct-input addproduct-input-number"
              type="number"
              style={{ width: "100%" }}
              name="price"
              defaultValue={addProductInfo.price}
              onChange={(e) => {
                setAddProductInfo((data) => ({
                  ...data,
                  price: parseInt(e.target.value),
                }));
              }}
            />
          </label>
        </div>
      </section>
      <hr style={{ marginTop: "20px" }} />
      <div className="addproduct-btn-container">
        <button className="addproduct-btn close" onClick={toggleProductModal}>
          <Close /> Close
        </button>
        <button className="addproduct-btn submit" onClick={handleSubmit}>
          <Check /> Submit
        </button>
      </div>
    </div>
  );
};

export default AdminAddProduct;
