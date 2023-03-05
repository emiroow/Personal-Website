import { FaCertificate, FaUniversity } from "react-icons/fa"
import { BsBarChartLineFill } from "react-icons/bs"
import { MdComment, MdContactMail, MdHomeRepairService } from "react-icons/md"
import { AiFillDashboard } from "react-icons/ai"
import { RiFolderHistoryFill } from "react-icons/ri"
import { GiSkills } from "react-icons/gi"
import { IoShareSocialSharp, IoDocumentAttach } from "react-icons/io5"
import { HiOutlineHome } from "react-icons/hi"

export const FaIconDynamic = ({ type }) => {
    const FaIcon = components[type];
    return <FaIcon className="text-white"></FaIcon>;
};

const components = {
    FaCertificate,
    FaUniversity,
    MdComment,
    BsBarChartLineFill,
    MdContactMail,
    MdHomeRepairService,
    AiFillDashboard,
    RiFolderHistoryFill,
    GiSkills,
    IoShareSocialSharp,
    IoDocumentAttach,
    HiOutlineHome,
};