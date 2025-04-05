export default function CategoriesBox({ele}) {
    return (
      <>
        <div className="h-[560px] w-1/2 rounded-3xl flex items-end justify-center py-20 gap-[11px]" style={{ backgroundImage: `url(${ele.image})` }}>
          <div className="flex items-center justify-center text-center flex-col text-white w-1/2">
            <h2 className="text-[40px]">{ele.title}</h2>
            <p className="text-[16px]">{ele.text}</p>
          </div>
        </div>
      </>
    );
}