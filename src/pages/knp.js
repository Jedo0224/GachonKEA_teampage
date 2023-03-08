import './css/pages.css';
import React, { useState } from "react";

const Knp = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호 상태 값

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); // 클릭한 페이지 번호를 현재 페이지 번호로 변경
  };

  return (
    <div>
       
      

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => handlePageClick(currentPage - 1)}>
              Previous
            </a>
          </li>
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <a className="page-link" href="#" onClick={() => handlePageClick(1)}>
              1
            </a>
          </li>
          <li className={`page-item ${currentPage === 2 && "active"}`}>
            <a className="page-link" href="#" onClick={() => handlePageClick(2)}>
              2
            </a>
          </li>
  
          
          <li className={`page-item ${currentPage === 3 && "active"}`}>
            <a className="page-link" href="#" onClick={() => handlePageClick(3)}>
              3
            </a>
          </li>
          <li className={`page-item ${currentPage === 3 && "disabled"}`}>
            <a className="page-link" href="#" onClick={() => handlePageClick(currentPage + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>

      {/* 현재 페이지 번호에 따라 다른 화면을 표시하는 IFrame */}
      <div style={{ marginTop: "20px"} }>
        {currentPage === 1 && (
        <div className="center">
            <h1 className="kpntitle" >카카오 SW아카데미</h1>
            <h1>Gachon & KaKaoEnterprise</h1>
            <h2>업무협약 및 고등교육 혁신 플랫폼 구축</h2>

            <h2> SW아카데미 개설, 실무형 인재 양성이 목표</h2>
            <h2> 교육비 지원 현장미러형 프로젝트로 실무 능력 개발·강화</h2>

            <h2>현장미러형 프로젝트로 실무 능력 개발·강화</h2>
            <br/>
            <br/>
            <br/>
            <br/>

            <h4 className="english">Establish business agreement and innovation platform for higher education. <br/>
            Open SW academy to train practical talent. <br/> Develop practical skills through field mirror projects to support education expenses.<br/>
            Strengthen practical skills through on-site mirror projects.
            </h4>

           
        </div>

    
        )}

      
        {currentPage === 2 && (
            <div style={{ textAlign: "center" }}>

          <iframe
            title="Page 2"
            src="https://kakaoenterprise.com/press/%EA%B0%80%EC%B2%9C%EB%8C%80%ED%95%99%EA%B5%90%EC%99%80-ai-%EB%B0%8F-%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A0%84%EB%AC%B8%EC%9D%B8%EC%9E%AC-%EC%96%91%EC%84%B1-%EB%82%98%EC%84%9C/"
            style={{ width: "80%", height: "750px", border: "none" }}
          />
          </div>
        )}
        {currentPage === 3 && (
            <div style={{ textAlign: "center" }}>
          <iframe
            title="Page 3"
            src="https://www.gachon.ac.kr/pr/1443/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGcHIlMkY0NjQlMkY4NDExMiUyRmFydGNsVmlldy5kbyUzRnBhZ2UlM0QxJTI2c3JjaENvbHVtbiUzRCUyNnNyY2hXcmQlM0QlMjZiYnNDbFNlcSUzRCUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NCZ25kZVN0ciUzRCUyNnJnc0VuZGRlU3RyJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2cGFzc3dvcmQlM0QlMjY%3D"
            style={{ width: "80%", height: "750px", border: "none" }}
          /></div>
        )}
      </div>
    </div>
  );
};

export default Knp;