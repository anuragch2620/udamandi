import React from 'react'

const DemoButton = ({ name, fontColor = "Black" }) => {
    return <>
        <h1 style={{
            color: fontColor,
            fontWeight: "bold",
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            height:"40%",
        }}>
             {name}
        </h1>
    </>
}

export default DemoButton;
