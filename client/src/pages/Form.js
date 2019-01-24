import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class Form extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <label>
                                    First Name: 
                                    <input type="text" name="firstName" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                            <br />
                            <form>
                                <label>
                                    Last Name:
                                    <input type="text" name="lastName" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                            <br />
                            <form>
                                <label>
                                    Email: 
                                    <input type="text" name="email" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

export default Form;