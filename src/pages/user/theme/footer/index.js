import React from "react";
import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-xl-3">
            <div className="footer_about">
              <h1 className="footer_about_logo">TH SHOP</h1>
              <ul>
                <li>Địa chỉ: 175 Định Công</li>
                <li>Phone: 0382882671</li>
                <li>Email: tranhung@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-xl-6">
            <div className="footer_widget">
              <h5>Cửa Hàng</h5>
              <ul>
                <li>
                  <Link to="">Liên Hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link>Giỏ Hàng</Link>
                </li>
                <li>
                  <Link>Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 col-xl-3">
            <div className="footer_widget">
              <h5>Khuyến mãi & ưu đãi</h5>
              <p>Đăng ký thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập mail" />
                  <button type="submit" className="btn-submit">
                    Đăng ký
                  </button>
                </div>
              </form>
              <div className="footer_widget_social">
                <div>
                    <Link to={""}>
                      <AiOutlineFacebook />
                                  </Link>
                              </div>
                    <div><Link to={""}>
                      <BsInstagram />
                              </Link>
                              </div>
                  
                   <div> <Link to={""}>
                      <BsTwitter />
                    </Link>
                    </div>
                    <div><Link to={""}>
                      <AiFillLinkedin />
                    </Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
