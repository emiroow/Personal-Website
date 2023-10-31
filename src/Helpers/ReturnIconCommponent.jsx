import { AiFillDashboard } from "react-icons/ai";
import { BsBarChartLineFill, BsUpload } from "react-icons/bs";
import { FaCertificate, FaUniversity } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { IoDocumentAttach, IoShareSocialSharp } from "react-icons/io5";
import { MdComment, MdContactMail, MdHomeRepairService } from "react-icons/md";
import { RiFolderHistoryFill } from "react-icons/ri";
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
  BsUpload,
};
