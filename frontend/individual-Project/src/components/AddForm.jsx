import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [input, setInput] = useState({
    title: "",
    advice: "",
    TypeId: "",
  });
  const [type, setType] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const accToken = localStorage.getItem("access_token");

        const headers = {
          Authorization: `Bearer ${accToken}`,
        };

        const { data } = await axios.get("https://akbar03.site/type", {
          headers,
        });
        setType(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(input, "=============");

      const accToken = localStorage.getItem("access_token");

      const headers = {
        Authorization: `Bearer ${accToken}`,
      };

      await axios.post("https://akbar03.site/advice", input, { headers });

      console.log("sukes add");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=""></div>

      <section className="py-[200px]">
        <div className="relative mx-auto w-full max-w-md bg-[#FFC5C5] px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 py-10 ">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-[#860A35]">
                Add Advice
              </h1>
              <p className="mt-2 text-[#860A35]">tell me your experience !!!</p>
            </div>
            <div className="mt-5">
              <form onSubmit={handleOnSubmit}>
                <div className="relative mt-6">
                  <input
                    type="text"
                    id="title"
                    className=" mt-1 w-full bg-[#FFC5C5] border-b-2 border- px-0 py-1 placeholder:text-transparent border-[#860A35] focus:outline-none text-[#860A35]"
                    autoComplete="off"
                    name="title"
                    value={input.title}
                    onChange={handleOnChange}
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-[#860A35] opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#860A35] peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-[#860A35]"
                  >
                    Title
                  </label>
                </div>
                <div className="relative mt-6">
                  <textarea
                    name="advice"
                    id="advice"
                    cols="30"
                    rows="5"
                    className=" mt-1 w-full bg-[#FFC5C5] border-b-2 border- 
                    px-0 py-1 placeholder:text-transparent 
                    border-[#860A35] focus:outline-none text-[#860A35]"
                    value={input.advice}
                    onChange={handleOnChange}
                  ></textarea>
                  <label
                    htmlFor="advice"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-[#860A35] opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#860A35] peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-[#860A35]"
                  >
                    Advice
                  </label>
                </div>
                <div className="relative mt-6">
                  <select
                    id="type"
                    name="TypeId"
                    className=" mt-1 w-full bg-[#FFC5C5] border-b-2 border- px-0 py-1 placeholder:text-transparent border-[#860A35] focus:outline-none text-[#860A35]"
                    value={input.TypeId}
                    onChange={handleOnChange}
                  >
                    <option value="" disabled>
                      ============ Choose Type ============
                    </option>
                    {type.map((el) => (
                      <option value={el?.id} className="text-white">
                        {el?.type}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor="type"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-[#860A35] opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#860A35] peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-[#860A35]"
                  >
                    Type
                  </label>
                </div>
                <div className="my-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#860A35] px-3 py-4 text-[#FFC5C5] focus:bg-[#860A35] focus:outline-none"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddForm;
