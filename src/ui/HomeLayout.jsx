import { TbLayoutDashboardFilled } from "react-icons/tb";
import styles from "./HomeLayout.module.css";
import { TiUserAdd } from "react-icons/ti";
import { MdOutlineLogin, MdOutlineMenu } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function HomeLayout() {
  const [toggleLeft, setToggleLeft] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  function handleToggleLeft() {
    setToggleLeft(!toggleLeft);
  }

  return (
    <div className={styles.home_layout}>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <div className={styles.left_side_container}>
            <div className={styles.user_container}>
              <img src="/user.png" alt="user" />
              <p>Unknown Unknown</p>
            </div>
            <div className={styles.main}>
              <div className={styles.col}>
                <TbLayoutDashboardFilled className={styles.main_icon} />
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </div>
              <div className={styles.col}>
                <TiUserAdd className={styles.main_icon} />
                <NavLink to={"/createCustomer"}>Add Customer</NavLink>
              </div>
            </div>
            <div className={styles.signout} onClick={() => handleClick()}>
              <MdOutlineLogin className={styles.icon} />
              <p>Sign Out</p>
            </div>
          </div>
        </div>
        {toggleLeft && (
          <>
            <div
              className={styles.overlay}
              onClick={() => setToggleLeft(false)}
            ></div>
            <div className={styles.mobile_left}>
              <div className={styles.left_side_container}>
                <div className={styles.user_container}>
                  <img src="/user.png" alt="user" />
                  <p>Unknown Unknown</p>
                </div>
                <div className={styles.main}>
                  <div className={styles.col}>
                    <TbLayoutDashboardFilled className={styles.main_icon} />
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                  </div>
                  <div className={styles.col}>
                    <TiUserAdd className={styles.main_icon} />
                    <NavLink to={"/createCustomer"}>Add Customer</NavLink>
                  </div>
                </div>
                <div className={styles.signout} onClick={() => handleClick()}>
                  <MdOutlineLogin className={styles.icon} />
                  <p>Sign Out</p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className={styles.toggle_left} onClick={handleToggleLeft}>
          <MdOutlineMenu />
        </div>
        <div className={styles.right_side}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
