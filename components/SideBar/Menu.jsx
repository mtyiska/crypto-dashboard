import {
    FiChevronDown
} from "react-icons/fi";

const Menu = () =>{
    return(
        <div className="bg-gray-800-mike w-56 flex-none flex flex-col justify-between">
            <div className="overflow-y-auto active:text-gray-100 hover:text-gray-200 text-gray-400">
                <ul className="px2 py-3">
                    <li className="text-gray-300 px-2 active:text-gray-100 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                        <a href="#" className="flex items-center">
                            <span className="text-xl">#</span>
                            <span className="ml-2">welcome</span>
                        </a>
                    </li>
                    <li className="text-gray-300 px-2 active:text-gray-100 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                        <a href="#" className="flex items-center">
                            <span className="text-xl">#</span>
                            <span className="ml-2">faq</span>
                        </a>
                    </li>
                    <button className="flex items-center text-gray-500 hover:text-gray-200 active:font-semibold">
                        <ChevDown/>
                        <h3 className="uppercase tracking-wide font-semibold text-xs">Tailwind Css</h3>
                    </button>
                    <ul class="px-2 py-3 pt-2">
                        <li class="text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-750 rounded">
                            <a href="#" class="flex items-center">
                            <span class="text-xl">#</span>
                            <span class="ml-2">general</span>
                            </a>
                        </li>
                        <li class="text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900">
                            <a href="#" class="flex items-center">
                            <span class="text-xl">#</span>
                            <span class="ml-2">core-dev</span>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
            <div className="bg-gray-footer-mike h-12 px-3 py-2"> footer</div>
        </div>
    )
}

export default Menu

const ChevDown = () => <FiChevronDown size="32" className="text-gray-300" />;