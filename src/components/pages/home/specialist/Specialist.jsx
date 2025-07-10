import React from "react";
import CardSpecialist from "../../../partials/CardSpecialist";
import { FaUserDoctor } from "react-icons/fa6";

const Specialist = () => {
  return (
    <>
      <section id='doctors' className='bg-gray-50 py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className=' text-center mb-16'>
            <h2 className='text-3xl text-blue-800 font-bold mb-4'>
              Meet Our Specialists
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Our team of board-certified physicians are dedicated to your
              health and wellbeing.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
          
            <CardSpecialist
              icon={FaUserDoctor}
              name={"Dr. Sarah Johnson"}
              specialization={"General Practioner"}
              description={
                "With over 15 years of experience, Dr. Johnson provides compassionate primary care."
              }
            />
            <CardSpecialist
              icon={FaUserDoctor}
              name={"Dr. Michael Chen"}
              specialization={"Cardiologist"}
              description={
                "Specializing in interventional cardiology with a focus on preventive care."
              }
            />
            <CardSpecialist
              icon={FaUserDoctor}
              name={"Dr. Emily Rodriquez"}
              specialization={"Pediatrician"}
              description={
                "Dedicated to providing exceptional care for infants, children, and adolescents."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialist;
