import React from "react";

const Header = (props) => {
  return (
    <header className="block row center">
      <div className="">
        <a href="/">
          <h1>Shop</h1>
        </a>
      </div>
      <div>
        <a href="#/">Cart</a> <a href="#/signin">Signin</a>
      </div>
    </header>
  );
};

export default Header;
// useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log(res.data);

//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log("Err", err);
//       });
//   }, []);
