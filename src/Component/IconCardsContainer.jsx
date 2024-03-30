import React from 'react';

const CardComponent = ({ title, img, content }) => {
    return <>
        <div class="col" style={{ padding: "45px" }}>
            <div class="card h-100" style={{ width: "100%" ,position:"static"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

const IconCardsContainer = () => {

    const data = [
        {
            name: 'Top  manufactures and companies ',
            img: "https://img.freepik.com/free-photo/rag-doll-with-tablet_1156-206.jpg?t=st=1709625924~exp=1709629524~hmac=a403d6db2c9fd0668c5d0184ae5fcff850fc8ff4a652116e9549e2f3d117f394&w=360",
            content: "Our clients are Top manufacturers and companies, showcasing our dedication to partnering with industry leaders."
        },
        {
            name: 'Expert sector knowledge',
            img: "https://img.freepik.com/free-photo/character-holding-blue-symbol_1156-294.jpg?t=st=1709625945~exp=1709629545~hmac=fa7fb975f924a234a64e77f05fe88568212753b483e3df444fdf0a0d78333348&w=740",
            content: "Providing opportunities to work with highly experienced and specialized professionals"
        },
        {
            name: 'Empowering Fresh Talent',
            img: "https://img.freepik.com/free-photo/character-moving-sign-with-cart_1156-292.jpg?t=st=1709625971~exp=1709629571~hmac=41add20deb0a51ce328bdd0dd16eb8c757ba0a7b62011768faa67e0a749a6f32&w=740",
            content: "Empowering freshers through comprehensive training programs to enhance their skills and secure rewarding positions in top-tier companies."
        },
        // {
        //     name: 'EMPLOYEES REMAINSTABLE',
        //     img: "https://img.freepik.com/free-photo/worker-with-briefcase-blue-arrow_1156-609.jpg?t=st=1709625998~exp=1709629598~hmac=62be41e344ce1a4aa8235ae97f73fa37ac2e8662a85a7922fd8112fbc4507a37&w=900",
        //     content: "95% of our candidates stay with their company for more than 18 months."
        // },
        // {
        //     name: 'ASSURED REBATE',
        //     img: "https://img.freepik.com/free-photo/rag-doll-with-wooden-stairs_1156-274.jpg?t=st=1709626045~exp=1709629645~hmac=54064efc1aa80b11cb2446ef822f02ab46803e6127b0f9a8ee7836d731d87bda&w=740",
        //     content: "If a candidate leaves, then you get a guaranteed rebate."
        // },
        // {
        //     name: ' NO RECRUIT, NO FEE',
        //     img: "https://img.freepik.com/free-photo/man-sitting-gavel_1048-1613.jpg?t=st=1709626068~exp=1709629668~hmac=c9ad02a5b7552ebb0b2fb36f8a9956a2c2378a4421e8df21d712911111f8f4e0&w=826",
        //     content: "We take no fee until the candidate is recruited and starts working."
        // }
    ];

    return <>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                data.map((item) => {
                    return <CardComponent
                        title={item.name}
                        img={item.img}
                        content={item.content}
                    />
                })
            }
        </div>
    </>
}

export default IconCardsContainer;
