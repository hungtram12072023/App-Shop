import React from "react";
import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import anh1 from "assets/user/images/categories/hinh7.jpg";
import anh2 from "assets/user/images/categories/hinh8.jpg";
import anh3 from "assets/user/images/categories/hoaqua.jpg";
import anh4 from "assets/user/images/categories/hopsua.jpg";
import featured1 from "assets/user/images/features/chuoi.jpg";
import featured2 from "assets/user/images/features/duahau.jpg";
import featured3 from "assets/user/images/features/hamburger.jpg";
import featured4 from "assets/user/images/features/nho.jpg";
import featured5 from "assets/user/images/features/oi.jpg";
import featured6 from "assets/user/images/features/tao.jpg";
import featured7 from "assets/user/images/features/thitbonat.jpg";
import featured8 from "assets/user/images/features/thittuoi.jpg";
import featured9 from "assets/user/images/features/xoai.jpg";
import banner1 from "assets/user/images/banner/banner1.jpg";
import banner2 from "assets/user/images/banner/traicay.jpg";
import { Link } from "react-router-dom";
import { fomatter } from "util/formater";
import ProductCard from "components/ProductCard";
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };
  const slider = [
    {
      bgImg: anh1,
      name: "Cam",
    },
    {
      bgImg: anh2,
      name: "Hoa quả khô",
    },
    {
      bgImg: anh3,
      name: "Hoa quả tươi",
    },
    {
      bgImg: anh4,
      name: "Sữa Hộp",
    },
  ];
  const featProducts = {
    all: {
      title: "Toàn bộ",
      product: [
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
        },{
          img: featured9,
          name: "Xoài",
          price: 14000,
        },
      ],
    },feashMeat: {
      title: "Thịt tươi",
      product: [
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
      ],
    },
    HoaQua: {
      title: "Hoa Quả",
      product: [
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
          img: featured9,
          name: "Xoài",
          price: 14000,
        },
      ],
    },
    DoanNhanh :{
      title: "Đồ ăn nhanh",
      product: [
        {
          img: featured3,
          name: "Hamburger",
          price: 67000,
        },
      ]
    }
  };
  const renderFeatureProducts = (data) => {
    const tabList = [];
    const tabPanels = [];
    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].product.forEach((item, j) => {
        tabPanel.push(<div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-12" key={j}>
          <ProductCard name={ item.name} price={ item.price} img={ item.img} />
        </div>);
      });
      tabPanels.push(tabPanel);
    });
    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => {
          return (
            <TabPanel key={key}>
              <div className="row">{item}</div>
            </TabPanel>
          );
        })}
      </Tabs>
    );
  };
  return (
    <>
      {/*Categories Begin*/}
      <div className="container container__categories">
        <Carousel responsive={responsive} className="categories_slider">
          {slider.map((item, slderKey) => {
            return (
              <div
                className="categories_slide_item"
                style={{ backgroundImage: `url(${item.bgImg})` }}
                key={slderKey}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/*Categories End*/}
      {/* Featured Begin*/}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeatureProducts(featProducts)}
        </div>
      </div>
      {/* Featured End*/}
      {/* Banner Begin*/}
      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner1} alt="banner" className="img2" />
          </div>
        </div>
        </div>
      {/* Banner End*/}
    </>
  );
};
export default memo(HomePage);
