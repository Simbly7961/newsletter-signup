import SignUpButton from "./SignUpButton";
import LeftPhoto from "../assets/images/illustration-sign-up-desktop.svg";
import listIcon from "../assets/images/icon-list.svg";
import { useState } from "react";

const SignUpView = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail) {
      console.log("Submitted email:", email);
    } else {
      console.log("Invalid email format:", email);
    }
  };
  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.validity.valid);
  };

  return (
    <div className="SignUpView-Wrapper text-[#242845] bg-white rounded-[30px] flex justify-center items-center w-full h-full font-roboto-regular text-center">
      <div className="Left-Side flex-1 flex flex-col px-10 py-20 gap-6 h-full w-1/2">
        <h1 className="font-roboto-bold font-bold">Stay Updated!</h1>
        <h3 className="text-start">
          Join 60,000+ managers receiving monthly <br />
          update on:
        </h3>
        <ul>
          <li className="flex gap-3">
            <img src={listIcon} />
            <span> Product discovery and building what matters</span>
          </li>
          <li className="flex gap-3">
            <img src={listIcon} />
            <span> Measuring to ensure updates are a success</span>
          </li>
          <li className="flex gap-3">
            <img src={listIcon} /> <span> And much more!</span>
          </li>
        </ul>
        <form className="flex flex-col" onSubmit={handleOnSubmit}>
          <label className="self-start mb-2">Email address</label>
          <input
            type="email"
            className="p-3 border border-black bg-white rounded-lg mb-6 text-[16px]"
            value={email}
            placeholder="abc@abcmail.com"
            onChange={handleInputChange}
            onInvalid={handleInputChange}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          ></input>
          <SignUpButton />
        </form>
      </div>
      <div className="Right-Side flex-1 p-5 h-full w-1/2">
        <div className="image-wrapper overflow-hidden">
          <img className="h-full w-full" src={LeftPhoto} />
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
