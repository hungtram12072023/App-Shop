import React from "react";
import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTER } from "util/router";
const BreadCrumb= (props) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb_text">
        <h2>TH SHOP</h2>
        <div className="breadcrumb_option">
          <ul>
            <li className="link">
              <Link to={ROUTER.USER.HOME}>Trang Chủ</Link>
            </li>
            <li>
              {props.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

};
export default memo(BreadCrumb);
