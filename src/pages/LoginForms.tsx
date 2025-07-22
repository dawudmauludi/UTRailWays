// pages/Login.tsx
import { useState } from "react";
import { cekRole, loginJwt } from "../services/AuthServices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/slice/auth/AuthSlice";
import { Form, Button, Container, Row, Col, Card, InputGroup } from "react-bootstrap";
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await loginJwt({ email, password });
      localStorage.setItem("token", result.token);
      const meResponse = await cekRole();

      dispatch(
        loginSuccess({
          token: result.token,
          role: meResponse.role,
        })
      );

      if (meResponse.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/pengguna");
      }
    } catch (err) {
      console.error(err);
      alert("Login gagal");
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                    <Shield color="white" size={30} />
                  </div>
                  <h3 className="mt-3 fw-bold">Welcome Back</h3>
                  <p className="text-muted">Sign in to your account</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><Mail size={16} /></InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><Lock size={16} /></InputGroup.Text>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Sign In
                    </Button>
                  </div>
                </Form>

                <div className="text-center mt-3 text-muted" style={{ fontSize: "0.875rem" }}>
                  Protected by advanced security
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
