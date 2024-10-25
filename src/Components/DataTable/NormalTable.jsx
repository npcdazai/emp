import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Skeleton,
  TableCaption,
  Tfoot,
} from "@chakra-ui/react";
import EmptySearchList from "../EmptySearchList";
import { TABLE_PAGINATION } from "../../Constants/Paginations";

const NormalTable = ({
  data,
  isLoading,
  tableHeadRow,
  emptyMessage,
  centered,
  total,
}) => {

  const columnWidth =
    data && data[0]
      ? `${(100 / Object.keys(data[0]).length).toFixed(2)}%`
      : "auto";
  return (
    <TableContainer
      overflowX={"auto"}
      className="h-auto w-100 table-scroll"
    >
      {data?.length === 0 ? (
        <EmptySearchList message={emptyMessage} />
      ) : (
        <Table size="sm">
          <TableCaption p={total ? 0 : null}>
            {total ? total : "OptiFii v1.0.0"}
          </TableCaption>
          <Thead 
          // bgGradient="linear(to-r, gray.50, gray.50)"
          bg="#6311cb37"
          >
            <Tr>
              {tableHeadRow.map((heading, index) => (
                <Th
                  color={"purple.900"}
                  // fontSize={'sm'}
                  textAlign={
                    tableHeadRow.length - 1 === index || centered
                      ? "center"
                      : "left"
                  }
                  key={index}
                  p={4}
                  // width="20px" // Adjust width as needed
                  // color={"#fff"}
                  whiteSpace="normal" // Allow text to wrap
                  wordBreak="normal" // Ensure long words break properly
                  overflowWrap="normal" // Break long words if necessary
                  textTransform={"none"}
                >
                  {isLoading ? <Skeleton height="20px" /> : heading}
                  {/* {heading} */}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody className="web-text-small">
            {isLoading
              ? Array.from({ length: TABLE_PAGINATION?.size }).map(
                  (_, index) => (
                    <Tr bg={index % 2 === 0 ? "" : "#6311cb14"} key={index}>
                      {tableHeadRow.map((_, i) => (
                        <Td
                          // width={"fit-content"}
                          key={i}
                          style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}

                          className="web-text-small"
                          // w={columnWidth}
                        >
                          <Skeleton height="20px" mb={1} mt={1} />
                        </Td>
                      ))}
                    </Tr>
                  )
                )
              : data?.map((item, index) => (
                  <Tr bg={index % 2 === 0 ? "" : "#6311cb14"} key={index}>
                    {tableHeadRow.map((heading, i) => (
                      <Td
                        textAlign={
                          tableHeadRow?.length - 1 === i || centered
                            ? "center"
                            : "left"
                        }
                        color={"gray.600"}
                        key={i}
                        fontWeight={500}
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        className="web-text-small"
                      >
                        {item[heading]}
                      </Td>
                    ))}
                  </Tr>
                ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default NormalTable;
