import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import MiniHeader from "../../Components/MiniHeader";
import AdvanceExpense from "../Requests/AdvanceExpense";
import Reimbursement from "../Requests/Reimbursement";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import MyGiftCardsTab from "./MyGiftCardsTab";
import VouchersTab from "./VouchersTab";

const Gifts = () => {
  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"auto"}>
      <MiniHeader
        title={"Your Gift Cards"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />


         {/* Tabs for switching between AdvanceExpense and Reimbursement */}
         <Box color={"black"}>
        <Tabs variant="unstyled">
          <TabList bg={'#FFFFFF'} borderRadius={'md'} boxShadow={'sm'} h={12}>
            <Tab
              _selected={{ color: "#fff", bg: "#3725EA" }}
              py={3}
              px={16}
              borderLeftRadius={'md'}
              fontWeight={'600'}
              fontSize={'sm'}
            >
              My Gift Cards
            </Tab>
            <Tab
              _selected={{ color: "#fff", bg: "#3725EA" }}
              py={3}
              px={16}
              fontWeight={'600'}
              fontSize={'sm'}
            >
              Vouchers
            </Tab>
          </TabList>

          {/* Tab panels */}
          <TabPanels>
            <TabPanel py={4} pl={0} pr={0}>
              <MyGiftCardsTab />
            </TabPanel>
            <TabPanel py={4} pl={0} pr={0}>
              <VouchersTab/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Gifts;
