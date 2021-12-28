import styled from "styled-components";

export const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);

  
`;

export const Modal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 760px;
  margin: 80px auto 0 auto;
  padding: 15px;

  form {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .area {
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 10px;
      max-width: 700px;

      .area-title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 0.875rem;
      }

      .area-input {
        flex-grow: 1;
        input,
        select {
          width: 300px;
          font-size: 0.875rem;
          background: #fff;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: 0;
          transition: all ease 0.4s;

          &:focus {
            border: 1px solid var(--color-focus);
            color: var(--color-input);
          }
        }
      }

      button {
        background-color: var(--color-btn-primary);
        border: 0;
        outline: 0;
        padding: 5px 10px;
        border-radius: 4px;
        color: #fff;
        font-size: 0.938rem;
        cursor: pointer;

        &:hover {
          background-color: var(--color-btn-primary-hover);
        }
      }
    }
  }

  button {
    float: right;
    background: unset;
    border: unset;
    font-weight: bolder;
  }
`;
