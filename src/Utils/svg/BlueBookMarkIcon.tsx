import React from 'react'
import { SvgXml } from 'react-native-svg';

const BlueBookMarkIcon = ({width,height}:any) => {
    const svg=`<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.40154 0H1.32069C0.696655 0 0.166668 0.562125 0.166668 1.2889V12.9829C0.168504 13.9053 1.17731 14.3382 1.75083 13.6907L4.44985 10.677C4.66614 10.425 5.05608 10.425 5.27238 10.677L7.9714 13.6907C8.54516 14.3384 9.55384 13.9049 9.55556 12.9829V1.2889C9.55556 0.562125 9.02557 0 8.40154 0Z" fill="#4D869B"/>
</svg>
`
return <SvgXml width={width} height={height} xml={svg} />;

}

export default BlueBookMarkIcon
