import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    const accToken = localStorage.getItem("access_token");

    const headers = {
      Authorization: `Bearer ${accToken}`,
    };

    try {
      const response = await axios.post(
        "https://akbar03.site/chat",
        {
          username: value,
        },
        { headers }
      );
      props.onAuth({ ...response.data, secret: value });
      console.log(response, "===============");
    } catch (error) {
      // console.error("error", error);
    }
  };
  return (
    <>
      <div class="selection:bg-rose-500 selection:text-white">
        <div class="min-h-screen bg-rose-100 flex justify-center items-center">
          <div class="p-8 flex-1">
            <div class="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div class="relative h-48 bg-rose-500 rounded-bl-4xl">
                <svg
                  class="absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div class="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <h1 class="text-2xl font-semibold text-gray-900">
                  Welcome to mental care chat
                </h1>
                <form class="mt-12" onSubmit={onSubmit}>
                  <div class="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="username"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      username
                    </label>
                  </div>
                  <button class="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
