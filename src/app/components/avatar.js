import '../css/avatar.css'
import Image from 'next/image'

const Avatar = () => {
    return (
    <div className="
        flex
        justify-center
        items-center
    ">
        <Image src={'/favicon.ico'} width={100} height={100}/>
    </div>)
}

export default Avatar