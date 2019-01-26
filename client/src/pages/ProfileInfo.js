import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { FirstName, LastName, Email, Image } from "../components/Forms"

class ProfileInfo extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <FirstName />
                            <LastName />
                            <Email />
                            <Image />
                            {/* <form>
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
                            </form> */}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

export default ProfileInfo;