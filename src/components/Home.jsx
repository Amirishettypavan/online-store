import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, RemoveFromWishList } from "../redux/wishListSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.wishList);
  const [category, setcategory] = useState("");
  function fetchData() {
    fetch(`https://fakestoreapi.com/products${`${category}`}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }
  useEffect(() => {
    fetchData();
  }, [category]);
  const notify = () => toast.success("Added To Cart");
  const wishListNotify = () => toast.success("Added To WishList");

  function check(val) {
    return store.data.some((data) => val == data.id);
  }

  return (
    <div className="">
      <img src="../img3.webp" alt="" height={600} width={"100%"} />
      <div className="mt-5 mb-5">
        <h2 className="ms-4">Shop by Category</h2>
        <div className="displaycardMain">
          <div
            className="displayCard1"
            onClick={() => navigate("/category", { state: "electronics" })}
          >
            <h1>Electronics</h1>
          </div>
          <div
            className="displayCard2"
            onClick={() => navigate("/category", { state: "jewelory" })}
          >
            <h1>Jewelory</h1>
          </div>
          <div
            className="displayCard3"
            onClick={() => navigate("/category", { state: "men's clothing" })}
          >
            <h1>
              {" "}
              Men's <br />
              clothing
            </h1>
          </div>
          <div
            className="displayCard4"
            onClick={() => navigate("/category", { state: "women's clothing" })}
          >
            <h1>
              women's <br /> clothing
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h2 className="ms-4">Shop by Collections</h2>
        <p className="ms-4">
          Each season,we collaborate with world class designers to create a
          collection inspired by natural world
        </p>
        <div className="dropDown">
          {/* <input type="text"  placeholder='Search product' onChange={(e)=>setcategory(e.target.value)}/> */}
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="homeSelect"
          >
            <option value=""> select a category</option>
            <option value="/category/electronics">Electronics</option>
            <option value="/category/jewelery">Jewelery</option>
            <option value="/category/men's clothing">Men's clothing</option>
            <option value="/category/women's clothing">women's clothing</option>
          </select>
        </div>
      </div>
      <div className="cardDesign">
        {data.map((val) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="card HomeCard" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-end">
                {check(val.id) ? (
                  <h1 onClick={() => dispatch(RemoveFromWishList(val.id))}>
                    <i
                      className="fa-solid fa-heart me-3"
                      style={{ color: "#eb0000" }}
                    ></i>
                  </h1>
                ) : (
                  <h1 onClick={() => {wishListNotify(),dispatch(addToWishlist(val))}}>
                    {" "}
                    <i className="fa-regular fa-heart me-3"></i>
                  </h1>
                )}
              </div>
              <img
                src={val.image}
                className="card-img-top"
                alt="..."
                height={280}
                onClick={() => navigate("/item", { state: [val] })}
              />

              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.price}</p>
                <button
                  className="btn btn-primary HomeButton"
                  onClick={() => {
                    notify(), dispatch(addToCart(val));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Home;
