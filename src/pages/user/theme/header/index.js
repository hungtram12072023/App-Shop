import React, { useEffect, useState } from "react";
import { memo } from "react";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineUser,
  AiTwotoneMail,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { fomatter } from "util/formater";
import { ROUTER } from "util/router";


export const categroies = ["Rau Củ", "Nước Trái Cây", "Trái Cây", "Hải Sản", "Thịt Tươi"];
const Header = () => {
  const location = useLocation();
  const [isShow, setShow] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length < 1);
  const [isShowCategories, setShowCategories] = useState(isHome);
  const [menus, setMenus] = useState([
    {
      name: "Trang Chủ",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Cửa Hàng",
      path: ROUTER.USER.PRODUCTS,
    },
    {
      name: "Sản Phẩm",
      path: ROUTER.USER.HOME,
      isShowSuMenu: false,
      child: [
        {
          name: "Thịt",
          path: ROUTER.USER.HOME,
        },
        {
          name: "Rau Củ",
          path: ROUTER.USER.HOME,
        },
        {
          name: "Thức Ăn Nhanh",
          path: ROUTER.USER.HOME,
        },
      ],
    },
    {
      name: "Bài Viết",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Liên Hệ",
      path: ROUTER.USER.HOME,
    },
  ]);
  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome)
    setShowCategories(isHome)
  }, [location]);
  return (
    <>
      <div
        className={`humberger_menu_overlay ${isShow ? "active" : ""}`}
        onClick={() => setShow(!isShow)}
      ></div>
      <div className={`humberger_menu_wrapper ${isShow ? "show" : ""}`}>
        <div className="header_logo">
          <h1>TH SHOP</h1>
        </div>
        <div className="humberger_menu_cart">
          <ul>
            <li>
              <Link to={""}>
                <AiOutlineShoppingCart />
                <span>5</span>
              </Link>{" "}
            </li>
          </ul>
          <div className="header_cart_price">
            Giỏ Hàng: <span>{fomatter(100000)}</span>
          </div>
        </div>
        <div className="humberger_menu_widget">
          <div className="header_top_right_auth">
            <Link>
              <AiOutlineUser />
              <span>Đăng Nhập</span>
            </Link>
          </div>
        </div>
        <div className="humberger_menu_nav">
          <ul>
            {menus.map((menu, menuKey) => {
              return (
                <li key={menuKey} to={menu.path}>
                  <Link
                    to={menu.path}
                    onClick={() => {
                      const newMenus = [...menus];
                      newMenus[menuKey].isShowSuMenu =
                        !newMenus[menuKey].isShowSuMenu;
                      setMenus(newMenus);
                    }}
                  >
                    {menu.name}
                    {menu.child &&
                      (menu.isShowSuMenu ? (
                        <AiOutlineDownCircle />
                      ) : (
                        <AiOutlineUpCircle />
                      ))}
                  </Link>
                  {menu.child && (
                    <ul className={`header__menu_drop  ${menu.isShowSuMenu? "show_sup" : ""}`}>
                      {menu.child.map((childItem, menuChildKey) => {
                        return (
                          <li key={`${menuKey}-${menuChildKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="humberger_menu_right_social">
          <Link to={""}>
            <AiOutlineFacebook />
          </Link>
          <Link to={""}>
            <BsInstagram />
          </Link>
          <Link to={""}>
            <BsTwitter />
          </Link>
          <Link to={""}>
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="humberger_menu_contact">
          <ul>
            <li>
              <i className="fa fa-evelope" /> <AiTwotoneMail />tranhung@gmail.com
            </li>
            <li>Miễn phí đơn hành từ {fomatter(200000)}</li>
          </ul>
        </div>
      </div>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiTwotoneMail />
                  <span>tranhung@gmail.com</span>
                </li>
                <li>
                  <span>Miễn phí ship đơn từ {fomatter(200000)} </span>
                </li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <BsTwitter />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                    <span>Đăng Nhập</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xs-6 col-xl-3">
            <div className="header_logo">
              <h1>TH SHOP</h1>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => {
                  return (
                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                      <Link to={menu?.path}>{menu?.name}</Link>
                      {menu.child && (
                        <ul className="header_menu_drop">
                          {menu.child.map((childItem, childKey) => {
                            return (
                              <li key={`${menuKey}- ${childKey}`}>
                                <Link to={childItem.path}>
                                  {childItem.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-sm-8 col-xs-6 col-xl-3">
            <div className="header_cart">
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
              <div className="header_cart_price">
                <span>{fomatter(100000)}</span>
              </div>
            </div>
            <div className="humberger__open">
              <AiOutlineMenu onClick={() => setShow(!isShow)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row header_categories_container">
          <div className="col-lg-3 col-sm-12 col-xs-12 col-md-12 header_categories">
            <div
              className="header_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh Sách Sản Phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                {
                  categroies.map((item, k) => {
                    return (<li key={k}>
                      <Link to={ROUTER.USER.PRODUCTS}>{item}</Link>
                    </li>
                    )
                  })
                }
                
              </ul>
            )}
          </div>
          <div className="col-lg-9 col-md-12 col-xs-12 header_search_container">
            <div className="header_search">
              <div className="header_form">
                <form action="#">
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button type="submit" className="search-btn">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="header_search_phone">
                <div className="header_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="header_search_phone_text">
                  <p>0382.882.671</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            {
              isHome && (
            <div className="header_item">
              <div className="header_text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau Cỏ <br />{" "}
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className="primary-btn">
                  Mua Ngay
                </Link>
              </div>
            </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
