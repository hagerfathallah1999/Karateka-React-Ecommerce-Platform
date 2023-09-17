import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../components/Input";

export default function Product({
  categories,
  handleAddNewProduct,
  handleEditProduct,
}) {
  const { productid } = useParams();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "1",
    image: null,
  });

  useEffect(() => {
    async function fetchProductById() {
      const { data } = await axios.get(
        `http://localhost:3000/menu/${productid}`
      );
      setForm({
        name: data.name,
        price: data.price,
        category: data.category,
        image: data.image,
      });
    }

    if (productid !== "add") fetchProductById();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // encode the selected image file to base64
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      setForm({ ...form, image: e.target.result });
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // call BE
    try {
      if (productid === "add") {
        await handleAdd();
      } else {
        await handleEdit();
      }
      // navigate to the admin page
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast("Something went wrong, please try again later...");
    }
  };

  const handleAdd = async () => {
    const { data } = await axios.post("http://localhost:3000/menu", {
      name: form.name,
      price: +form.price,
      category: +form.category,
      inCart: false,
      count: 0,
      image: form.image, // Base64 encoded image data
    });
    // update app state
    handleAddNewProduct(data);
  };

  const handleEdit = async () => {
    const { data } = await axios.put(
      `http://localhost:3000/menu/${productid}`,
      {
        name: form.name,
        price: +form.price,
        category: +form.category,
        inCart: false,
        count: 0,
        image: form.image,
      }
    );
    handleEditProduct(data);
  };

  return (
    <>
      <div className=" bg-gradient-to-b from-gray-400 to-gray-50 py-28 flex flex-col items-center">
        <div className="bg-white w-5/12 flex flex-col items-center rounded-lg pt-5 pb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-600 my-4">
              {productid === "add" ? "Add new product" : "Edit Product"}
            </h1>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="font-bold text-gray-600 ">
              <Input
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                className=""
                label="Price"
                name="price"
                value={form.price}
                onChange={handleChange}
              />
              <div className="form-control w-full max-w-xs">
                <label htmlFor="category" className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="select border-gray-300 w-full max-w-xs"
                >
                  {categories.slice(1).map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label htmlFor="image" className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="input input-bordered w-full max-w-xs"
                />
                {form.image && <img src={form.image} alt="Product" />}
                <button className="btn btn-gray-600 my-3" type="submit">
                  {productid === "add" ? "Add" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
