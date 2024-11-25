import React from 'react'
import ContactCard from './ContactCard';
import { GithubIcon, PhoneCallIcon} from 'lucide-react';
import { TfiEmail } from 'react-icons/tfi';
import { LiaLinkedinIn } from 'react-icons/lia';

const Contact = () => {
  return (
    <div className="bg-gray-800 w-screen min-h-screen py-8">
      <div className="flex flex-row items-center px-3 gap-1">
        <div className="flex flex-1">
          <hr className="w-full h-1 bg-white border-none rounded-md" />
        </div>
        <h1 className="text-5xl font-semibold text-white">Contact</h1>
        <div className="flex flex-1">
          <hr className="w-full h-1 bg-white border-none rounded-md" />
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
        <div className="flex flex-col gap-6 w-[40%] ">
          <ContactCard
            name={"LinkedIn"}
            link={
              "https://www.linkedin.com/in/amrit-chapai-7902bb336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            icon={<LiaLinkedinIn size={38} />}
          />
          <ContactCard
            name={"Git-Hub"}
            link={"https://github.com/amritchapai"}
            icon={<GithubIcon size={38} />}
          />
          <ContactCard
            name={"chapaiamrit10@gmail.com"}
            link={
              "https://mail.google.com/mail/?view=cm&fs=1&to=chapaiamrit10@gmail.com"
            }
            icon={<TfiEmail size={38} />}
          />
          <div className="flex items-center gap-2 text-xl">
            <PhoneCallIcon />
            <span>9843368073</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact