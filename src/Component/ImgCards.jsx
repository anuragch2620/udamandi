import React from 'react';

const ImgCardComponent = ({ title, img, content }) => {
    return <>
        <div class="col">
            <div class="card" style={{ width: "100%", height: "auto", zIndex: -1 }}>
                <img src={img} class="card-img-top" alt="..." style={{ width: "100%" }} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{content}</p>
                </div>
            </div>
        </div>
    </>
};

const ImgCards = () => {

    const data = [
        {
            name: 'Solar Installation',
            img: "https://img.freepik.com/free-photo/foreman-businessman-solar-energy-station_1157-35687.jpg?t=st=1709628139~exp=1709631739~hmac=338b7cef6636e581604a5c525622eb97a8489702b942ecdee86d9dd40d7be42e&w=1060",
            content: "We will assign industry specific recruitment experts to help you get the best candidates."
        },
        {
            name: 'Pump Installation',
            img: "https://img.freepik.com/free-photo/person-working-building-construction_23-2149184938.jpg?t=st=1709628215~exp=1709631815~hmac=3bbfe85ea4ca9a2e5f23f7c41daa97125529693d973e6c0ba6d3376dc9a4af4c&w=1060",
            content: "We access multiples job boards, CV databases & social media touchpoints."
        },
        {
            name: 'IT Services',
            img: "https://img.freepik.com/free-photo/hr-representatives-positively-greeting-female-job-candidate_1163-4702.jpg?t=st=1709628314~exp=1709631914~hmac=a869e4a837b027367dce752bd3a2eb7282ca5769df5efefe740a47972253dc41&w=1060",
            content: "On an average, we take 7 days of time to fill the vacancies of our clients."
        },
        {
            name: 'HR Services',
            img: "https://img.freepik.com/free-photo/human-resources-concept-with-hand_23-2150389101.jpg?t=st=1709628379~exp=1709631979~hmac=6e387d67b9165bc562768f2af4f802377da803e6c18aec214a71ab69f8d13696&w=996",
            content: "95% of our candidates stay with their company for more than 18 months."
        },
        {
            name: 'Pakage And Maintaince',
            img: "https://img.freepik.com/free-photo/small-business-owner-packing-product-parcel-boxes-delivery_53876-146800.jpg?t=st=1709628457~exp=1709632057~hmac=995b53c511d2fa622c85051e903a663a1892931699825c0b9d06fb6551451dfd&w=1060",
            content: "If a candidate leaves, then you get a guaranteed rebate."
        },
        {
            name: 'Support Desk',
            img: "https://img.freepik.com/free-photo/customer-service-cute-guy-grey-suit-with-computer-headset-waving-hands-videocall_140725-164277.jpg?t=st=1709628542~exp=1709632142~hmac=4a07055a7dd8aaad0df9fb6c25a430b99127b3ada12d829b20cec616be2a1ba5&w=1060",
            content: "We take no fee until the candidate is recruited and starts working."
        }
    ];

    return <>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                data.map((item) => {
                    return <ImgCardComponent
                        title={item.name}
                        img={item.img}
                        content={item.content}
                    />
                })
            }
        </div>
    </>
}

export default ImgCards;
