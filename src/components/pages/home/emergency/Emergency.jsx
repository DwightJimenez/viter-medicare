import React from "react";
import { FaAmbulance, FaRegClock } from "react-icons/fa";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import ListEmergency from "../../../partials/ListEmergency";

const Emergency = () => {
  return (
    <>
      <section className='bg-blue-600 py-20 text-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex justify-center items-center'>
              <FaAmbulance className='text-white text-8xl md:text-9xl ' />
            </div>
            <div>
              <h3 className='text-3xl font-bold'>24/7 Emergency Services</h3>
              <h4 className='text-xl my-4'>
                Our emergency department is staffed around the clock with
                experienced medical professionals ready to handle any medical
                crisis
              </h4>
              <ul className="flex flex-col gap-5">
                <ListEmergency
                  icon={FaRegClock}
                  text={"Immediate response to critical conditions"}
                />
                <ListEmergency
                  icon={HiOutlineRectangleStack}
                  text={" State-of-the-art emergency facilities"}
                />
                <ListEmergency
                  icon={IoCallOutline}
                  text={"Emergency hotlines: (555) 123-4567"}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
