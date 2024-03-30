import React from 'react';
import DemoButton from '../../Component/DemoButton';
import Bannertext from '../../Component/BannerText/BannerText';
import IconCardsContainer from '../../Component/IconCardsContainer';
import Bannertext2 from '../../Component/BannerText2/BannerText2';
import Strip from '../../Main/Strip/Strip';

const About = () => {
    return <>
        <div
            style={{
                height: '50vh',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://media.cnn.com/api/v1/images/stellar/prod/230605113344-3m-us-factory-1207-file-restricted.jpg?c=16x9&q=h_833,w_1480,c_fill")'
            }}
        >
            <div className='margin-top-parent-div'>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '300px',
                    alignItems: 'center',
                    width: "100%",
                    padding: "40px"
                }}>
                    <DemoButton name="About Us" />

                </div>
            </div>
        </div>
        <div>
            <Bannertext
                h1="Team, Satisfied Clients & Established Records"
                img1="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?t=st=1709626688~exp=1709630288~hmac=b03827c5a893c280c5d0fd70c4b210b5d11e2d1eed7712bdad37810c6e78c52d&w=740"
                h2="Uda Mandi"
                h3="Being the best job consultancy in India, our sole aim is to provide you with ample job opportunities that you deserve. At HRI, you can explore job opportunities in various sectors. You can also search for jobs with filters like job role, job title, skills, location preference, recent job postings, etc Moreover, our team of the best placement consultants in Delhi is available to enlighten you about current job opportunities and provide you with high-quality placement assistance. So, start looking for jobs according to your interest and skill set.
                        Being the best job consultancy in India, our sole aim is to provide you with ample job opportunities that you deserve. At HRI, you can explore job opportunities in various sectors. You can also search for jobs with filters like job role, job title, skills, location preference, recent job postings, etc Moreover, our team of the best placement consultants in Delhi is available to enlighten you about current job opportunities and provide you with high-quality placement assistance. So, start looking for jobs according to your interest and skill set."
            />
        </div>
        <div>
            <IconCardsContainer/>
        </div>
        <div>
            <Bannertext2/>
            <Strip/>
        </div>
    </>
}

export default About;
