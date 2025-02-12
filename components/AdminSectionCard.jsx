import { ListFilter } from "lucide-react";
import { Search } from "lucide-react";

const AdminSectionCard = ({ title, desc, children, style2 = false }) => {
  return (
    <section className="bg-[#E3E3E34D] p-6 rounded-[32px]">
      <div>
        {style2 ? (
          <div className="myFlex justify-between">
            <h3 className="text-[28px] font-bold mb-3">{title}</h3>
            <div className="bg-[#E6E6E6] rounded-2xl h-[43px] myFlex gap-3 justify-between px-4">
              <Search size={26} color="#B1B1B1" />
              <input
                type="text"
                placeholder="Conduct a search"
                className="placeholder:text-[#B1B1B1] bg-transparent w-full focus:outline-none"
              />
              <button className="hover:bg-white rounded-full p-1">
                <ListFilter size={22} />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-[704px]">
            <h3 className="text-[28px] font-bold mb-3">{title}</h3>
            {desc && <p className="text-sm text-[#7B7670]">{desc}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default AdminSectionCard;
