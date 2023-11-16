"use client";

import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../lib/api";
import IUser from "../interfaces/User";

export default function SplitScreen() {
  const navigate = useNavigate();
  const [form, setForm] = useState<IUser>({
    email: "",
    fullname: "",
    password: "",
  });

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await API.post("/auth/register", form);
      console.log("register success", response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form onSubmit={handleRegister}>
            <FormControl id="fullname">
              <FormLabel>Full name</FormLabel>
              <Input type="fullname" onChange={handleChange} name="fullname" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleChange} name="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handleChange} name="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                mt={4}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign Up
              </Button>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text>
                  Already have an Account?
                  <Text
                    as={"span"}
                    cursor={"pointer"}
                    color={"blue.400"}
                    onClick={() => navigate("/")}
                    ml={2}
                  >
                    Click Here to Login!
                  </Text>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://www.sewabelikantordijakarta.com/wp-content/uploads/2015/11/k_link_office_tower_142039.jpeg"
          }
        />
      </Flex>
    </Stack>
  );
}
