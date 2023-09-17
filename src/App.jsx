import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Cart from "./pages/Cart";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import AboutTeam from "./pages/AboutTeam";
import AboutCompany from "./pages/AboutCompany";
import Product from "./pages/Product";
import ErrorPage from "./pages/404";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import useMenu from "./hooks/useMenu";
import { ThemeProvider } from "./context/ThemeContext";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import AfterFooter from "./components/AfterFooter";
import Footer from "./components/Footer";

const pageSize = 6;

function App() {
  const [user, setUser] = useState({ isAuthenticated: false, role: "" });

  ////////// -------------------------------------------------------------------------- //////////

  const { items, categories, currentCategory, setItems, setCurrentCategory } =
    useMenu();
  // ---------------- States ---------------
  const [currentPage, setCurrentPage] = useState(1);

  let noOfPages = 1;

  // ---------------- Handlers ----------------

  // -----
  const totalItemsInCart = items.reduce((total, item) => {
    if (item.inCart) {
      return total + item.count;
    }
    return total;
  }, 0);
  //-----

  const handleAddToCart = useCallback(
    (id) => {
      // Clone
      // Edit
      const newItems = items.map((item) =>
        item.id === id ? { ...item, inCart: !item.inCart, count: 1 } : item
      );
      // SetState
      setItems(newItems);
    },
    [items, setItems]
  );

  const changeCurrentCategory = (id) => {
    setCurrentCategory(id);
    setCurrentPage(1);
  };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleIncrement = useCallback((id) => {
    // //clone
    // const newCounters = [...counters];
    // const index = counters.findIndex((item) => item.id === id);
    // const newCounter = { ...counters[index] };
    // // edit
    // newCounter.count += 1;
    // newCounters[index] = newCounter;
    // // updateState
    // setCounters(newCounters);

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const handleDecrement = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  }, []);

  const handleReset = () => {
    // Clone
    let newCounters = [...items];
    // Edit
    newCounters = newCounters.map((item) => ({ ...item, count: 0 }));
    // SetState
    setItems(newCounters);
  };

  const handleRemoveFromCart = useCallback((id) => {
    // Clone
    // Edit
    // Set State
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, inCart: false } : item
      )
    );
  }, []);

  const handleAddNewProduct = (product) => {
    setItems([...items, product]);
  };

  const handelDeleteProduct = (product) => {
    setItems(items.filter((item) => item.id !== product.id));
  };

  const handleEditProduct = (product) => {
    setItems(
      items.map((item) => (item.id === product.id ? { ...product } : item))
    );
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header
          // noOfItemsInCart={items.filter((item) => item.inCart).length}
          user={user}
          setUser={setUser}
          noOfItemsInCart={totalItemsInCart}
        />
        <div className="w-screen m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Outlet />}>
              <Route index element={<About />} />
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route>
            <Route
              path="/cart"
              element={
                <Cart
                  counters={items.filter((item) => item.inCart)}
                  handleIncrement={handleIncrement}
                  handleDelete={handleRemoveFromCart}
                  handleReset={handleReset}
                  handleDecrement={handleDecrement}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  items={items}
                  categories={categories}
                  pageSize={pageSize}
                  currentCategory={currentCategory}
                  currentPage={currentPage}
                  noOfPages={noOfPages}
                  handleAddToCart={handleAddToCart}
                  changeCurrentCategory={changeCurrentCategory}
                  changeCurrentPage={changeCurrentPage}
                />
              }
            />

            <Route
              path="/admin"
              element={
                <Admin
                  items={items}
                  handelDeleteProduct={handelDeleteProduct}
                />
              }
            />

            <Route
              path="/product/:productid"
              element={
                <Product
                  categories={categories}
                  handleAddNewProduct={handleAddNewProduct}
                  handleEditProduct={handleEditProduct}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <AfterFooter />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
