// @ts-ignore
import LogoImageUrl from '@site/static/img/logo.png';

export default function Logo() {
    const logoSize: number = 128;

    return (
        <div className="image-container">
            <img src={LogoImageUrl} alt="CRC Logo" style={{
                height: logoSize,
                width: logoSize,
            }}/>
        </div>
    )
}
