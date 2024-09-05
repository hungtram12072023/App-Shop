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
import { AiOutlineAim, AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { fomatter } from "util/formater";
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

const ProductDetailPage = () => {
  const imgs = [featured1, featured2, featured3];
  return (
    <>
      <BreadCrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 product_img_detail">
            <img src={featured3} alt="product_Img" className="IMG" />
            <div className="product_img_main">
              {imgs.map((item, key) => {
                return <img src={item} alt="productPric" key={key} />;
              })}
            </div>
          </div>
          <div className="col-xl-6 product_text_detail">
            <h2>Hamburger</h2>
            <div className="seen-icon">
              <AiOutlineEye />
              {`10 (lượt xem)`}
            </div>
            <h3>{fomatter(200000)}</h3>
            <p>
              Thực chất Hamburger là tên của một loại bánh kẹp thịt xay. Bánh có
              hình tròn xốp mềm đặc trưng. Người ta sử dụng thịt xay hoặc thịt
              băm nặn thành viên đem nướng hoặc chiên lên cho chín rồi kẹp vào
              giữa vỏ bánh. Nhiều nơi người ra còn hun khói nhân bánh để tạo mùi
              hương hấp dẫn riêng.
            </p>
            <ul>
              <li>
                <b>Tinh Trạng: </b><span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng: </b><span>20</span>
              </li>
              <li>
                <b>Chia sẻ:</b>
                <span>
                  <AiOutlineFacebook />
                  <AiOutlineInstagram />
                  <AiOutlineCopy/>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ProductDetailPage);
