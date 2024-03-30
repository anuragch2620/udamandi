import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Bannertext = ({h1, img1, h2, h3}) => {
    return (
        <>
            <Row >
                <h1 style={{ display: "flex", justifyContent: "center", padding: "38px" }}>
                    {h1}
                </h1></Row>
            <Row style={{ display: "flex" }}>
                <Col xs={12} md={6}>
                    <Image src={img1} fluid />
                </Col>
                <Col xs={12} md={6} style={{ padding: "50px" }}>
                    <h1>{h2}</h1>
                    <br />
                    <p style={{ fontSize: "20px" }}>
                    {h3}
                    </p>
                </Col>
            </Row>
        </>

    );
};

export default Bannertext;
