export default function Banner({ Image }) {
  return (
    <>
      <div>
        <figure className=" relative overflow-hidden h-[50dvh]">
          <img src={Image} alt="" className="h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </figure>
      </div>
    </>
  );
}
