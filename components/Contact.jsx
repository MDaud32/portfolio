import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";
import bgImg from "../public/images/4833.jpg";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };
const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touch, setTouch] = useState({});

  const onBlur = ({ target }) =>
    setTouch((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const { values, isLoading, error } = state;
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const submitForm = async (e) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouch({});
      setState(initState);
      toast({
        title: "message send",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
    e.preventDefault();
  };
  return (
    <div className="w-full" id="contact">
      <div className="flex flex-col">
        <h1 className="text-5xl text-white font-bold mx-auto">Contact Me</h1>
        <div className="border-b-8 rounded-full border-gold w-20 mx-auto mt-4"></div>
        <p className="max-w-2xl mx-auto text-gray-400 text-xl mt-1 font-semibold">
          Lets keep in touch!
        </p>
      </div>
      <div className="md:w-9/12 p-4 mx-auto flex flex-col md:flex-row rounded-lg bg-gray-500/20 shadow-sm shadow-black mt-10">
        <div className="w-full md:w-1/2 justify-center md:p-2">
          <h1 className="text-white font-semibold text-2xl">Get in Touch🤝</h1>
          <h1 className="text-gray-300 font-semibold text-2xl mt-10 md:mt-24">
            Send your Message!
          </h1>
          <Image
            src={bgImg}
            alt="contact form pic"
            width={400}
            height={100}
            className="hidden md:block opacity-70 md:w-[500px] md:h-[250px] h-[150px] w-[600px] rounded-t-lg md:rounded-none"
          />
        </div>
        <div className="w-full md:w-1/2 md:p-10">
          {error && (
            <Text color="red.300" my="4">
              {error}
            </Text>
          )}
          <div className="bg-yellow-300 p-4 md:rounded-lg rounded-b-lg  py-8 space-y-2">
            <FormControl
              className="flex flex-col"
              isRequired
              isInvalid={touch.name && !values.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                bg="white"
                name="name"
                className="w-full p-4 h-12 md:p-3 rounded-md focus:outline-none bg-white text-2xl"
                errorBorderColor="red.300"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl
              className="flex flex-col"
              isInvalid={touch.email && !values.email}
              isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                bg="white"
                errorBorderColor="red.300"
                className="w-full p-4 md:p-3 rounded-md focus:outline-none"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl
              className="flex flex-col"
              isInvalid={touch.subject && !values.subject}
              isRequired>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                type="text"
                bg="white"
                errorBorderColor="red.300"
                className="w-full p-4 md:p-3 rounded-md focus:outline-none"
                placeholder="Enter your subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl
              className="flex flex-col"
              isInvalid={touch.message && !values.message}
              isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                type="text"
                bg="white"
                rows="4"
                errorBorderColor="red.300"
                className="w-full h-24 md:p-2 rounded-md focus:outline-none"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <Button
              variant="online"
              isLoading={isLoading}
              colorScheme="blue"
              disabled={!values.name || !values.email || !values.message}
              type="submit"
              onClick={submitForm}
              className="py-2 px-4 text-white bg-gray-800 rounded-lg font-semibold hover:bg-gray-700">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
