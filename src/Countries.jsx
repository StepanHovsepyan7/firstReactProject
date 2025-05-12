export default function Countries() {
  return (
    <div className="max-w-[1440px] mx-auto py-5 px-4 mt-[103px] ">
      <h2 className="text-center text-[#110229] text-4xl font-bold">
        We are available in many <br /> well-known countries
      </h2>
      <div className="flex flex-wrap justify-center mt-[56px] gap-[30px]">
        <div className="relative">
          <div className="absolute left-22 top-20 left-[80px]">
            <h4 className="font-bold text-[24px]">AMERICA</h4>
          </div>
          <img src="/usa.png" alt="" />
        </div>
        <div className="relative">
          <div className="absolute left-22 top-20 left-[80px]">
            <h4 className="font-bold text-[24px]">SPAIN</h4>
          </div>
          <img src="/spain.png" alt="" />
        </div>
        <div className="relative">
          <div className="absolute left-22 top-20 left-[80px]">
            <h4 className="font-bold text-[24px]">LONDON</h4>
          </div>
          <img src="/london.png" alt="" />
        </div>
        <div className="relative">
          <div className="absolute left-22 top-20 left-[80px]">
            <h4 className="font-bold text-[24px]">FRANCE</h4>
          </div>
          <img src="/france.png" alt="" />
        </div>
      </div>
    </div>
  );
}
