import React from "react";

const ListEmergency = ({ icon: Icon, text }) => {
  return (
    <>
      <li className='flex gap-5'>
        <div className='rounded-full bg-white/20 p-2'>
          <Icon className="text-lg"/>
        </div>

        <p>{text}</p>
      </li>
    </>
  );
};

export default ListEmergency;
