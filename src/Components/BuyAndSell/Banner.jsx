import Image from "../../assets/Untitled-1 1.png"
export default function Banner() {
    return (
        <>
        <div>
            <figure className="h-[40dvh]">
                <img src={Image} alt=""  className="h-full object-cover"/>
            </figure>
        </div>
        </>
    )
}