import React from "react";
import { RegisterType } from "../types";
import axios from "axios";
import { REGISTER_URL } from "../constant/url";

const useAuth = () => {
  const registerFunc = async (registerInfo: RegisterType) => {
    try {
      const { data } = await axios.post(REGISTER_URL, registerInfo);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { registerFunc };
};

export default useAuth;
