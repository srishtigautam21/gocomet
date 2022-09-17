import { useState } from "react";
import { CartIcon, HeartIcon } from "../../Assets/Svg/AllSvg";
import "./Navbar.css";
import { CartModal } from "../../pages/Modal/CartModal";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [openModalCart, setOpenModalCart] = useState(false);
  const { state } = useCart();
  const { cartlistitem } = state;
  const totalCartQuantity = cartlistitem.length;
  return (
    <div>
      <nav className='nav-component nav-padding'>
        <div className='content-header'>
          <div className='component-libraryl-link'>Fake Myntra</div>
          {/* <img src={logo} alt='logo' /> */}
        </div>
        <ul className='nav-list-items-flex'>
          {/* <li className='list-style link-alignment home-alignment'>
            <Link className='link ecom-link-color' to='/'>
              Home
            </Link>
          </li>
          <li className='list-style link-alignment'>
            <Link className='link ecom-link-color' to='/products'>
              Products
            </Link>
          </li> */}

          <li className='list-style icons-alignment'>
            <div className='link'>
              <div className='ecom-badge-wrapper'>
                <CartIcon
                  className=' nav-icons'
                  onClick={() => setOpenModalCart((open) => !open)}
                />
                <div className='badge icon-over-badge'>
                  {Number(totalCartQuantity)}
                </div>
              </div>
            </div>
          </li>
          <li className='list-style icons-alignment'>
            <div className='link ecom-link-color' to='/wishlist'>
              <div className='ecom-badge-wrapper'>
                <HeartIcon className='nav-icons' />
                <div className='badge icon-over-badge'>
                  {/* {totalWishListQuantity} */}0
                </div>
              </div>
            </div>
          </li>
        </ul>
        {openModalCart && <CartModal setOpenModalCart={setOpenModalCart} />}
      </nav>
    </div>
  );
};

export { Navbar };
