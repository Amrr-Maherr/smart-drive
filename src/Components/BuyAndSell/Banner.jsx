
export default function Banner({Image}) {
    return (
        <>
        <div>
            <figure className="h-[40dvh]">
                <img src={Image} alt=""  className="h-full"/>
            </figure>
        </div>
        </>
    )
}