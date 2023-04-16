import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./Styles/Form.module.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import { loginApi } from "../../Redux/Auth/Auth.actions";

const LoginForm = ({ label, checkBox }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(loginApi(userData));
  };
  useEffect(() => {
    if (user.token) {
      navigate("/dashboard/timetracker");
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.form}>
      <h5>{label}</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={onChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={onChange}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <div className={styles.formflex}>
          <Form.Check type="checkbox" label={checkBox} />
          <h6>Forgot Password?</h6>
        </div>

        <button type="submit" className={styles.btn}>
          Log In
        </button>
      </Form>

      <div className={styles.Or}>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>

      <button className={styles.btn2}>
        <div>
          <FcGoogle style={{ fontSize: "25px" }} />
        </div>
        <div>Continue with Google</div>
      </button>
    </div>
  );
};

export default LoginForm;
