import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  h2{
    text-align: center;
    text-decoration: underline;
  }

  .user-data {
    padding: 15px;
    background-color: #fff;
    width: 700px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #999;

    .area {
      display: flex;
      align-items: center;

      .area-titulo {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 1rem;
      }

      .area-content {
        flex: 1;
        font-size: 1.2rem;
      }

      button {
        background-color: var(--color-btn-primary);
        font-size: 0.938rem;
        border: 0;
        border-radius: 5px;
        color: #fff;
        height: 40px;
        padding: 0 20px;
        margin-top: 10px;
        cursor: pointer;

        &:hover {
          background-color: var(--color-btn-primary-hover);
        }
      }
    }
  }
  .add-recents {
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid #ccc;
  }
`;
