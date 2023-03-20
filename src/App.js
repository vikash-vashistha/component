import logo from './logo.svg';
import './App.css';
import {
  FormControl,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Box,
  StackDivider,
  Flex,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { FcBusinessman } from "react-icons/fc";

function App() {
  return (
    <Card m={50} >
      <CardHeader >
        <Flex align={"center"} gap={2} justify={"space-between"}>
          <Flex align={"center"} gap={2}>
            <Heading size="md">Customer Detials</Heading>
            <FcBusinessman />
          </Flex>
          <Button colorScheme="blue" variant="outline">
            Edit
          </Button>
        </Flex>
      </CardHeader>

      <CardBody>
        <Flex gap={6}>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input placeholder='Mr Fraser Lomas'/>
            <FormLabel>Date of Birth</FormLabel>
            <Input placeholder='14/05/1985'/>
            <FormLabel>Email Address</FormLabel>
            <Input placeholder='fraser.lomas@ecgglobal.com'/>
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input h={110} placeholder='123 Fake Street Preston Lancashire PR2 5YB' />
          </FormControl>
          <FormControl>
            <FormLabel>Telephone Number</FormLabel>
            <Input placeholder='01772 111145'/>
            <FormLabel>Alt Telephone Number</FormLabel>
            <Input />
          </FormControl>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default App;
