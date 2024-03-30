import React, { useEffect } from 'react';
import DemoButton from '../../Component/DemoButton';
import Strip from '../../Main/Strip/Strip';
import IconCardsContainer from '../../Component/IconCardsContainer';
import Bannertext from '../../Component/BannerText/BannerText';
import ImgCards from '../../Component/ImgCards';
import Bannertext2 from '../../Component/BannerText2/BannerText2';
const Home = () => {
    return <>
        <div
            style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://www.swiftsolar.com/wp-content/uploads/2020/08/main_theme_bg.jpg")'
            }}
        >
            <div className='margin-top-parent-div'>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '500px',
                    alignItems: 'center',
                    width: "70%",
                    padding: "40px"
                }}>
                    <DemoButton name=" Empowering Your Business with Specialized Manpower Solutions in the Renewable Energy Industry and IT Sectors." />
                </div>
            </div>
        </div>
        <div
            style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114600.jpg?t=st=1709626353~exp=1709629953~hmac=4322f82e53084e9699fbf3832a4292ddf976a448abd4c69ac789018eb1632df7&w=1060")'
            }}

        >
            <Strip />
            <div style={{ display: "flex", justifyContent: "center", padding: "25px", fontWeight: "bold" }}>
                <h1> Experience Recruitment Service Like Never Before</h1>
            </div>

            <IconCardsContainer />
        </div>
        <div>
            <Bannertext
                h1="Committed Team, Satisfied Clients & Established Records"
                img1="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?t=st=1709626688~exp=1709630288~hmac=b03827c5a893c280c5d0fd70c4b210b5d11e2d1eed7712bdad37810c6e78c52d&w=740"
                h2="Uda Mandi"
                h3="Being the best job consultancy in India, our sole aim is to provide you with ample job opportunities that you deserve. At HRI, you can explore job opportunities in various sectors. You can also search for jobs with filters like job role, job title, skills, location preference, recent job postings, etc Moreover, our team of the best placement consultants in Delhi is available to enlighten you about current job opportunities and provide you with high-quality placement assistance. So, start looking for jobs according to your interest and skill set.
                        Being the best job consultancy in India, our sole aim is to provide you with ample job opportunities that you deserve. At HRI, you can explore job opportunities in various sectors. You can also search for jobs with filters like job role, job title, skills, location preference, recent job postings, etc Moreover, our team of the best placement consultants in Delhi is available to enlighten you about current job opportunities and provide you with high-quality placement assistance. So, start looking for jobs according to your interest and skill set."
            />
        </div>
        <div style={{ padding: "30px" }}>
            <div style={{ display: "flex", justifyContent: "center", padding: "25px", fontWeight: "bold" }}>
                <h1> Best Recruitment Agency in Delhi</h1>
            </div>
            <ImgCards />
        </div>
        <div>
            <Bannertext2 />
        </div>

    </>
}

export default Home;
