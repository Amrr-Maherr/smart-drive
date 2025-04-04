import { Link } from "react-router-dom";

export default function ServicesBox({Data}) {
    return (
        <Link>
        <div className="bg-white py-[23px] px-[52px] flex items-center justify-center flex-col gap-5 rounded-[20px] h-[245px] shadow mx-auto my-5">
            <div>
                <img src={Data.image} alt="" />
            </div>
            <div>
                <p className="text-[16px] font-bold">{Data.title}</p>
            </div>
        </div>
        </Link>
    )
}