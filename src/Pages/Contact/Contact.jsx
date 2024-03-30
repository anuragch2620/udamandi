import React from 'react'
import DemoButton from '../../Component/DemoButton';
import Map from '../../Component/Map/Map';

const Contact = () => {
  return (
    <>
        <div
            style={{
                height: '50vh',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://www.adityabirlarenewables.com/Upload/homepage/home-kmb-intro-bg.png")'
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
                    <DemoButton name="Contact Us" />

                </div>
            </div>
        </div>
        
        <div>
            <Map/>
        </div>
    </>
  )
}

export default Contact