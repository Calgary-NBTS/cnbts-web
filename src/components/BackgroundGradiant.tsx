
const BackgroundImage = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='100%'
            style={{
                zIndex: -1,
                objectFit: 'fill',
                position: 'absolute'
            }}
        >
            <rect fill='#ffffff' width='24' height='24'/>
            <defs>
                <linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(129,0.5,0.5)'>
                    <stop offset='0'  stopColor='#4FC3F7'/>
                    <stop offset='1'  stopColor='#EA80FC'/>
                </linearGradient>
            </defs>
            <pattern id='b'  width='20' height='20' patternUnits='userSpaceOnUse'>
                <circle  fill='#ffffff' cx='10' cy='10' r='10'/>
            </pattern>
            <rect width='100%' height='100%' fill='url(#a)'/>
            <rect width='100%' height='100%' fill='url(#b)' fillOpacity='0.07'/>
        </svg>
    )
}

export default BackgroundImage;