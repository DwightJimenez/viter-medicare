import React from "react";
import ListPharmacy from "../../../partials/ListPharmacy";
import { FaPills } from "react-icons/fa";

const Pharmacy = () => {
  return (
    <>
      <section className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5'>
            <div className='text-gray-500'>
              <h3 className='text-blue-800 font-bold text-3xl mb-4'>
                In-House Pharmacy
              </h3 >
              <p className="text-xl">
                Our fully-stocked pharmacy provides convenient access to
                medicatioins with expert advice from our licensed pharmacists.
              </p>
              <ul className='mt-4 flex flex-col gap-5'>
                <ListPharmacy
                  icon={FaPills}
                  title={"Prescription Medications"}
                  text={"Fast filling of all your prescription needs"}
                />
                <ListPharmacy
                  icon={FaPills}
                  title={"Over-the-Counter"}
                  text={"Wide Selection of health and wellness products"}
                />
                <ListPharmacy
                  icon={FaPills}
                  title={"Compounding Services"}
                  text={"Custom medication formulations when needed"}
                />
              </ul>
            </div>
            <div className='flex justify-center items-center'>
              <div className='rounded-lg bg-blue-200 p-6'>
                <FaPills  className="text-8xl text-blue-600"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pharmacy;
