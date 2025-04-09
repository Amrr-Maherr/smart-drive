export default function CarCard({ carData }) {
  return (
    <div className="w-full sm:w-1/2 md:w-[383px] p-2">
      <div className="w-full rounded-lg border">
        <img
          src={carData.imageUrl}
          alt={`${carData.brand} ${carData.model}`}
          className="w-full h-[200px] object-cover rounded-t-lg bg-red-600"
        />
        <div className="p-4 text-end">
          <p className="text-black font-semibold text-lg my-3">
            {carData.brand} {carData.model}
          </p>
          <p className="text-black text-sm">
            {carData.year} - {carData.mileage} كم
          </p>
          <p className="text-black text-sm my-3">
            السعر: {carData.price.toLocaleString()} ج.م
          </p>
          <p className="text-black text-sm mt-1">
            حالة السيارة:{" "}
            {carData.condition === "available"
              ? "متاح"
              : carData.condition === "reserved"
              ? "محجوز"
              : "تم البيع"}
          </p>
        </div>
      </div>
    </div>
  );
}
