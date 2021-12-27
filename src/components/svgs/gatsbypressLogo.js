import React from "react"
function GatsbypressLogo ({ colorMode, w, h }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={w} 
            height={h}
            viewBox="0 0 135 27.121">
                <text 
                    transform="translate(34 19)" 
                    fill={colorMode === "light" ? "#55616D" : "#F4F5F6"}
                    fontSize="18" 
                    fontFamily="SegoeUI-Bold, Segoe UI, sans-serif" 
                    fontWeight="700">
                        <tspan x="0" y="0">gatsbypress</tspan>
                </text>
                <path 
                d="M28.48,10.62a13.248,13.248,0,0,0-2-3.22A13.53,13.53,0,1,0,7.8,26.72,13.09,13.09,0,0,0,11,28.55a13.39,13.39,0,0,0,5.07,1A13.56,13.56,0,0,0,29.6,16a13.39,13.39,0,0,0-1.12-5.38ZM16.06,5.19a10.71,10.71,0,0,1,4.52,1h0a4.39,4.39,0,0,1-1.08.31,5.73,5.73,0,0,0-4.85,4.85A3,3,0,0,1,11.94,14a5.73,5.73,0,0,0-4.85,4.85,2.91,2.91,0,0,1-.79,1.74h0A10.8,10.8,0,0,1,16.07,5.17ZM7.79,23c.12-.11.24-.21.36-.33a5.48,5.48,0,0,0,1.62-3.23,2.92,2.92,0,0,1,.87-1.82,2.83,2.83,0,0,1,1.81-.86,5.73,5.73,0,0,0,4.85-4.85A2.92,2.92,0,0,1,18.17,10,2.87,2.87,0,0,1,20,9.17a5.48,5.48,0,0,0,3-1.43,10.51,10.51,0,0,1,2.36,2.78.862.862,0,0,1-.13.14,2.87,2.87,0,0,1-1.81.88,5.71,5.71,0,0,0-4.85,4.85,3,3,0,0,1-2.69,2.68A5.76,5.76,0,0,0,11,23.92a3.14,3.14,0,0,1-.49,1.37A10.891,10.891,0,0,1,7.79,23Zm8.27,3.86a10.841,10.841,0,0,1-3-.42,5.779,5.779,0,0,0,.64-2,3,3,0,0,1,2.68-2.68,5.73,5.73,0,0,0,4.86-4.85,3,3,0,0,1,2.68-2.68,5.71,5.71,0,0,0,2.56-1A10.82,10.82,0,0,1,16.06,26.81Z" 
                transform="translate(-2.471 -2.429)" 
                fill="#f56565"/>
        </svg>
    )
}
export default GatsbypressLogo