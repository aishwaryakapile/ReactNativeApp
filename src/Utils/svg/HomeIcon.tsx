import React from 'react'
import { SvgXml } from 'react-native-svg';

const HomeIcon = ({ width, height,color }: any) => {
    const svg = `<svg width="20" height="20" viewBox="0 0 20 20" fill=${color} xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1768_1132)">
<path d="M10 0L0 7.51039V20H7.44793V11.7969H12.5521V20H20V7.51039L10 0Z" fill=${color} />
</g>
<defs>
<clipPath id="clip0_1768_1132">
<rect width="20" height="20" fill=${color}/>
</clipPath>
</defs>
</svg>
`
    return <SvgXml width={width} height={height} color={color} xml={svg} />;
}

export default HomeIcon
