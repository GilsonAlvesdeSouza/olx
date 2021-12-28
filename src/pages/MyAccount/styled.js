import styled from "styled-components";

export const PageArea = styled.div`
  .area {
    display: flex;
    align-items: center;

    .area-titulo {
      width: 200px;
      text-align: right;
      padding-right: 20px;
      font-weight: bold;
      font-size: 0.875rem;
    }

    .area-content{
        flex: 1;
    }

    button {
        background-color: #49aeef;
        font-size: 0.938rem;
        border: 0;
        border-radius: 5px;
        color: #fff;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
      }
  }
  .add-recents {
  }
`;
