// GlobalStateContext.js
import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { effect, useColorMode } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { TbClock2 } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { IoMdQrScanner } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import DummyPdf from "../../src/assets/dummy-pdf.pdf"

const getRandomDate = (start, end) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString();
};

const startDate = new Date(2020, 0, 1); // January 1, 2020
const endDate = new Date(); // Current date

export const generateUniqueId = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";

  let id = "";

  // Generate three random uppercase letters
  for (let i = 0; i < 3; i++) {
    id += letters[Math.floor(Math.random() * letters.length)];
  }

  // Generate seven random digits
  for (let i = 0; i < 7; i++) {
    id += digits[Math.floor(Math.random() * digits.length)];
  }

  return id;
};

const GlobalStateProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);



  const [image, setImage] = useState("https://bit.ly/sage-adebayo");


  const [reportsHistory, setReportsHistory] = useState([
    {
      "id": 1,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "31-07-2024 10:15 am",
      "reportType": "Expense",
      "totalExpense": 350.75,
      "status": "Approved"
    },
    {
      "id": 2,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "15-08-2024 02:45 pm",
      "reportType": "Expense",
      "totalExpense": 1250.00,
      "status": "Approved"
    },
    {
      "id": 3,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "28-08-2024 09:30 am",
      "reportType": "Expense",
      "totalExpense": 600.50,
      "status": "Fully Reimbursed"
    },
    {
      "id": 4,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "10-09-2024 11:00 am",
      "reportType": "Expense",
      "totalExpense": 2300.00,
      "status": "Disapproved"
    },
    {
      "id": 5,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "22-09-2024 04:20 pm",
      "reportType": "Expense",
      "totalExpense": 800.00,
      "status": "Fully Reimbursed"
    },
    {
      "id": 6,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "30-09-2024 03:10 pm",
      "reportType": "Expense",
      "totalExpense": 4500.00,
      "status": "Saved"
    },
    {
      "id": 7,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "05-10-2024 01:50 pm",
      "reportType": "Expense",
      "totalExpense": 3200.00,
      "status": "Saved"
    },
    {
      "id": 8,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "15-10-2024 09:00 am",
      "reportType": "Expense",
      "totalExpense": 1500.00,
      "status": "Partially Reimbursed"
    },
    {
      "id": 9,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "20-12-2024 05:30 pm",
      "reportType": "Expense",
      "totalExpense": 2500.00,
      "status": "Saved"
    },
    {
      "id": 10,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "31-12-2024 02:00 pm",
      "reportType": "Expense",
      "totalExpense": 1200.00,
      "status": "Approved"
    },
    {
      "id": 11,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "15-01-2025 10:30 am",
      "reportType": "Expense",
      "totalExpense": 900.00,
      "status": "Saved"
    },
    {
      "id": 7,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "05-10-2024 01:50 pm",
      "reportType": "Expense",
      "totalExpense": 3200.00,
      "status": "Saved"
    },
    {
      "id": 8,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "15-10-2024 09:00 am",
      "reportType": "Expense",
      "totalExpense": 1500.00,
      "status": "Partially Reimbursed"
    },
    {
      "id": 9,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "20-12-2024 05:30 pm",
      "reportType": "Expense",
      "totalExpense": 2500.00,
      "status": "Saved"
    },
    {
      "id": 10,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "31-12-2024 02:00 pm",
      "reportType": "Expense",
      "totalExpense": 1200.00,
      "status": "Approved"
    },
    {
      "id": 11,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "15-01-2025 10:30 am",
      "reportType": "Expense",
      "totalExpense": 900.00,
      "status": "Saved"
    },
    {
      "id": 7,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "05-10-2024 01:50 pm",
      "reportType": "Expense",
      "totalExpense": 3200.00,
      "status": "Saved"
    },
    {
      "id": 8,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "15-10-2024 09:00 am",
      "reportType": "Expense",
      "totalExpense": 1500.00,
      "status": "Partially Reimbursed"
    },
    {
      "id": 9,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "20-12-2024 05:30 pm",
      "reportType": "Expense",
      "totalExpense": 2500.00,
      "status": "Saved"
    },
    {
      "id": 10,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "31-12-2024 02:00 pm",
      "reportType": "Expense",
      "totalExpense": 1200.00,
      "status": "Approved"
    },
    {
      "id": 11,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024", "lastUpdated": "15-01-2025 10:30 am",
      "reportType": "Expense",
      "totalExpense": 900.00,
      "status": "Saved"
    }
  ]
  )

  const [reportsHistoryMini, setReportsHistoryMini] = useState([
    {
      "id": 1,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "31-07-2024 10:15 am",
      "reportType": "Expense",
      "totalExpense": 350.75,
      "status": "Approved"
    },
    {
      "id": 2,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "31-07-2024 10:15 am",
      "reportType": "Expense",
      "totalExpense": 350.75,
      "status": "Rejected"
    },
    {
      "id": 3,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "31-07-2024 10:15 am",
      "reportType": "Expense",
      "totalExpense": 350.75,
      "status": "Approved"
    },
    {
      "id": 4,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "31-07-2024 10:15 am",
      "reportType": "Expense",
      "totalExpense": 350.75,
      "status": "Rejected"
    },
    {
      "id": 5,
      "name": "Reimbursement",
      "reportFor": "Report for June 2024",
      "lastUpdated": "31-07-2024 10:15 am",
      "reportType": "Expense",
      "totalExpense": 350.75,
      "status": "Approved"
    },
  ]
  )



  const [requestsTable, setRequestTable] = useState([
    {
      "id": 1,
      "transactionType": "Dine In",
      "date": "25-08-2024 01:15 pm",
      "walletType": "Food",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 3200"
    },
    {
      "id": 2,
      "transactionType": "Take Away",
      "date": "22-07-2024 03:30 pm",
      "walletType": "Travel",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 1500"
    },
    {
      "id": 3,
      "transactionType": "Delivery",
      "date": "15-06-2024 11:00 am",
      "walletType": "Shopping",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 2450"
    },
    {
      "id": 4,
      "transactionType": "Dine In",
      "date": "09-05-2024 08:45 pm",
      "walletType": "Groceries",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 5400"
    },
    {
      "id": 5,
      "transactionType": "Take Away",
      "date": "02-07-2024 12:30 pm",
      "walletType": "Entertainment",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 1300"
    },
    {
      "id": 6,
      "transactionType": "Delivery",
      "date": "10-03-2024 06:15 pm",
      "walletType": "Electronics",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 6800"
    },
    {
      "id": 7,
      "transactionType": "Dine In",
      "date": "18-09-2024 05:20 pm",
      "walletType": "Utilities",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 4000"
    },
    {
      "id": 8,
      "transactionType": "Delivery",
      "date": "12-04-2024 02:50 pm",
      "walletType": "Food",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 2700"
    },
    {
      "id": 9,
      "transactionType": "Dine In",
      "date": "05-11-2024 07:10 pm",
      "walletType": "Health",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 4900"
    },
    {
      "id": 10,
      "transactionType": "Take Away",
      "date": "19-08-2024 09:40 am",
      "walletType": "Food",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 2200"
    },
    {
      "id": 11,
      "transactionType": "Dine In",
      "date": "18-09-2024 05:20 pm",
      "walletType": "Utilities",
      "document": `${DummyPdf}`,
      "amountSpent": "₹ 4000"
    }
  ]

  )



  const [walletTable, setWalletTable] = useState([
    {
      id: 1,
      transactionType: "Dine In",
      date: "25-08-2024 01:15 pm",
      walletType: "Food",
      amountSpent: "₹ 3200"
    },
    {
      id: 2,
      transactionType: "Grocery",
      date: "24-08-2024 10:00 am",
      walletType: "Essentials",
      amountSpent: "₹ 1500"
    },
    {
      id: 3,
      transactionType: "Fuel",
      date: "23-08-2024 08:30 am",
      walletType: "Transport",
      amountSpent: "₹ 2000"
    },
    {
      id: 4,
      transactionType: "Online Shopping",
      date: "22-08-2024 03:45 pm",
      walletType: "Miscellaneous",
      amountSpent: "₹ 5500"
    },
    {
      id: 5,
      transactionType: "Movie",
      date: "21-08-2024 07:00 pm",
      walletType: "Entertainment",
      amountSpent: "₹ 800"
    },
    {
      id: 6,
      transactionType: "Dine In",
      date: "25-08-2024 01:15 pm",
      walletType: "Food",
      amountSpent: "₹ 3200"
    },
    {
      id: 7,
      transactionType: "Grocery",
      date: "24-08-2024 10:00 am",
      walletType: "Essentials",
      amountSpent: "₹ 1500"
    },
    {
      id: 8,
      transactionType: "Fuel",
      date: "23-08-2024 08:30 am",
      walletType: "Transport",
      amountSpent: "₹ 2000"
    }
  ]);

  return (
    <GlobalStateContext.Provider
      value={{
        isAuthenticate,
        setIsAuthenticate,
        reportsHistory,
        setReportsHistory,
        requestsTable,
        setRequestTable, image, setImage,
        walletTable, setWalletTable,
        reportsHistoryMini, setReportsHistoryMini
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;
