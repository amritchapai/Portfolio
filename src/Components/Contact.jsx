import React from "react";
import ContactCard from "./ContactCard";
import { GithubIcon, PhoneCallIcon } from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import { LiaLinkedinIn } from "react-icons/lia";

const Contact = () => {
  const contactInfo = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/amrit-chapai-7902bb336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LiaLinkedinIn size={38} />,
      type: "card",
    },
    {
      name: "Git-Hub",
      link: "https://github.com/amritchapai",
      icon: <GithubIcon size={38} />,
      type: "card",
    },
    {
      name: "chapaiamrit10@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=chapaiamrit10@gmail.com",
      icon: <TfiEmail size={38} />,
      type: "card",
    },
    {
      name: "9843368073",
      icon: <PhoneCallIcon size={38} />,
      type: "phone",
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen py-24 px-4 md:px-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 bg-white rounded-md flex-1" />
        <h1 className="text-3xl md:text-5xl font-semibold text-white whitespace-nowrap">
          Contact
        </h1>
        <div className="h-1 bg-white rounded-md flex-1" />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-orange-600 rounded-tr-xl rounded-bl-xl p-6 md:p-8 text-white shadow-lg shadow-gray-600 transform-gpu hover:scale-105 transition duration-300">
          <div className="flex flex-col gap-6 w-full md:w-4/5 mx-auto">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="transform-gpu hover:translate-x-2 transition duration-200"
              >
                {contact.type === "card" ? (
                  <ContactCard
                    name={contact.name}
                    link={contact.link}
                    icon={contact.icon}
                  />
                ) : (
                  <div className="flex items-center gap-4 text-lg md:text-xl">
                    {contact.icon}
                    <span>{contact.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
