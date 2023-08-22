import styled from "styled-components";

export const DroneListContainer = styled.div`
  padding: 20px;
  overflow-x: auto;
`;

export const DroneListHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 15px;
`;

export const DroneTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  thead {
    background-color: #f2f2f2;

    th {
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;

      // Styles for specific columns
      &:nth-child(1), // Name
      &:nth-child(2), // Description
      &:nth-child(6) {
        // Actions
        width: 25%;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 10px 15px;
        border-bottom: 1px solid #eee;

        .action-buttons {
          display: flex;
          align-items: center;

          button {
            padding: 5px 10px;
            margin-right: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;

            display: flex;

            svg {
              margin-left: 5px;
            }

            &:last-child {
              margin-right: 0;
            }

            // Delete button
            &:first-child {
              background-color: red;
              color: white;

              &:hover {
                background-color: darkred;
              }
            }

            // Update button
            &:last-child {
              background-color: blue;
              color: white;

              &:hover {
                background-color: darkblue;
              }
            }
          }
        }
      }
    }
  }
`;
