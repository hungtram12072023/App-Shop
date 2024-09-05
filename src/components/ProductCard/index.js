import { memo } from "react";
import "./style.scss"
import { ROUTER } from "util/router";
const { AiOutlineShoppingCart, AiOutlineEye } = require("react-icons/ai");
const { Link, generatePath } = require("react-router-dom");
const { fomatter } = require("util/formater");

 const ProductCard = ({name, price, img}) => {
    return (
            <div className="featured__item">
                <div className="featured__item_pic" style={{ backgroundImage: `url(${img})` }}>
                    <ul className="featured__item_pic_hover">
                        <li>
                            <AiOutlineEye />
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                    </ul>
                </div>
                <div className="featured__item_text">
                    <h6>
                        <Link to={generatePath(ROUTER.USER.PRODUCT, {id: 1})}>{name}</Link>
                    </h6>
                    <h5>
                        {fomatter(price)}
                    </h5>
                </div>
            </div>
    );
}
export default memo(ProductCard);