import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .leftSide {
    width: 250px;
    margin: 0px 10px;

    .filterName {
      font-size: 0.938rem;
      margin: 10px 0;
    }

    input,
    select {
      width: 100%;
      height: 40px;
      border: 2px solid #9bb83c;
      outline: 0;
      font-size: 0.85rem;
      color: #000;
      padding: 10px;
      border-radius: 5px;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .categoryItem {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      color: #000;
      cursor: pointer;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }

    span {
      font-size: 0.875rem;
    }

    .categoryItem:hover,
    .categoryItem.active {
      background-color: #9bb83c;
      color: #fff;
    }
  }

  .rightSide {
    flex: 1;

    h2 {
      margin-top: 0;
      font-size: 1.125rem;
    }

    .listWarning {
      padding: 30px;
      text-align: center;
    }

    .list {
      display: flex;
      flex-wrap: wrap;

      .aditem {
        width: 33%;
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 10px 0;

      .pageItem {
        width: 60px;
        height: 30px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        cursor: pointer;
        margin-right: 5px;
        margin-bottom: 5px;
        padding: 5px;
      }
    }
  }
`;
