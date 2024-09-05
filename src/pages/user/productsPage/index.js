import React from "react";
import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categroies } from "../theme/header";
import { ROUTER } from "util/router";
import featured1 from "assets/user/images/features/chuoi.jpg";
import featured2 from "assets/user/images/features/duahau.jpg";
import featured3 from "assets/user/images/features/hamburger.jpg";
import featured4 from "assets/user/images/features/nho.jpg";
import featured5 from "assets/user/images/features/oi.jpg";
import featured6 from "assets/user/images/features/tao.jpg";
import featured7 from "assets/user/images/features/thitbonat.jpg";
import featured8 from "assets/user/images/features/thittuoi.jpg";
import featured9 from "assets/user/images/features/xoai.jpg";
import ProductCard from "components/ProductCard";
const product = [
  {
    img: featured1,
    name: "Chuối",
    price: 20000,
  },
  {
    img: featured2,
    name: "Dưa hấu",
    price: 40000,
  },
  {
    img: featured3,
    name: "Hamburger",
    price: 67000,
  },
  {
    img: featured4,
    name: "Nho",
    price: 45000,
  },
  {
    img: featured5,
    name: "Ổi",
    price: 15000,
  },
  {
    img: featured6,
    name: "Táo",
    price: 20000,
  },
  {
    img: featured7,
    name: "Thịt bò nạt",
    price: 120000,
  },
  {
    img: featured8,
    name: "Thịt tươi",
    price: 100000,
  },
  {
    img: featured9,
    name: "Xoài",
    price: 14000,
  },
];

const ProductsPage = () => {
  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];
  return (
    <>
      <BreadCrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="sidebar_item">
                <h2>Tìm kiếm</h2>
                <input type="text" placeholder="Nhập thông tin" />
              </div>
              <div className="sidebar_item">
                <h2>Mức giá</h2>
                <div className="price-range-wrap">
                  <div>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input type="number" min={0} />
                  </div>
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sorts.map((item, key) => {
                    return (
                      <div
                        className={`tag ${key === 0 ? "active" : ""}`}
                        key={key}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categroies.map((item, key) => {
                    return (
                      <li key={key}>
                        <Link to={ROUTER.USER.PRODUCT}>{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                      <div className="row">
                {product.map((item, j) => {
                  return (
                    <div
                      className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-12"
                      key={j}
                    >
                      <ProductCard
                        name={item.name}
                        price={item.price}
                        img={item.img}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
              </div>
              </div>
    </>
  );
};
export default memo(ProductsPage);
