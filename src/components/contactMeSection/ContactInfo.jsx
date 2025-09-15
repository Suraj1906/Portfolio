import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="surajbhardwaj5918@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="8076339303" Image={FiPhone} />
      <SingleInfo text="Faridabad,Haryana" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
