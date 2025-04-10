import AuthButton from "../Authentication/AuthButton";

export default function TrainersCard({ name, text, rev, img }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-[300px] flex flex-col items-center text-end space-y-2">
      <img
        src={img}
        alt={name}
        className="w-full h-40  object-cover rounded-xl"
      />
      <h2 className="text-xl font-bold text-end  w-full my-4">{name}</h2>
      <p className="text-gray-600 text-end  w-full my-4">{text}</p>
      <span className="text-yellow-500 text-end  w-full">{rev}</span>
      <AuthButton buttonText="عرض التفاصيل" />
    </div>
  );
}
