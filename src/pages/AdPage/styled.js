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

    .price span {
      color: #0000ff;
      display: block;
      font-size: 1.688rem;
      font-weight: bold;
    }

    .contactSellerLink {
      background-color: #0000ff;
      color: #fff;
      height: 30px;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .created-by small {
      display: block;
      color: #999;
      margin-top: 10px;
    }
  }
`;

export const OthersArea = styled.div`
  h2 {
    font-size: 1.25rem;
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    .aditem {
      width: 25%;
    }
  }
`;

export const BreadChumb = styled.div`
  font-size: 0.813rem;
  margin-top: 20px;

  a {
    display: inline-block;
    text-decoration: underline;
    margin: 0 5px;
    color: var(--color-link-breadchumb);
  }

  span {
    color: var(--color-link-breadchumb);
  }
`;
