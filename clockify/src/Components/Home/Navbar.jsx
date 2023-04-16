import React from "react";
import styles from "./Styles/Navbar.module.css";
import logo from "./Assets/clockify-logo.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Auth.types";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick2 = () => {
    dispatch({ type: logout });
    navigate("/");
  };

  return (
    <div className={styles.NavContainer}>
      <div className={styles.Navbox}>
        <div className={styles.Logo} onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.Navflex}>
          <div>
            <h6 onClick={() => navigate("/features")}>FEATURES</h6>
            <h6 onClick={() => navigate("/downloads")}>DOWNLOAD</h6>
          </div>
        </div>

        <div className={styles.bttn6}>
          {user.token ? (
            <button onClick={handleClick2} className={styles.bttn2}>
              Logout
            </button>
          ) : (
            <>
              <h6 onClick={() => navigate("/login")}>LOGIN</h6>
              <button
                onClick={() => navigate("/signup")}
                className={styles.bttn2}
              >
                SIGN UP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
