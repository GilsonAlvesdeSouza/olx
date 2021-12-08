import { useState } from "react";
import { useParams } from "react-router-dom";
import { OlxAPI } from "../../helpers";
import { PageArea } from "./styled";
import { PageContainer } from "../../components";

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
                  <div className="ad-image">
                    paz
                  </div>
                  <div className="ad-info">
                      <div className="ad-name">
                        muita paz
                      </div>
                      <div className="ad-description">
                        paz extrema
                      </div>
                  </div>
              </div>
          </div>
          <div className="right-side">
            paz superior
          </div>
      </PageArea>
    </PageContainer>
  );
}

export default AdPage;
