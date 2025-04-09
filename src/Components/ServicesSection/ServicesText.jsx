export default function ServicesText({title,text}) {
    return (
      <>
        <div className="flex items-end justify-center flex-col mb-[50px]">
          <h3 className="text-md md:text-3xl font-bold">{title}</h3>
          <hr className="w-[154px] mt-[12px] mb-[22px] border-t-2 border-blue-700" />
          <p className="text-sm md:text-[16px]">{text}</p>
        </div>
      </>
    );
}