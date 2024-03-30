import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Bannertext2 = () => {
    return (
        <>
            <Row > <h1 style={{ display: "flex", justifyContent: "center", padding: "38px" }}>Committed Team, Satisfied Clients & Established Records</h1></Row>
            <Row style={{ display: "flex" }}>

                <Col xs={12} md={6} style={{ padding: "50px" }}>
                    <h1>Committed Team, Satisfied Clients & Established Records</h1>
                    <br />
                    <p>Being the best job consultancy in India, our sole aim is to provide you with ample job opportunities that you deserve. At HRI, you can explore job opportunities in various sectors. You can also search for jobs with filters like job role, job title, skills, location preference, recent job postings, etc Moreover, our team of the best placement consultants in Delhi is available to enlighten you about current job opportunities and provide you with high-quality placement assistance. So, start looking for jobs according to your interest and skill set.
                        Being the best job consultancy in India, our sole aim is to provide you with ample job opportunities that you deserve. At HRI, you can explore job opportunities in various sectors. You can also search for jobs with filters like job role, job title, skills, location preference, recent job postings, etc Moreover, our team of the best placement consultants in Delhi is available to enlighten you about current job opportunities and provide you with high-quality placement assistance. So, start looking for jobs according to your interest and skill set.
                    </p>
                </Col>

                <Col xs={12} md={6}>
                    <Image src="https://img.freepik.com/free-vector/co-workers-concept-landing-page_23-2148322670.jpg?t=st=1709629280~exp=1709632880~hmac=1d8def7174a50907e4bf532202baa1522a02446037d4ec56bc0e2a7ec9e4cc3d&w=740" fluid />
                </Col>
            </Row>
            
        </>

    );
};

export default Bannertext2;
