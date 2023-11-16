import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CustTable from "../components/CustTable";
import ProdTable from "../components/ProdTable";
import TransTable from "../components/TranTable";

export default function Home() {
  return (
    <Box p={3} bg={"#F5F7F8"}>
      <Navbar />
      <CustTable />
      <ProdTable />
      <TransTable />
    </Box>
  );
}
