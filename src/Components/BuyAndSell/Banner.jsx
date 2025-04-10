export default function Banner({ Image }) {
  return (
    <>
      <div>
        <figure className=" relative overflow-hidden">
          <img src={Image} alt="" className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </figure>
      </div>
    </>
  );
}
