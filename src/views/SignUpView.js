import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
const SignUpView = () => {
  const navigate = useNavigate();
  const { signUpUser } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
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
    const res = await signUpUser(user);
    if (res?.errors) {
      setErrors(res.errors);
    }
    setUser({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
    navigate("/");
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <Form
        className="form"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group>
          <Form.Control
            value={user.firstName}
            onChange={handleChange}
            name="firstName"
            required
            type="text"
            placeholder="First Name"
          />
          <Form.Control.Feedback type="invalid">
            First name is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={user.lastName}
            onChange={handleChange}
            name="lastName"
            required
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback type="invalid">
            Last name is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={user.username}
            onChange={handleChange}
            name="username"
            required
            type="text"
            placeholder="Username"
          />
          <Form.Control.Feedback type="invalid">
            Username is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={user.email}
            onChange={handleChange}
            name="email"
            required
            type="email"
            placeholder="Email"
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
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignUpView;
