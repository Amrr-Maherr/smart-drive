import TrainersCard from "./TrainersCard";

export default function TrainersRow() {
  const TrainersData = [
    {
      name: "محمد علي",
      text: "عدد الحصص المكتملة: 100 حصة",
      rev: "(120 تقييم)",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "أحمد حسن",
      text: "عدد الحصص المكتملة: 80 حصة",
      rev: "(95 تقييم)",
      img: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "سارة يوسف",
      text: "عدد الحصص المكتملة: 110 حصة",
      rev: "(130 تقييم)",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "خالد إبراهيم",
      text: "عدد الحصص المكتملة: 70 حصة",
      rev: "(85 تقييم)",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "ندى خالد",
      text: "عدد الحصص المكتملة: 90 حصة",
      rev: "(100 تقييم)",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "عبدالله صالح",
      text: "عدد الحصص المكتملة: 105 حصة",
      rev: "(115 تقييم)",
      img: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "ليلى عمر",
      text: "عدد الحصص المكتملة: 95 حصة",
      rev: "(98 تقييم)",
      img: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "ياسر محمود",
      text: "عدد الحصص المكتملة: 85 حصة",
      rev: "(92 تقييم)",
      img: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "دعاء علي",
      text: "عدد الحصص المكتملة: 75 حصة",
      rev: "(80 تقييم)",
      img: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "رائد أحمد",
      text: "عدد الحصص المكتملة: 120 حصة",
      rev: "(140 تقييم)",
      img: "https://i.pravatar.cc/150?img=10",
    },
    {
      name: "فاطمة زيد",
      text: "عدد الحصص المكتملة: 88 حصة",
      rev: "(89 تقييم)",
      img: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "حسام جمال",
      text: "عدد الحصص المكتملة: 102 حصة",
      rev: "(110 تقييم)",
      img: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center items-start my-5">
      {TrainersData.map((trainer, index) => (
        <TrainersCard
          key={index}
          name={trainer.name}
          text={trainer.text}
          rev={trainer.rev}
          img={trainer.img}
        />
      ))}
    </div>
  );
}
