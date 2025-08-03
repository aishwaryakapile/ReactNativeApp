import React from 'react'
import { SvgXml } from 'react-native-svg';

const EmergencyService = ({ width, height }: any) => {
    const svg = `<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1914_786)">
<path d="M0.832047 33.8906H9.41017V38.1094H0.832047V33.8906Z" fill="#FFB800"/>
<path d="M64.2539 33.8906H72.832V38.1094H64.2539V33.8906Z" fill="#FFB800"/>
<path d="M54.7304 15.1188L60.696 9.1532L63.6788 12.136L57.7132 18.1016L54.7304 15.1188Z" fill="#FFB800"/>
<path d="M15.9503 18.1011L9.98476 12.1355L12.9675 9.15271L18.9331 15.1183L15.9503 18.1011Z" fill="#FFB800"/>
<path d="M34.7227 0H38.9414V8.57812H34.7227V0Z" fill="#FFB800"/>
<path d="M17.8477 63.5625C15.5175 63.5625 13.6289 65.451 13.6289 67.7812V72H60.0352V67.7812C60.0352 65.451 58.1466 63.5625 55.8164 63.5625H17.8477Z" fill="#0A7EA5"/>
<path d="M17.8477 36V59.3438H55.8164V36C55.8164 25.5317 47.3004 17.0156 36.832 17.0156C26.3637 17.0156 17.8477 25.5317 17.8477 36ZM34.7227 29.6719H38.9414V42.3281H34.7227V29.6719ZM34.7227 46.5469H38.9414V50.7656H34.7227V46.5469Z" fill="#0A7EA5"/>
</g>
<defs>
<clipPath id="clip0_1914_786">
<rect width="72" height="72" fill="white" transform="translate(0.832047)"/>
</clipPath>
</defs>
</svg>
`
    return <SvgXml width={width} height={height} xml={svg} />;
}

export default EmergencyService
