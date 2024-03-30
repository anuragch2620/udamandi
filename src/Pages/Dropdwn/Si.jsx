import React from 'react';
import DemoButton from '../../Component/DemoButton';
import Bannertext from '../../Component/BannerText/BannerText';
import IconCardsContainer from '../../Component/IconCardsContainer';
import Bannertext2 from '../../Component/BannerText2/BannerText2';
import Strip from '../../Main/Strip/Strip';
import Siform from '../../Component/Form/Siform';

const Si = () => {
    return <>
        <div
            style={{
                height: '50vh',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://www.hatch.com/-/media/Hatch-Corporate/Expertise-pages/Renewable-Power_b.jpg?h=580&iar=0&w=1920&hash=8E8DF9250C3F050EBFC6D9A6FB92DFC2")'
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
                    <DemoButton name="Solar Installation" />

                </div>
            </div>
        </div>
        <div style={{padding:"30px"}}> 
            <div className='row'>
                <h1>
                    Overview :
                </h1>
                <p>
                    Join our team as a Solar Installation Technician and be at the forefront of the renewable energy revolution. As a key member of our company, you will play a vital role in installing solar panels and ensuring the seamless integration of solar energy systems for our clients. If you are passionate about sustainability, enjoy working with your hands, and thrive in a dynamic environment, this position is perfect for you.
                </p>
            </div>
       
            <div className='row'>
                <h1>
                    Responsibility :
                </h1>
                <ul>
                    <li>Solar Panel Installation: Lead the installation process of solar panels on residential and commercial properties, including rooftop and ground-mounted systems, following industry standards and safety protocols.</li>
                    <li>Electrical Wiring: Perform electrical wiring and connections to integrate solar panels into the existing electrical systems of buildings, ensuring proper functionality and compliance with regulations.</li>
                    <li>Mounting and Racking: Assemble and mount solar panel racking systems securely onto various surfaces, such as roofs or the ground, utilizing appropriate tools and techniques.</li>
                    <li>System Testing: Conduct thorough testing and quality checks on installed solar energy systems to verify performance, troubleshoot issues, and ensure optimal efficiency.</li>
                    <li>Maintenance and Repairs: Provide ongoing maintenance and repair services for solar installations, including cleaning panels, replacing faulty components, and addressing any performance issues.</li>
                    <li>Customer Interaction: Interact with clients professionally, addressing any concerns or questions they may have regarding the installation process, system operation, and maintenance requirements.</li>
                    <li>Safety Compliance: Adhere to all safety procedures and regulations to minimize risks and ensure a safe working environment for yourself, colleagues, and clients.</li>
                    <li>Documentation: Maintain accurate records of installation activities, including work completed, materials used, and any relevant documentation for warranty purposes or future reference.</li>
                </ul>
            </div>
        
            <div className='row'>
                <h1>
                    Requirements:
                </h1>
                <ul>
                    <li>Technical Skills: Proficiency in electrical wiring, construction techniques, and the use of hand and power tools. Previous experience in solar installation or a related field is highly desirable.</li>
                    <li>Physical Fitness: Ability to perform physically demanding tasks, including lifting heavy equipment, working at heights, and enduring various weather conditions.</li>
                    <li>Problem-Solving Abilities: Strong problem-solving skills to troubleshoot issues effectively and find innovative solutions during installation and maintenance activities.</li>
                    <li>Attention to Detail: Meticulous attention to detail to ensure the accuracy and quality of installations, wiring connections, and system configurations.</li>
                    <li>Communication Skills: Excellent communication and interpersonal skills to interact with clients, team members, and supervisors professionally and effectively.</li>
                    <li>Safety Consciousness: Commitment to adhering to safety protocols and regulations to prevent accidents and injuries in the workplace.</li>
                    <li>Certifications: Possession of relevant certifications such as NABCEP (North American Board of Certified Energy Practitioners) or OSHA (Occupational Safety and Health Administration) training is advantageous.</li>
                    <li>Driving License: Valid driver's license and reliable transportation to travel to various job sites as required.</li>

                </ul>
                <p>
                    Join our team and be part of a sustainable future powered by solar energy. If you're ready to make a difference and contribute to the growth of renewable energy solutions, apply now to become a Solar Installation Technician!
                </p>
                <br/>
               
            </div>
            <div>
                <Siform/>
            </div>
        </div>

    </>
}

export default Si;
