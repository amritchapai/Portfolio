import React from 'react'
import { Link } from 'react-router-dom';

const ContactCard = ({name, link, icon}) => {
  return (
    <Link to={link} target='blank'>
      <div className="flex items-center gap-2 text-xl">
        {icon}
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default ContactCard