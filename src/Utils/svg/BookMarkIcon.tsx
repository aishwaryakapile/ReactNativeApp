import React from 'react'
import { SvgXml } from 'react-native-svg';

const BookMarkIcon = ({ width, height }: any) => {
    const svg = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1768_464)">
<path d="M16.1669 0H4.56263C3.61755 0 2.78773 0.777476 2.78773 1.69775V18.8639C2.78773 19.172 2.87346 19.4287 3.01164 19.6271C3.17689 19.8642 3.44297 20.0001 3.72828 20C3.99804 20 4.28524 19.8799 4.55047 19.6534L9.74219 15.2453C9.90254 15.1084 10.1329 15.0299 10.3723 15.0299C10.6117 15.0299 10.8416 15.1084 11.0024 15.2457L16.1768 19.6527C16.4429 19.8799 16.7103 20.0001 16.9796 20.0001C17.435 20.0001 17.8789 19.6488 17.8789 18.864V1.69775C17.8789 0.777476 17.1119 0 16.1669 0Z" fill="white" fill-opacity="0.28"/>
</g>
<defs>
<clipPath id="clip0_1768_464">
<rect width="20" height="20" fill="white" transform="translate(0.333344)"/>
</clipPath>
</defs>
</svg>
`
    return <SvgXml width={width} height={height} xml={svg} />;
}

export default BookMarkIcon
