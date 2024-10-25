import React, { useState } from "react";
import LoginPhoneNumberFrame from "./LoginPhoneNumberFrame";
import {
  Box,
  Input,
  Text,
  HStack,
  Link,
  Container,
  InputGroup,
  InputLeftElement,
  Divider,
} from "@chakra-ui/react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { MdOutlineLocalPhone } from "react-icons/md";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";

// Define your validation schema with Yup
const phoneValidation = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number should only contain digits")
    .min(10, "Phone number should be at least 10 digits")
    .max(15, "Phone number should be at most 15 digits"),
});

const LoginPhoneNumber = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Setup form handling with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phoneValidation),
  });

  // Handle form submission
  const onSubmit = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("phoneNumber", data?.phoneNumber);
      navigate("/login-otp");
    }, 2000); // 2-second delay
  };

  return (
    <LoginPhoneNumberFrame>
      <Container maxW={"container.xl"}>
        <Box w={"100%"} my={5} boxShadow={"md"}>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            bg={"#fff"}
            p={4}
            borderRadius={"md"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box maxW={650}>
              <Text
                color={"#100F14"}
                fontWeight={600}
                fontSize={"xl"}
                textAlign={"center"}
                mb={2}
              >
                Log In to OptiFii
              </Text>
              <Text
                color={"#49475A"}
                fontWeight={500}
                fontSize={"sm"}
                textAlign={"center"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur.
              </Text>
              <Box mt={12}>
                <Text fontSize={"sm"} fontWeight={500} color={"#313039"} mb={2}>
                  Enter phone number
                </Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineLocalPhone color="#C33FAD" />
                  </InputLeftElement>
                  <Input
                    maxLength={15}
                    pattern="/^[+()?[\d -]+$/"
                    type="number"
                    placeholder="Enter your phone number"
                    {...register("phoneNumber")}
                    fontSize={"sm"}
                    fontWeight={500}
                  />
                </InputGroup>
                {errors?.phoneNumber && (
                  <span className="text-danger web-text-small fw-bold ps-2 d-flex align-items-center gap-1 mt-1">
                    <TiWarning className="fw-bold fs-5 " />{" "}
                    {errors?.phoneNumber?.message}
                  </span>
                )}
              </Box>

              <Box px={4} py={6}>
                <Box mt={6}>
                  <HStack justifyContent={"center"} mt={6}>
                    <PrimaryButton
                    isLoading={isLoading}
                      type="submit"
                      w={"300px"}
                      title={"Send OTP"}
                    />
                  </HStack>
                  <HStack justifyContent={"center"} mt={4}>
                    <Text fontSize={"xs"} fontWeight={500} mb={0}>
                      Don’t have an account?
                    </Text>
                    <Link
                      fontSize={"xs"}
                      fontWeight={600}
                      mb={0}
                      color={"#3725EA"}
                    >
                      Signup
                    </Link>
                  </HStack>
                </Box>
                <HStack spacing={4} my={8}>
                  <Divider />
                  <Text
                    color={"#49475A"}
                    fontWeight={500}
                    fontSize={"sm"}
                    textAlign={"center"}
                    mb={0}
                  >
                    Or
                  </Text>
                  <Divider />
                </HStack>
                <Box>
                  <HStack justifyContent={"center"}>
                    <SecondaryButton
                      w={"300px"}
                      title={"Continue with email"}
                      onClick={() => navigate("/login-email-address")}
                    />
                  </HStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </LoginPhoneNumberFrame>
  );
};

export default LoginPhoneNumber;
