export default function Header() {
    return(
    <header className="w-full fixed bg-white ">
        <div className="max-w-[1440px] mx-auto py-5 px-4 flex items-center w-full">
            <div>
                <a href="#" className="text-white text-[30px]">
                    <img src="/logo.png" alt="" />
                </a>
            </div>
            <ul className="hidden  lg:flex justify-end items-center gap-[20px] lg:gap-[60px] ml-auto text-[#110229]">
                <li className="font-medium text-base ">
                    HOME
                </li>
                <li className="font-medium text-base cursor-pointer">
                    PROPERTIES
                </li>
                <li className="font-medium text-base cursor-pointer">
                    AGENTS
                </li>
                <li className="font-medium text-base cursor-pointer">
                    BLOG
                </li>
                <li>
                    <button className=" loginbtn text-[#1DAEFF] font-medium text-base border-solid w-[150px] h-[50px] border-2 rounded-lg pt-2 text-center font-bold cursor-pointer">LOG IN</button>
                </li>
            </ul>
        </div>
    </header>
    )
}