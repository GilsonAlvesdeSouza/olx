import styled from "styled-components";
import "../../App.css";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .area {
      display: flex;
      align-items: center;
      /* justify-content: flex-start; */
      padding: 10px;
      max-width: 600px;

      .area-title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 0.875rem;
      }

      .area-input {
        flex: 1;

        input,
        select,
        textarea {
          width: 100%;
          font-size: 0.875rem;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: 0;
          transition: all ease 0.4s;
          background-color: #fff;

          &:focus {
            border: 1px solid var(--color-focus);
            color: var(--color-input);
          }
        }

        textarea {
          height: 150px;
          resize: none;
        }
      }

      .input-checkbox {
        input {
          width: auto;
        }
      }

      .font-small {
        input {
          font-size: 0.750rem;
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
`;
