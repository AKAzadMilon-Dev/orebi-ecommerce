import React from "react";
import BreadCrumb from "../layout/BreadCrumb";
import Button from "../layout/Button";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import InputBox from "../layout/InputBox";

const Login = () => {
  return (
    <Container>
      <BreadCrumb />
      <p className="font-regular mt-12 md:mt-32 w-full md:w-[40%] font-dm text-base text-textColor">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <p className="my-16 w-full border-b border-solid border-[#F0F0F0]"></p>
      <div>
        <h4 className="mb-10 font-dm text-2xl md:text-4xl font-bold text-primary">
          Returning Customer
        </h4>
        <Flex className="flex">
          <div className="w-full border-b border-solid border-[#F0F0F0] pb-16 font-dm text-base outline-none">
            <InputBox
              as="input"
              placeholder="Your Email"
              title="Email address"
            />
            <InputBox
              as="input"
              type="password"
              placeholder="Your Password"
              title="Password"
            />
            <button className="border border-solid border-primary py-4 px-20 font-dm text-base font-bold text-black">
              Login
            </button>
          </div>
        </Flex>
        <div>
          <h4 className="mt-10 font-dm text-2xl md:text-4xl font-bold text-primary">
            New Customer
          </h4>
          <p className="font-regular my-10 w-full md:w-[40%] font-dm text-base text-textColor">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Button title="Continue" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
