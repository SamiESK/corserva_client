// Import React
import React from 'react';

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Import Custom CSS
import './App.css';

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import other React Component
import CreateSale from './components/CreateSale.component';
import EditSale from './components/EditSale.component';
import SaleList from './components/SalesList.component';

// App Component
const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/CreateSale" className="nav-link">
                                Corserva PERN Stack App
                            </Link>
                        </Navbar.Brand>

                        <Nav className="justify-content-end">
                            <Nav>
                                <Link to="/CreateSale" className="nav-link">
                                    Create Sales
                                </Link>
                            </Nav>

                            <Nav>
                                <Link to="/SalesList" className="nav-link">
                                    Sales List
                                </Link>
                            </Nav>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="wrapper">
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={<CreateSale />}
                                />
                                <Route
                                    path="/CreateSale"
                                    element={<CreateSale />}
                                />
                                <Route
                                    path="/EditSale/:uuid"
                                    element={<EditSale />}
                                />
                                <Route
                                    path="/SalesList"
                                    element={<SaleList />}
                                />
                            </Routes>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Router>
);

export default App;
