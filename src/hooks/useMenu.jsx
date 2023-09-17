import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [items, setItems] = useState([]);

  const [categories, setCategories] = useState([]);

  const [currentCategory, setCurrentCategory] = useState(0);

  // ---------------- Effects ----------------
  useEffect(() => {
    async function getMenu() {
      try {
        const { data } = await axios.get(
          currentCategory === 0
            ? `http://localhost:3000/menu`
            : `http://localhost:3000/menu?category=${currentCategory}`
        );
        setItems(data);
        // Calculate noOfPages
        setNoOfPages(Math.ceil(data.length / pageSize));
      } catch (error) {
        // TODO: handle error
      }
    }
    async function getCategories() {
      try {
        const { data } = await axios.get("http://localhost:3000/categories");
        setCategories(data);
      } catch (error) {
        // TODO: handle error
      }
    }

    getMenu();
    getCategories();
  }, []);

  return {
    items,
    categories,
    currentCategory,
    setCurrentCategory,
    setItems,
  };
};

export default useMenu;
