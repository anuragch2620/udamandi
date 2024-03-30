import React from 'react';
import DemoButton from '../../Component/DemoButton';
import Bannertext from '../../Component/BannerText/BannerText';
import IconCardsContainer from '../../Component/IconCardsContainer';
import Bannertext2 from '../../Component/BannerText2/BannerText2';
import Strip from '../../Main/Strip/Strip';

const Is = () => {
    return <>
        <div
            style={{
                height: '50vh',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://www.cio.com/wp-content/uploads/2023/05/it-service-ts-100688860-orig.jpg?quality=50&strip=all")'
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
                    <DemoButton name="" />

                </div>
            </div>
        </div>
     
    </>
}

export default Is;
