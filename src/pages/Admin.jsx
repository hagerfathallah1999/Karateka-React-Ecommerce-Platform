import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Admin = ({ items, handelDeleteProduct }) => {
  const handleDelete = async (product) => {
    try {
      // call be
      const { data } = await axios.delete(
        `http://localhost:3000/menu/${product.id}`
      );
      // update app state
      handelDeleteProduct(product);
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-screen flex flex-col justify-between items-center py-28 bg-gradient-to-b from-gray-400 to-gray-50">
        <div>
          <Link to="/product/add">
            <button className="btn btn-gray-600 btn-circle btn-lg my-3 text-white">
              Add New
            </button>
          </Link>
        </div>
        <div>
          <table className="table">
            <thead className="">
              <tr>
                <th className="font-bold text-xl bg-gray-600 text-white">Name</th>
                <th className="font-bold text-xl bg-gray-600 text-white">Price</th>
                <th className="font-bold text-xl bg-gray-600 text-white">Category</th>
                <th className="font-bold text-xl bg-gray-600 text-white">Image</th>
                <th className="font-bold text-xl bg-gray-600 text-white">Edit</th>
                <th className="font-bold text-xl bg-gray-600 text-white">Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    {item.image && !item.image.startsWith("data:image") ? (
                      <img
                        className="w-48 h-48 "
                        src={`src/assets/Imgs/${item.image}`}
                        alt={item.name}
                      />
                    ) : (
                      item.image && <img  className="w-48 h-48" src={item.image} alt={item.name} />
                    )}
                  </td>
                  <td>
                    <Link to={`/product/${item.id}`}>
                      <button className="btn btn-primary btn-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-error btn-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
