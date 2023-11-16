import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../lib/api";
import ILogin from "../interfaces/Login";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", form);
      console.log("Login success", response);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign In!</Heading>
          <form onSubmit={handleLogin}>
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
                Sign In
              </Button>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text>
                  Create Account?
                  <Text
                    as={"span"}
                    cursor={"pointer"}
                    color={"blue.400"}
                    onClick={() => navigate("/auth/register")}
                  >
                    Click Here!
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
