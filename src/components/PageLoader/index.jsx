import React from "react";
import "./css/style.css"

export function PageLoader({ pageLoading }) {
  return (
    <div className={`page-load__container ${pageLoading ? "page-load" : ""}`}>
        <div className="page-load__container__loader">
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">l</span>
            <span className="page-load__container__loader__inner__letter-full">l</span>
          </div>
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">o</span>
            <span className="page-load__container__loader__inner__letter-full">o</span>
          </div>
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">a</span>
            <span className="page-load__container__loader__inner__letter-full">a</span>
          </div>
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">d</span>
            <span className="page-load__container__loader__inner__letter-full">d</span>
          </div>
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">i</span>
            <span className="page-load__container__loader__inner__letter-full">i</span>
          </div>
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">n</span>
            <span className="page-load__container__loader__inner__letter-full">n</span>
          </div>
          <div className="page-load__container__loader__inner">
            <span className="page-load__container__loader__inner__letter-void">g</span>
            <span className="page-load__container__loader__inner__letter-full">g</span>
          </div>
        </div>
      </div>
  );
}
