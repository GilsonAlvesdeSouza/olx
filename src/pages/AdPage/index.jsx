import { useState } from "react";
import { useParams } from "react-router-dom";
import { OlxAPI } from "../../helpers";
import { PageArea } from "./styled";
import { PageContainer } from "../../components";
import { Fake } from "./styled";

function AdPage() {
  const api = OlxAPI();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [Info, setInfo] = useState([]);

  return (
    <PageContainer>
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-image">{loading && <Fake height="300" />}</div>
            <div className="ad-info">
              <div className="ad-name">{loading && <Fake />}</div>
              <div className="ad-description">
                {loading && <Fake height="100" />}
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box box--padding">{loading && <Fake />}</div>
          <div className="box box--padding">
            {loading && <Fake height="50" />}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
}

export default AdPage;
