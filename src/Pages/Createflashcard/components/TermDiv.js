import React from "react";
import TermPreview from "./TermPreview";
import { Field, FieldArray, ErrorMessage } from "formik";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";

//Term component
const TermDiv = ({ formik, editRef, termRef }) => {
  return (
    <div>
      <FieldArray name="term">
        {({ push, remove }) => (
          <div className="drop-shadow-xl rounded">
            {formik.values.term.length > 0 &&
              formik.values.term.map((data, i) => (
                <div>
                  <div className="w-full bg-white p-2 mt-5 flex place-content-evenly form-control rounded sm:block sm:pl-5 items-baseline ">
                    <div className="rounded-full bg-[rgba(212,62,61,255)] w-7 h-7 text-white flex justify-center items-center sm:mt-2">
                      {i + 1}
                    </div>
                    <div className="my-5 w-2/6 form-control relative sm:w-4/5  ">
                      <h5 className="text-[rgba(135,146,164,255)] ">
                        Enter Term*
                      </h5>
                      <div className="flex w-full">
                        <Field
                          innerRef={(el) => (editRef.current[i] = el)} //To get reference of selected termName
                          type="text"
                          name={`term.${i}.termName]`}
                          className="border-[#bbc2cd] border-2 rounded-l border-r-0 w-full font-semibold "
                          id={`termName${i}`}
                        />
                        <ErrorMessage name={`term.${i}.termName`}>
                          {(error) => (
                            <div className="error text-red-800 absolute top-14">
                              {error}
                            </div>
                          )}
                        </ErrorMessage>

                        <div className="border-[#bbc2cd] border-2 rounded-r border-l-0">
                          <BsFillCaretDownFill
                            color="rgba(135,146,164,255)"
                            className="m-2 p-0.5 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-2/6 my-5 sm:w-4/5 ">
                      <h5 className="text-[rgba(135,146,164,255)] ">
                        Enter Defination*
                      </h5>
                      <div className="flex">
                        <Field
                          as="textarea"
                          name={`term.${i}.termDefination`}
                          className="border-[#bbc2cd] border-2 rounded resize-none w-full font-semibold overflow-y-scroll "
                        />
                      </div>
                      <ErrorMessage name={`term.${i}.termDefination`}>
                        {(error) => (
                          <div className="error text-red-800 ">{error}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="flex justify-center self-center w-1/6 sm:w-1/2 xxm:w-full">
                      <input
                        id={i}
                        ref={(el) => (termRef.current[i] = el)} //To get reference of selected image
                        hidden
                        type="file"
                        onChange={(event) => {
                          formik.setFieldValue(
                            `term.${i}.termFile`,
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      {data.termFile ? (
                        <TermPreview file={data.termFile} />
                      ) : (
                        <button
                          type="button"
                          className=" text-[rgba(50,79,234,255)] border-2  h-8 w-full border-[#2f4dea]  outline-2 rounded font-semibold md:text-sm active:translate-y-px "
                          onClick={() => {
                            termRef.current[i].click();
                          }}
                        >
                          <span>Select Image</span>
                        </button>
                      )}
                    </div>
                    {data.termFile ? (
                      <div className="bg-white text-[rgba(50,79,234,255)] flex flex-col justify-evenly sm:flex sm:flex-row sm:justify-start items-center">
                        <FaTrashRestoreAlt
                          onClick={() => remove(i)}
                          className="cursor-pointer sm:ml-12 "
                        />
                        <BiEdit
                          size="20px"
                          className="cursor-pointer sm:ml-24"
                          onClick={() => {
                            editRef.current[i].focus();
                          }}
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ))}
            <div className="px-10 pb-10 bg-[#fff] sm:pt-4">
              <button
                type="button"
                onClick={() =>
                  push({
                    //formik push method to create new input fields
                    termDefination: "",
                    termName: "",
                    termFile: null,
                  })
                }
              >
                +Add more
              </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default TermDiv;
