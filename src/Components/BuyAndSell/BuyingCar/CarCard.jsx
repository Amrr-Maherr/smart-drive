import AuthButton from "../../Authentication/AuthButton";

export default function CarCard({ carData }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-[300px] flex flex-col items-center text-end space-y-2 my-5">
      <img
        src={carData.imageUrl}
        alt={`${carData.brand} ${carData.model}`}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h2 className="text-xl font-bold text-end w-full my-4">
        {carData.brand} {carData.model}
      </h2>
      <p className="text-gray-600 text-end w-full">
        {carData.year} - {carData.mileage.toLocaleString()} كم
      </p>
      <p className="text-gray-600 text-end w-full">
        السعر: {carData.price.toLocaleString()} ج.م
      </p>
      <p className="text-gray-600 text-sm text-end w-full my-5">
        حالة السيارة:{" "}
        {carData.condition === "available"
          ? "متاح"
          : carData.condition === "reserved"
          ? "محجوز"
          : "تم البيع"}
      </p>
      <AuthButton buttonText="عرض التفاصيل" />
    </div>
  );
}
