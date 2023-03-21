import logo from "./logo.svg";
import "./App.css";

import { FcBusinessman } from "react-icons/fc";
import {
  Button,
  ButtonBase,
  Container,
  FormControl,
  FormLabel,
  Grid,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { TextFields } from "@mui/icons-material";

function App() {
  return (
    <Container
      margin={"auto"}
      style={{ width: "75%", padding: "7% 7%" }}
    >
      <Stack direction="row" spacing={63.5}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <h3>Customer Detials</h3>
          <FcBusinessman />
        </Stack>
        <Button colorScheme="blue" variant="outlined" size="small">
          Edit
        </Button>
      </Stack>
      <hr width="100%" />
      <Stack direction="row" gap={9}>
        <FormControl>
          <FormLabel>Customer Name</FormLabel>
          <TextField
            id="filled-basic"
            label="Mr Fraser Lomas"
            variant="filled"
          />
          <FormLabel>Date of Birth</FormLabel>
          <TextField id="filled-basic" label="14/05/1985" variant="filled" />
          <FormLabel>Email Address</FormLabel>
          <TextField
            id="filled-basic"
            label="fraser.lomas@ecgglobal.com"
            variant="filled"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <TextField
            multiline
            defaultValue="123 Fake Street
            Preston
            Lancashire
            PR2 5YB"
            id="filled-basic"
            label=""
            variant="filled"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Telephone Number</FormLabel>
          <TextField id="filled-basic" label="01772 111145" variant="filled" />
          <FormLabel>Alt Telephone Number</FormLabel>
          <TextField id="filled-basic" label="" variant="filled" />
        </FormControl>
      </Stack>
    </Container>
  );
}

export default App;

{
  /* <CardHeader >
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
      </CardBody> */
}
