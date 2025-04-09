import { useState } from "react";

export default function Filter() {
  const [minValue, setMinValue] = useState(500000);
  const [maxValue, setMaxValue] = useState(4000000);

  const MIN = 500000;
  const MAX = 4000000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 100000);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 100000);
    setMaxValue(value);
  };

  const carBrands = ["أودي", "بي إم دبليو", "شيرى", "شيفروليه", "ستروين"];
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const [carCondition, setCarCondition] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [mileage, setMileage] = useState("");
  const [carType, setCarType] = useState("");

  return (
    <div className="w-full px-4 py-6">
      <label className="block mb-4 text-sm font-medium text-gray-900">
        نطاق السعر
      </label>

      {/* Range Slider */}
      <div className="relative mb-6">
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minValue}
          onChange={handleMinChange}
          className="absolute pointer-events-none appearance-none w-full h-2 bg-transparent z-20"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute pointer-events-none appearance-none w-full h-2 bg-transparent z-10"
        />
        <div className="relative w-full h-2 bg-gray-200 rounded-lg z-0">
          <div
            className="absolute h-2 bg-blue-600 rounded-lg"
            style={{
              left: `${((minValue - MIN) / (MAX - MIN)) * 100}%`,
              width: `${((maxValue - minValue) / (MAX - MIN)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-6">
        <span>من: ج.م {minValue.toLocaleString()}</span>
        <span>إلى: ج.م {maxValue.toLocaleString()}</span>
      </div>

      {/* Car Brands Filter */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium text-gray-900">نوع السيارة</p>
        <div className="flex flex-col gap-4">
          {carBrands.map((brand) => (
            <label
              key={brand}
              className="flex flex-row-reverse items-center justify-between gap-4 text-sm"
            >
              <span>{brand}</span>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Filter Form */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          حالة السيارة
        </label>
        <select
          value={carCondition}
          onChange={(e) => setCarCondition(e.target.value)}
          className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        >
          <option value="">اختر حالة السيارة</option>
          <option value="available">متاحة</option>
          <option value="reserved">محجوزة</option>
          <option value="purchasing">جارى شراء السيارة</option>
        </select>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            سنة التصنيع من
          </label>
          <input
            type="number"
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
            placeholder="اختر السنة"
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            إلى
          </label>
          <input
            type="number"
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
            placeholder="اختر السنة"
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          كيلو متر
        </label>
        <select
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        >
          <option value="">اختر المسافة</option>
          <option value="10000">10,000 كم أو أقل</option>
          <option value="30000">30,000 كم أو أقل</option>
          <option value="50000">50,000 كم أو أقل</option>
          <option value="75000">75,000 كم أو أقل</option>
          <option value="100000">100,000 كم أو أقل</option>
          <option value="125000">125,000 كم أو أقل</option>
          <option value="150000">150,000 كم أو أقل</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          نوع السيارة
        </label>
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">اختر نوع السيارة</option>
          <option value="sedan">سيدان</option>
          <option value="suv">SUV</option>
          <option value="hatchback">هاتشباك</option>
        </select>
      </div>
    </div>
  );
}
