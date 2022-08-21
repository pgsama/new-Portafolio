import "animate.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const onClick = (param = "") => {

    setTimeout(() => {
    const home = document.querySelector('#home');
    home.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(() => {
      home.classList.remove("animate__fadeOut");
      navigate(param);
    }, 1000);
    }
      , 1);
  }

  return (
    <div id="home" className="w-screen h-screen bg-zinc-900">
      <div className="w-full h-full grid justify-center items-center animate__animated animate__fadeIn">
        <div className="grid grid-cols-2 row-auto justify-around flex-wrap gap-4 sm:gap-6 sm:flex relative">
          <div className="opacity-0 absolute w-full translate-y-12 justify-between sm:opacity-100 flex">
            <p className="text-white white-shadow translate-x-1">portafolio</p>
            <p className="text-white white-shadow translate-x-1">github</p>
            <p className="text-white white-shadow translate-x-1">facebook</p>
            <p className="text-white white-shadow -translate-x-1">whatsapp</p>
          </div>
          <button className="custom-button flex items-center" to="/about" onClick={() => onClick("about")}>
            <svg
              style={{
                margin: "0 auto",
                width: "37px",
                height: "37px",
              }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.375 11.336v14.328a.925.925 0 0 1-.476.809l-12.95 7.194a.925.925 0 0 1-.898 0L5.1 26.473a.925.925 0 0 1-.476-.809V11.336c0-.336.182-.646.476-.809l12.95-7.194a.925.925 0 0 1 .898 0l12.95 7.194a.925.925 0 0 1 .476.809Z"
                stroke="silver"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="m5.44 11.244 12.61 7.006c.28.156.62.156.9 0l12.654-7.03M18.5 32.375V18.5"
                stroke="silver"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.024 18.236 6 11.556a.925.925 0 0 0-1.374.808v13.3c0 .336.182.645.476.809l12.025 6.68a.925.925 0 0 0 1.374-.808v-13.3a.925.925 0 0 0-.476-.81Z"
                fill="silver"
                stroke="silver"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button className="custom-button flex items-center" to="/">
            <svg
              style={{
                margin: "0 auto",
                width: "31px",
                height: "31px",
              }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.667 28.451v-3.707a4.354 4.354 0 0 0-1.215-3.37c4.056-.453 8.319-1.99 8.319-9.042a7.027 7.027 0 0 0-1.938-4.844 6.549 6.549 0 0 0-.116-4.87s-1.524-.452-5.05 1.912a17.283 17.283 0 0 0-9.042 0c-3.526-2.364-5.05-1.912-5.05-1.912a6.549 6.549 0 0 0-.117 4.87 7.027 7.027 0 0 0-1.937 4.882c0 7.001 4.262 8.538 8.318 9.042a4.354 4.354 0 0 0-1.214 3.332v3.707"
                stroke="silver"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.625 25.868c-3.875 1.257-7.104 0-9.042-3.875"
                stroke="silver"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button className="custom-button flex items-center" to="/">
            <svg
              style={{
                margin: "0 auto",
                width: "31px",
                height: "31px",
              }}
              viewBox="0 0 128 128"
            >
              <path
                fill="#fff"
                d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
              ></path>
            </svg>
          </button>
          <button className="custom-button flex items-center" to="/">
            <svg
              style={{
                margin: "0 auto",
                width: "31px",
                height: "31px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
