import ServicesRow from "./ServicesRow";
import ServicesText from "./ServicesText";

export default function Services() {
    return (
      <>
        <section className="py-[72px]  bg-gray-200">
          <div className="container mx-auto w-[90%]">
            <ServicesText title="الخدمات" text="البحث عن الخدمات ومانقدمه لك" />
            <ServicesRow/>
          </div>
        </section>
      </>
    );
}