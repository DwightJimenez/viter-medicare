import React from "react";

const ListPharmacy = ({ icon: Icon, text, title }) => {
  return (
    <>
      <li className='flex gap-5 items-center'>
        <Icon className='text-2xl text-blue-600' />
        <div>
          <p className="font-bold text-blue-800">{title}</p>
          <p>{text}</p>
        </div>
      </li>
    </>
  );
};

export default ListPharmacy;
