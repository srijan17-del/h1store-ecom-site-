import React from "react";
import { useFormik } from "formik";
import { contactSchema } from "../schemas/Validation";

const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { touched, handleChange, handleBlur, handleSubmit, values, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <div className="flex" onSubmit={handleSubmit}>
      <div className="w-1/2 m-10 p-10 flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wide">Contact Us</h1>
        <p className="font-serif text-justify  pl-14 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque lacus sed augue fermentum vehicula. Etiam ut magna
          hendrerit, egestas tortor quis, malesuada libero. In et accumsan urna.
          Fusce aliquam quis enim id consectetur. Sed tempor massa nec orci
          mollis porta. Etiam consequat sem libero, vitae consequat sem feugiat
          sit amet. Morbi eu sem neque.
        </p>
      </div>
      <div className="w-1/2 mt-16 flex flex-col items-center gap-5">
        <div>
          <input
            className="font-medium tracking-widest w-96 border-[0.5px] border-gray-400 px-4 py-2 active:border-gray-500"
            placeholder="USERNAME"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.name && touched.name ? (
            <p className="text-red-600 tracking-wider text-sm font-[250px] ">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <input
            className="font-medium tracking-widest w-96 border-[0.5px] border-gray-400 px-4 py-2 active:border-gray-500"
            placeholder="E-MAIL"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.email && touched.email ? (
            <p className="text-red-600 tracking-wider text-sm font-[250px] ">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <textarea
            className=" font-medium tracking-widest w-96 border-[0.5px] border-gray-400 px-4 py-2"
            name="message"
            placeholder="MESSAGE"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.message && touched.message ? (
            <p className="text-red-600 tracking-wider text-sm font-[250px] ">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          className="py-1 tracking-widest hover:border-teal-600 hover:bg-gray-700 duration-300 mx-auto text-sm border w-28 text-white bg-black "
          onClick={handleSubmit}
          type="button"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
