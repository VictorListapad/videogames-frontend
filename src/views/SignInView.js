import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Form, Button } from "react-bootstrap";

const SignInView = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    const res = await signInUser(user);
    if (res?.errors) {
      setErrors(res.errors);
    }
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  };
  return (
    <div className="signForm">
      <h2>Sign In</h2>
      <Form
        className="form"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group>
          <Form.Control
            value={user.email}
            onChange={handleChange}
            name="email"
            required
            type="email"
            placeholder="email"
          />
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={user.password}
            onChange={handleChange}
            name="password"
            required
            type="password"
            placeholder="password"
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
          <Button type="submit">Log In</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignInView;
