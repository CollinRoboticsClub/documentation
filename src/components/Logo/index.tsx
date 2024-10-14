// @ts-ignore
import LogoImageUrl from '@site/static/img/logo.png';

export default function Logo() {
    const logoSize: number = 128;

    return (
        <div className="image-container">
            <img src={LogoImageUrl} alt="CRC Logo" style={{
                height: logoSize,
                width: logoSize,
                // backgroundImage: "linear-gradient(-45deg, rgb(189, 52, 254) 50%, rgb(255, 54, 112) 50%)"
            }}/>
        </div>
    )
}
