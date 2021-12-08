import styled from "styled-components";

export const Fake = styled.div`
  background-color: #ddd;
  height: ${({ height }) => (height ? height : 20)}px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }

  .box--padding {
    padding: 10px;
  }

  .left-side {
    flex: 1;
    margin-right: 20px;

    .box {
      display: flex;
    }

    .ad-image {
      width: 320px;
      height: 320px;
      margin-right: 20px;

      .each-slide img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 320px;
      }
    }

    .ad-info {
      flex: 1;
      .ad-name {
        margin-bottom: 20px;
        h2 {
          margin: 0;
          margin-top: 20px;
        }
        small {
          color: #999;
        }
      }

      .ad-description {
        small {
          color: #999;
        }
      }
    }
  }
  .right-side {
    width: 250px;
  }
`;
