import React from 'react';
import DemoButton from '../../Component/DemoButton';
import Bannertext from '../../Component/BannerText/BannerText';
import IconCardsContainer from '../../Component/IconCardsContainer';
import Bannertext2 from '../../Component/BannerText2/BannerText2';
import Strip from '../../Main/Strip/Strip';

const PnM = () => {
    return <>
        <div
            style={{
                height: '50vh',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: 'url("https://img.freepik.com/free-photo/young-man-working-warehouse-with-boxes_1303-16617.jpg?t=st=1710690007~exp=1710693607~hmac=421a26efca1f6c97a20a6aa86bb1ca031ef12aaa6bc9c28b9998a94c3d6c3405&w=1060")'
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
                    <DemoButton name="Packageing & Maintainence" />

                </div>
            </div>
        </div>
       
    </>
}

export default PnM;
