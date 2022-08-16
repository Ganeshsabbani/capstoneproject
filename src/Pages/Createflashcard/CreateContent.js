import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import Preview from "./components/Preview";
import { useDispatch } from "react-redux";
import { formDetails } from "../../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TermDiv from "./components/TermDiv";

const CreateContent = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [formValues, setFormValues] = useState(null);
  const fileRef = useRef(null);
  const editRef = useRef([]);
  const termRef = useRef([]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);
  const [localValues, setLocalValues] = useState([]);

  //Setting Initial Values for Form
  const initialValues = {
    groupName: "",
    description: "",
    term: [{ termDefination: currentValue, termName: "", termFile: null }],
    groupfile: null,
  };

  useEffect(() => {
    setLocalValues(JSON.parse(localStorage.getItem("values")));
  }, []);

  

  //Converting image files  uploaded into URL to show on next Page
  const handleUrl = (formData) => {
    const files = [];
    const groupFile=[]
    formData[formData.length - 1].term.map((item) => files.push(item.termFile));
  
    const arr = [];

    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = function () {
        arr.push(reader.result);
        localStorage.setItem("URLS", JSON.stringify(arr));
      };
    }

    formData.map((item) => groupFile.push(item.groupFile));
  
    const arr2 = [];
  
    for (let i = 0; i < groupFile.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(groupFile[i]);
      reader.onload = function () {
        arr2.push(reader.result);
        localStorage.setItem("GROUPURLS", JSON.stringify(arr2));
      };
    }
  console.log("arr2",arr2)

};

  //ValidationSchema Using Formik Yup
  const validationSchema = Yup.object({
    groupName: Yup.string().required("Required"),

    term: Yup.array(
      Yup.object({
        termName: Yup.string().required("Required"),
        termDefination: Yup.string().required("Required"),
      })
    ),
  });

  //Storing user form data on localstorage and dispatching to redux store
  const onSubmit = (values, submitProps) => {
    toast.success("FlashCard Created");
    formData.push(values);
    localStorage.setItem("values", JSON.stringify(formData));
    dispatch(formDetails(formData));
    handleUrl(formData);
    submitProps.setSubmitting(false);
  };

  //Getting values from store and filtering it for no duplicate groupName
  const storeValues = useSelector((state) => state);
  const storeArr = getUniqueListBy(
    storeValues.handleDetails.flat(),
    "groupName"
  );

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  if (storeArr) {
    localStorage.setItem("STORE", JSON.stringify(storeArr));
  } else {
    localStorage.setItem("STORE", JSON.stringify(formData));
  }

  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => {
     
        return (
          <Form>
            <div className="w-full bg-[rgba(245,241,236,255)] flex justify-center ">
              <div className="w-4/5  bg-[rgba(245,241,236,255)] mt-5 lg:w-11/12 md:w-full sm:w-11/12 ">
                <h3 className="font-semibold">Create Flashcard</h3>
                <div className="flex  my-4 ">
                  <h4 className="text-[rgba(212,62,61,255)] ">Create New</h4>
                  {localValues !== null || formData.length !== 0 ? (
                    <Link to="/flashcards">
                      <h4 className="ml-7 text-[rgba(135,146,164,255)]">
                        My Flashcard
                      </h4>
                    </Link>
                  ) : (
                    <h4
                      className="ml-7 text-[rgba(135,146,164,255)] cursor-pointer"
                      onClick={() => toast.error("Please create flashcard")}
                    >
                      My Flashcard
                    </h4>
                  )}
                </div>

                <div className="w-full h-1 bg-[#e3e0de]  ">
                  <div className="w-24 h-1 bg-[rgba(212,62,61,255)] rounded-lg "></div>
                </div>
                <div className="w-full bg-white p-2 flex justify-between rounded sm:flex-wrap sm:justify-center xm:px-0 drop-shadow-xl">
                  <div className="m-5 w-3/5 sm:w-4/5">
                    <h5 className="text-[rgba(135,146,164,255)] ">
                      Create Group*
                    </h5>
                    <div className="flex form-control ">
                      <Field
                        type="text"
                        name="groupName"
                        className="border-[#bbc2cd] border-2 rounded font-semibold w-2/5 sm:w-2/4 "
                        id="groupName"
                        
                      />

                      <div className="relative">
                        <BsFillCaretDownFill
                          color="rgba(135,146,164,255)"
                          className="m-2 p-0.5 cursor-pointer absolute right-0"
                        />
                      </div>
                      <div className="border-[#bbc2cd] border-2 w-1/3  font-semibold rounded ml-5 flex place-content-center  cursor-pointer place-items-center  outline-2  sm:w-1/2 active:translate-y-px ">
                        <MdOutlineUploadFile
                          color="rgba(50,79,234,255)"
                          className=" mr-2 w-4 h-5 "
                        />
                        <input
                          ref={fileRef}
                          hidden
                          multiple
                          type="file"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "groupfile",
                              event.currentTarget.files[0]
                            );
                          }}
                      
                        />

                        <div
                          className=" text-[rgba(50,79,234,255)] "
                          onClick={() => {
                            fileRef.current.click();
                          }}
                        >
                          <span className="text-sm">Upload Images</span>
                        </div>
                      </div>
                    </div>
                    <ErrorMessage name="groupName">
                      {(error) => (
                        <div className="error  text-red-800 ">{error}</div>
                      )}
                    </ErrorMessage>
                    <h5 className="text-[rgba(135,146,164,255)] m-2 ml-0">
                      Add description
                    </h5>
                    <Field
                      as="textarea"
                      className="w-4/5 resize-none border-[#bbc2cd] border-2 rounded text-[rgba(135,146,164,255)] drop-shadow-2xl"
                      name="description"
                      id="description"
                    >
                      This is simple textarea
                    </Field>
                  </div>
                  <div>
                    {formik.values.groupfile && (
                      <div className="w-48 h-48">
                        {formik.values.groupfile && (
                          <Preview file={formik.values.groupfile} />
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <TermDiv
                    editRef={editRef}
                    termRef={termRef}
                    formik={formik}
                  />
                </div>

                <div className="flex justify-center mt-10 ">
                  <button
                    type="submit"
                    className="h-8 w-2/12 rounded bg-[rgba(204,19,19,255)] text-[#fff]"
                  >
                    Create
                  </button>
                  <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateContent;
