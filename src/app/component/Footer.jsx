import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
    return(
        <div className="w-full py-4 bg-gray-900">
            <div className="flex justify-center">
                <div className="flex items-center gap-1 text-white font-montserrat">
                    <div><AiOutlineCopyrightCircle/></div>
                    <div>International Conference 2024</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;