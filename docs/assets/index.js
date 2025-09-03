var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function(require$$0, require$$0$1) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = "/* RoundForm.css */\n\n.round-form {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.form-header {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.form-header h2 {\n  color: #333;\n  margin-bottom: 10px;\n  font-size: 2rem;\n}\n\n.form-header p {\n  color: #666;\n  font-size: 1.1rem;\n}\n\n/* 코스 정보 섹션 */\n.course-info {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.input-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.input-icon {\n  color: #666;\n  flex-shrink: 0;\n}\n\n.course-input {\n  flex: 1;\n  padding: 12px 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: border-color 0.2s ease;\n}\n\n.course-input:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.companions-section {\n  margin-top: 20px;\n}\n\n.companions-section label {\n  display: block;\n  margin-bottom: 12px;\n  color: #333;\n  font-weight: 500;\n}\n\n.companions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.companion-input {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.companion-input input {\n  flex: 1;\n  padding: 10px 14px;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  transition: border-color 0.2s ease;\n}\n\n.companion-input input:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.remove-btn {\n  background: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.remove-btn:hover {\n  background: #c82333;\n}\n\n.add-companion-btn {\n  background: #28a745;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 10px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  align-self: flex-start;\n}\n\n.add-companion-btn:hover {\n  background: #218838;\n}\n\n/* 스코어카드 컨테이너 */\n.scorecard-container {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.scorecard-container h3 {\n  color: #333;\n  margin-bottom: 24px;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n/* 스코어카드 섹션 */\n.scorecard-section {\n  margin-bottom: 30px;\n}\n\n.scorecard-section h4 {\n  color: #333;\n  margin-bottom: 16px;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.scorecard-table {\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.scorecard-row {\n  display: grid;\n  grid-template-columns: 80px repeat(9, 1fr) 100px;\n  border-bottom: 1px solid #e9ecef;\n  align-items: stretch;\n}\n\n.scorecard-row:last-child {\n  border-bottom: none;\n}\n\n.scorecard-row.header {\n  background: #495057;\n  color: white;\n  font-weight: bold;\n}\n\n.scorecard-row.header .cell {\n  padding: 12px 8px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n.cell {\n  padding: 12px 8px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n  border-right: 1px solid #e9ecef;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.cell:last-child {\n  border-right: none;\n}\n\n.cell.par {\n  background: #e9ecef;\n  font-weight: bold;\n  color: #495057;\n}\n\n.cell.total {\n  background: #dee2e6;\n  font-weight: bold;\n  color: #495057;\n}\n\n/* 스코어 입력 */\n.score-input {\n  width: 50px;\n  padding: 6px 8px;\n  border: 2px solid #e9ecef;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 0.9rem;\n  margin: 0 auto;\n  transition: border-color 0.2s ease;\n  box-sizing: border-box;\n}\n\n.score-input:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.score-input.score-par {\n  border-color: #28a745;\n}\n\n.score-input.score-bogey {\n  border-color: #ffc107;\n}\n\n.score-input.score-double {\n  border-color: #dc3545;\n}\n\n.score-input.score-birdie {\n  border-color: #17a2b8;\n}\n\n/* 스코어 표시 */\n.score-display {\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 4px;\n  min-width: 30px;\n  text-align: center;\n  font-size: 0.9rem;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n/* TO PAR 표시 */\n.to-par-display {\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.to-par-total {\n  font-weight: bold;\n  font-size: 1rem;\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.score-par {\n  background: transparent;\n  color: #495057;\n}\n\n.score-bogey {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n\n.score-double {\n  background: #bbdefb;\n  color: #1565c0;\n}\n\n.score-birdie {\n  background: #c8e6c9;\n  color: #388e3c;\n}\n\n/* TO PAR 색상 */\n.to-par-display.score-par,\n.to-par-total.even-par {\n  color: #495057;\n}\n\n.to-par-display.score-bogey,\n.to-par-total.over-par {\n  color: #dc3545;\n}\n\n.to-par-display.score-double {\n  color: #dc3545;\n}\n\n.to-par-display.score-birdie,\n.to-par-total.under-par {\n  color: #28a745;\n}\n\n/* 퍼터 입력 */\n.putt-input {\n  width: 40px;\n  padding: 6px 8px;\n  border: 2px solid #e9ecef;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 0.9rem;\n  margin: 0 auto;\n  transition: border-color 0.2s ease;\n  box-sizing: border-box;\n}\n\n.putt-input:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n\n\n/* 전체 합계 */\n.total-summary {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 24px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.total-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.total-label {\n  color: #666;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.total-value {\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n/* 상세 클럽 사용 기록 */\n.club-usage-container {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.club-usage-container h3 {\n  color: #333;\n  margin-bottom: 24px;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.hole-detail-card {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e9ecef;\n}\n\n.hole-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n}\n\n.hole-header h4 {\n  color: #333;\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.hole-info {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.hole-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.hole-score-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.par-info {\n  font-size: 0.9rem;\n  color: #666;\n  font-weight: 500;\n  background: #e9ecef;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n\n.score-separator {\n  font-size: 1rem;\n  color: #999;\n  font-weight: bold;\n}\n\n.hole-score {\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 4px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n\n.score-status {\n  font-size: 0.85rem;\n  font-weight: 500;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n\n.hole-score.score-par {\n  background: transparent;\n  color: #495057;\n  border-color: #28a745;\n}\n\n.hole-score.score-bogey {\n  background: #e3f2fd;\n  color: #1976d2;\n  border-color: #1976d2;\n}\n\n.hole-score.score-double {\n  background: #bbdefb;\n  color: #1565c0;\n  border-color: #1565c0;\n}\n\n.hole-score.score-birdie {\n  background: #c8e6c9;\n  color: #388e3c;\n  border-color: #388e3c;\n}\n\n.score-status.score-par {\n  background: #d4edda;\n  color: #155724;\n}\n\n.score-status.score-bogey {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n\n.score-status.score-double {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.score-status.score-birdie {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n\n.par-selector {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.par-selector label {\n  font-size: 0.9rem;\n  color: #666;\n  font-weight: 500;\n}\n\n.par-select {\n  padding: 6px 10px;\n  border: 2px solid #e9ecef;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n}\n\n.par-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n\n\n.hole-kpis {\n  display: flex;\n  gap: 20px;\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #666;\n}\n\n.kpi-checkbox {\n  width: 18px;\n  height: 18px;\n  accent-color: #28a745;\n}\n\n/* 클럽 사용 섹션 */\n.club-usage {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.club-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.club-group label {\n  font-weight: 600;\n  color: #333;\n  font-size: 1rem;\n  margin-bottom: 8px;\n}\n\n/* 드라이버 옵션 */\n.driver-options {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.driver-result-select {\n  padding: 10px 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  transition: border-color 0.2s ease;\n  background: white;\n  cursor: pointer;\n}\n\n.driver-result-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.driver-result-select option {\n  padding: 8px;\n  font-size: 0.9rem;\n}\n\n/* 우드/유틸 옵션 */\n.wood-options {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.wood-result-select {\n  padding: 10px 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  transition: border-color 0.2s ease;\n  background: white;\n  cursor: pointer;\n}\n\n.wood-result-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.wood-result-select option {\n  padding: 8px;\n  font-size: 0.9rem;\n}\n\n/* 아이언 컨테이너 */\n.irons-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.iron-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.iron-number-select {\n  flex: 1;\n  padding: 8px 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: border-color 0.2s ease;\n}\n\n.iron-number-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.remove-iron-btn {\n  background: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.remove-iron-btn:hover {\n  background: #c82333;\n}\n\n.add-iron-btn {\n  background: #28a745;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-start;\n}\n\n.add-iron-btn:hover {\n  background: #218838;\n}\n\n/* 퍼터 컨테이너 */\n.putt-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.putt-score {\n  background: #17a2b8;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.putt-buttons {\n  display: flex;\n  gap: 8px;\n}\n\n.putt-btn {\n  background: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.putt-btn:hover {\n  background: #5a6268;\n}\n\n.putt-btn.putt-minus {\n  background: #dc3545;\n}\n\n.putt-btn.putt-minus:hover {\n  background: #c82333;\n}\n\n.putt-btn.putt-plus {\n  background: #28a745;\n}\n\n.putt-btn.putt-plus:hover {\n  background: #218838;\n}\n\n.putt-btn:disabled {\n  background: #6c757d;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.putt-btn:disabled:hover {\n  background: #6c757d;\n}\n\n/* 폼 액션 */\n.form-actions {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.submit-btn {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 16px 32px;\n  font-size: 1.1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.submit-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);\n}\n\n.submit-btn:active {\n  transform: translateY(0);\n}\n\n/* 반응형 디자인 */\n/* 모바일 최적화 */\n@media (max-width: 768px) {\n  .round-form {\n    padding: 12px;\n    margin: 0;\n  }\n  \n  .form-header h2 {\n    font-size: 1.5rem;\n  }\n  \n  .form-header p {\n    font-size: 1rem;\n  }\n  \n  .course-info,\n  .scorecard-container,\n  .club-usage-container {\n    padding: 16px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n  }\n  \n  .input-group {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  \n  .course-input {\n    width: 100%;\n    padding: 14px 16px;\n    font-size: 16px; /* iOS 줌 방지 */\n  }\n  \n  .companion-input {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  \n  .companion-input input {\n    margin-bottom: 8px;\n    padding: 12px 14px;\n    font-size: 16px; /* iOS 줌 방지 */\n  }\n  \n  .remove-btn {\n    align-self: center;\n    padding: 10px;\n  }\n  \n  .add-companion-btn {\n    width: 100%;\n    padding: 12px;\n    font-size: 1rem;\n  }\n  \n  .scorecard-row {\n    grid-template-columns: 50px repeat(9, 1fr) 70px;\n    font-size: 0.75rem;\n  }\n  \n  .cell {\n    padding: 6px 2px;\n    min-height: 35px;\n  }\n  \n  .score-input {\n    width: 35px;\n    padding: 6px 4px;\n    font-size: 0.8rem;\n    margin: 0 auto;\n  }\n  \n  .putt-input {\n    width: 30px;\n    padding: 6px 4px;\n    font-size: 0.8rem;\n    margin: 0 auto;\n  }\n  \n  .total-summary {\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n    padding: 16px;\n  }\n  \n  .total-item {\n    gap: 4px;\n  }\n  \n  .total-label {\n    font-size: 0.8rem;\n  }\n  \n  .total-value {\n    font-size: 1.2rem;\n  }\n  \n  .club-usage {\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  \n  .hole-detail-card {\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  \n  .hole-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  \n  .hole-kpis {\n    align-self: stretch;\n    justify-content: space-around;\n  }\n  \n  .hole-info {\n    width: 100%;\n  }\n  \n  .par-selector {\n    flex-wrap: wrap;\n  }\n  \n  .hole-title-row {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  \n  .hole-score-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  \n  .par-info {\n    font-size: 0.8rem;\n  }\n  \n  .hole-score {\n    font-size: 0.9rem;\n  }\n  \n  .score-status {\n    font-size: 0.75rem;\n  }\n  \n  .driver-result-select,\n  .wood-result-select,\n  .iron-number-select {\n    padding: 12px;\n    font-size: 16px; /* iOS 줌 방지 */\n  }\n  \n  .putt-score {\n    width: 35px;\n    height: 35px;\n    font-size: 1rem;\n  }\n  \n  .putt-btn {\n    width: 28px;\n    height: 28px;\n    font-size: 1rem;\n  }\n  \n  .submit-btn {\n    width: 100%;\n    padding: 16px;\n    font-size: 1.1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .round-form {\n    padding: 8px;\n  }\n  \n  .form-header h2 {\n    font-size: 1.3rem;\n  }\n  \n  .course-info,\n  .scorecard-container,\n  .club-usage-container {\n    padding: 12px;\n    margin-bottom: 16px;\n  }\n  \n  .scorecard-row {\n    grid-template-columns: 40px repeat(9, 1fr) 60px;\n    font-size: 0.7rem;\n  }\n  \n  .cell {\n    padding: 4px 1px;\n    min-height: 30px;\n  }\n  \n  .score-input {\n    width: 30px;\n    padding: 4px 2px;\n    font-size: 0.7rem;\n  }\n  \n  .putt-input {\n    width: 25px;\n    padding: 4px 2px;\n    font-size: 0.7rem;\n  }\n  \n  .club-usage {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  \n  .hole-detail-card {\n    padding: 12px;\n  }\n  \n  .hole-header h4 {\n    font-size: 1rem;\n  }\n  \n  .par-info {\n    font-size: 0.75rem;\n  }\n  \n  .hole-score {\n    font-size: 0.8rem;\n  }\n  \n  .score-status {\n    font-size: 0.7rem;\n  }\n  \n  .driver-result-select,\n  .wood-result-select,\n  .iron-number-select {\n    padding: 10px;\n    font-size: 14px;\n  }\n  \n  .putt-score {\n    width: 30px;\n    height: 30px;\n    font-size: 0.9rem;\n  }\n  \n  .putt-btn {\n    width: 24px;\n    height: 24px;\n    font-size: 0.9rem;\n  }\n}\n.round-list {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  padding: 2rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.round-list.empty {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n\n.round-list.empty h2 {\n  color: #8bc34a;\n  margin-bottom: 1rem;\n}\n\n.round-list.empty p {\n  opacity: 0.8;\n  font-size: 1.1rem;\n}\n\n.round-list h2 {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #8bc34a;\n}\n\n.filters {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  background: rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  border-radius: 12px;\n}\n\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  padding: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.search-box input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1rem;\n  outline: none;\n}\n\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.filter-controls {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.filter-controls select {\n  padding: 0.75rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  color: white;\n  font-size: 1rem;\n  min-width: 150px;\n}\n\n.filter-controls select:focus {\n  outline: none;\n  border-color: #ffd700;\n}\n\n.sort-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.sort-controls span {\n  color: #8bc34a;\n  font-weight: 500;\n}\n\n.sort-controls button {\n  padding: 0.5rem 1rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 6px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n}\n\n.sort-controls button:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sort-controls button.active {\n  background: #8bc34a;\n  color: #1a3d1f;\n  border-color: #8bc34a;\n}\n\n.rounds-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.round-card {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n\n.round-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n  border-color: rgba(255, 215, 0, 0.3);\n}\n\n.round-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.round-date {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #8bc34a;\n  font-weight: 500;\n}\n\n.delete-btn {\n  padding: 0.5rem;\n  background: rgba(255, 0, 0, 0.2);\n  border: 1px solid rgba(255, 0, 0, 0.3);\n  border-radius: 6px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.delete-btn:hover {\n  background: rgba(255, 0, 0, 0.4);\n}\n\n.round-course,\n.round-companions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  opacity: 0.9;\n}\n\n.round-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 1rem 0;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.stat-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.stat-item svg {\n  color: #8bc34a;\n}\n\n.round-actions {\n  margin-top: 1rem;\n}\n\n.view-btn {\n  width: 100%;\n  padding: 0.75rem;\n  background: rgba(0, 255, 0, 0.2);\n  border: 1px solid rgba(0, 255, 0, 0.3);\n  border-radius: 8px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.view-btn:hover {\n  background: rgba(0, 255, 0, 0.4);\n}\n\n.list-summary {\n  text-align: center;\n  padding: 1rem;\n  background: rgba(255, 215, 0, 0.1);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 215, 0, 0.3);\n}\n\n.list-summary p {\n  margin: 0;\n  color: #8bc34a;\n  font-weight: 500;\n}\n\n/* 모바일 최적화 */\n@media (max-width: 768px) {\n  .round-list {\n    padding: 0.5rem;\n    margin: 0;\n  }\n  \n  .round-list h2 {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n  }\n  \n  .filters {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  \n  .search-box {\n    padding: 0.5rem;\n  }\n  \n  .search-box input {\n    font-size: 16px; /* iOS 줌 방지 */\n  }\n  \n  .filter-controls {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  \n  .filter-controls select {\n    min-width: auto;\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 16px; /* iOS 줌 방지 */\n  }\n  \n  .sort-controls {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  \n  .sort-controls button {\n    width: 100%;\n    max-width: 200px;\n    padding: 0.75rem;\n    font-size: 0.9rem;\n  }\n  \n  .rounds-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  \n  .round-card {\n    padding: 1rem;\n    margin: 0;\n  }\n  \n  .round-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  \n  .round-date {\n    font-size: 0.9rem;\n  }\n  \n  .delete-btn {\n    align-self: flex-end;\n    padding: 0.4rem;\n  }\n  \n  .round-course,\n  .round-companions {\n    font-size: 0.9rem;\n  }\n  \n  .round-stats {\n    padding: 0.75rem;\n  }\n  \n  .stat-item {\n    font-size: 0.85rem;\n  }\n  \n  .view-btn {\n    padding: 0.75rem;\n    font-size: 0.9rem;\n  }\n  \n  .list-summary {\n    padding: 0.75rem;\n  }\n  \n  .list-summary p {\n    font-size: 0.9rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .round-list {\n    padding: 0.25rem;\n  }\n  \n  .round-list h2 {\n    font-size: 1.3rem;\n  }\n  \n  .filters {\n    padding: 0.5rem;\n  }\n  \n  .search-box {\n    padding: 0.4rem;\n  }\n  \n  .filter-controls select {\n    padding: 0.6rem;\n    font-size: 14px;\n  }\n  \n  .sort-controls button {\n    padding: 0.6rem;\n    font-size: 0.8rem;\n  }\n  \n  .round-card {\n    padding: 0.75rem;\n  }\n  \n  .round-header h4 {\n    font-size: 1rem;\n  }\n  \n  .round-date {\n    font-size: 0.8rem;\n  }\n  \n  .round-course,\n  .round-companions {\n    font-size: 0.8rem;\n  }\n  \n  .round-stats {\n    padding: 0.5rem;\n  }\n  \n  .stat-item {\n    font-size: 0.8rem;\n  }\n  \n  .view-btn {\n    padding: 0.6rem;\n    font-size: 0.8rem;\n  }\n}\n\n/* 모달 스타일 */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 90vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n  animation: modalSlideIn 0.3s ease-out;\n}\n\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n\n.modal-header h3 {\n  margin: 0;\n  color: #333;\n  font-size: 1.5rem;\n}\n\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s ease;\n}\n\n.close-btn:hover {\n  background: #e9ecef;\n  color: #333;\n}\n\n.modal-body {\n  padding: 24px;\n}\n\n.round-info {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #333;\n  font-size: 0.95rem;\n}\n\n.info-item svg {\n  color: #666;\n  flex-shrink: 0;\n}\n\n/* 스코어카드 섹션 */\n.scorecard-section {\n  margin-bottom: 24px;\n}\n\n.scorecard-section h4 {\n  color: #333;\n  margin-bottom: 16px;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.scorecard-table {\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.scorecard-row {\n  display: grid;\n  grid-template-columns: 80px repeat(9, 1fr) 100px;\n  border-bottom: 1px solid #e9ecef;\n  align-items: stretch;\n}\n\n.scorecard-row:last-child {\n  border-bottom: none;\n}\n\n.scorecard-row.header {\n  background: #495057;\n  color: white;\n  font-weight: bold;\n}\n\n.scorecard-row.header .cell {\n  padding: 12px 8px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n.cell {\n  padding: 12px 8px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n  border-right: 1px solid #e9ecef;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.cell:last-child {\n  border-right: none;\n}\n\n.cell.par {\n  background: #e9ecef;\n  font-weight: bold;\n  color: #495057;\n}\n\n.cell.total {\n  background: #dee2e6;\n  font-weight: bold;\n  color: #495057;\n}\n\n/* 스코어 표시 */\n.score-display {\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 4px;\n  min-width: 30px;\n  text-align: center;\n  font-size: 0.9rem;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.score-par {\n  background: transparent;\n  color: #495057;\n}\n\n.score-bogey {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n\n.score-double {\n  background: #bbdefb;\n  color: #1565c0;\n}\n\n.score-birdie {\n  background: #c8e6c9;\n  color: #388e3c;\n}\n\n/* TO PAR 표시 */\n.to-par-display {\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.to-par-total {\n  font-weight: bold;\n  font-size: 1rem;\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.to-par-display.score-par,\n.to-par-total.even-par {\n  color: #495057;\n}\n\n.to-par-display.score-bogey,\n.to-par-total.over-par {\n  color: #dc3545;\n}\n\n.to-par-display.score-double {\n  color: #dc3545;\n}\n\n.to-par-display.score-birdie,\n.to-par-total.under-par {\n  color: #28a745;\n}\n\n/* 라운드 통계 */\n.round-summary {\n  margin-top: 24px;\n}\n\n.round-summary h4 {\n  color: #333;\n  margin-bottom: 16px;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 16px;\n}\n\n.stat-card {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 16px;\n  text-align: center;\n  border: 1px solid #e9ecef;\n}\n\n.stat-label {\n  color: #666;\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n\n.stat-value {\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n/* 반응형 디자인 */\n@media (max-width: 768px) {\n  .modal-content {\n    max-width: 95vw;\n    max-height: 95vh;\n  }\n  \n  .modal-body {\n    padding: 16px;\n  }\n  \n  .scorecard-row {\n    grid-template-columns: 60px repeat(9, 1fr) 80px;\n    font-size: 0.8rem;\n  }\n  \n  .cell {\n    padding: 8px 4px;\n    min-height: 40px;\n  }\n  \n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .round-info {\n    gap: 8px;\n  }\n  \n  .info-item {\n    font-size: 0.9rem;\n  }\n}\n.login-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #2c5530 0%, #1a3d1f 100%);\n  padding: 2rem;\n}\n\n.login-card {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border-radius: 24px;\n  padding: 3rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 450px;\n  animation: slideUp 0.6s ease-out;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.login-header {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n\n.login-header h1 {\n  margin: 0 0 0.5rem 0;\n  font-size: 2.5rem;\n  background: linear-gradient(45deg, #8bc34a, #4caf50);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.login-header p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.1rem;\n}\n\n.auth-tabs {\n  display: flex;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 12px;\n  padding: 0.5rem;\n  margin-bottom: 2rem;\n  gap: 0.5rem;\n}\n\n.auth-tabs button {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n\n.auth-tabs button:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.auth-tabs button.active {\n  background: linear-gradient(45deg, #8bc34a, #4caf50);\n  color: #1a3d1f;\n  box-shadow: 0 4px 15px rgba(139, 195, 74, 0.3);\n}\n\n.error-message {\n  background: rgba(244, 67, 54, 0.2);\n  border: 1px solid rgba(244, 67, 54, 0.3);\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  color: #ffcdd2;\n  text-align: center;\n  font-size: 0.9rem;\n  animation: shake 0.5s ease-in-out;\n}\n\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-5px); }\n  75% { transform: translateX(5px); }\n}\n\n.auth-form {\n  margin-bottom: 2rem;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.form-group label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  color: #8bc34a;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n\n.form-group input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  color: white;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n\n.form-group input::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.form-group input:focus {\n  outline: none;\n  border-color: #8bc34a;\n  box-shadow: 0 0 0 3px rgba(139, 195, 74, 0.1);\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.password-input {\n  position: relative;\n}\n\n.password-input input {\n  padding-right: 3rem;\n}\n\n.password-toggle {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.3s ease;\n}\n\n.password-toggle:hover {\n  color: #8bc34a;\n}\n\n.auth-submit-btn {\n  width: 100%;\n  padding: 1rem;\n  background: linear-gradient(45deg, #8bc34a, #4caf50);\n  color: #1a3d1f;\n  border: none;\n  border-radius: 12px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 0.5rem;\n}\n\n.auth-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);\n}\n\n.auth-submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.auth-footer {\n  text-align: center;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.auth-footer p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.9rem;\n}\n\n.toggle-mode-btn {\n  background: none;\n  border: none;\n  color: #8bc34a;\n  cursor: pointer;\n  margin-left: 0.5rem;\n  font-weight: 500;\n  text-decoration: underline;\n  transition: color 0.3s ease;\n}\n\n.toggle-mode-btn:hover {\n  color: #4caf50;\n}\n\n.demo-info {\n  background: rgba(76, 175, 80, 0.2);\n  border: 1px solid rgba(76, 175, 80, 0.3);\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-top: 1.5rem;\n  text-align: center;\n}\n\n.demo-info h4 {\n  margin: 0 0 1rem 0;\n  color: #c8e6c9;\n  font-size: 1rem;\n}\n\n.demo-info p {\n  margin: 0.5rem 0;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.9rem;\n}\n\n.demo-info strong {\n  color: #8bc34a;\n}\n\n.demo-info small {\n  display: block;\n  margin-top: 0.5rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-style: italic;\n}\n\n@media (max-width: 768px) {\n  .login-container {\n    padding: 1rem;\n  }\n  \n  .login-card {\n    padding: 2rem;\n    border-radius: 16px;\n  }\n  \n  .login-header h1 {\n    font-size: 2rem;\n  }\n  \n  .auth-tabs {\n    flex-direction: column;\n  }\n  \n  .auth-tabs button {\n    padding: 1rem;\n  }\n}\n.user-profile {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  margin-bottom: 2rem;\n}\n\n.profile-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.profile-avatar {\n  width: 60px;\n  height: 60px;\n  background: linear-gradient(45deg, #8bc34a, #4caf50);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #1a3d1f;\n  flex-shrink: 0;\n}\n\n.profile-info {\n  flex: 1;\n}\n\n.profile-info h3 {\n  margin: 0 0 0.25rem 0;\n  color: #8bc34a;\n  font-size: 1.2rem;\n}\n\n.profile-info p {\n  margin: 0 0 0.25rem 0;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.9rem;\n}\n\n.profile-info small {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.8rem;\n}\n\n.edit-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.edit-input {\n  padding: 0.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-size: 0.9rem;\n}\n\n.edit-input::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.edit-input:focus {\n  outline: none;\n  border-color: #ffd700;\n}\n\n.profile-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.profile-actions button {\n  padding: 0.5rem 0.75rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-width: 80px;\n}\n\n.edit-btn {\n  background: rgba(33, 150, 243, 0.3);\n  color: #64B5F6;\n  border: 1px solid rgba(33, 150, 243, 0.5);\n}\n\n.edit-btn:hover {\n  background: rgba(33, 150, 243, 0.5);\n  color: white;\n}\n\n.save-btn {\n  background: rgba(76, 175, 80, 0.3);\n  color: #81C784;\n  border: 1px solid rgba(76, 175, 80, 0.5);\n}\n\n.save-btn:hover {\n  background: rgba(76, 175, 80, 0.5);\n  color: white;\n}\n\n.cancel-btn {\n  background: rgba(158, 158, 158, 0.3);\n  color: #BDBDBD;\n  border: 1px solid rgba(158, 158, 158, 0.5);\n}\n\n.cancel-btn:hover {\n  background: rgba(158, 158, 158, 0.5);\n  color: white;\n}\n\n.logout-btn {\n  background: rgba(244, 67, 54, 0.3);\n  color: #EF5350;\n  border: 1px solid rgba(244, 67, 54, 0.5);\n}\n\n.logout-btn:hover {\n  background: rgba(244, 67, 54, 0.5);\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .profile-header {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  \n  .profile-actions {\n    order: -1;\n    align-self: flex-end;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  .profile-actions button {\n    min-width: 70px;\n    padding: 0.4rem 0.6rem;\n    font-size: 0.8rem;\n  }\n  \n  .edit-form {\n    width: 100%;\n  }\n}\n.app {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #2c5530 0%, #1a3d1f 100%);\n  color: #e8f5e8;\n}\n\n.app-header {\n  text-align: center;\n  padding: 2rem 0;\n  background: rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10px);\n  margin-bottom: 2rem;\n}\n\n.app-header h1 {\n  margin: 0;\n  font-size: 3rem;\n  background: linear-gradient(45deg, #8bc34a, #4caf50);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.app-header p {\n  margin: 0.5rem 0 0 0;\n  font-size: 1.2rem;\n  opacity: 0.9;\n}\n\n.app-nav {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n\n.app-nav button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.app-nav button:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n\n.app-nav button.active {\n  background: linear-gradient(45deg, #8bc34a, #4caf50);\n  color: #1a3d1f;\n  box-shadow: 0 4px 15px rgba(139, 195, 74, 0.3);\n}\n\n.app-main {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.app.loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loading-spinner {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  padding: 3rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(139, 195, 74, 0.3);\n  border-top: 4px solid #8bc34a;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem auto;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading-spinner p {\n  margin: 0;\n  color: rgba(232, 245, 232, 0.8);\n  font-size: 1.1rem;\n}\n\n/* 모바일 최적화 */\n@media (max-width: 768px) {\n  .app {\n    padding: 0;\n  }\n  \n  .app-header {\n    padding: 1rem 0;\n    margin-bottom: 1rem;\n  }\n  \n  .app-header h1 {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n  }\n  \n  .app-header p {\n    font-size: 1rem;\n  }\n  \n  .app-nav {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    margin-bottom: 1rem;\n    padding: 0 1rem;\n  }\n  \n  .app-nav button {\n    width: 100%;\n    max-width: 300px;\n    padding: 1rem;\n    font-size: 1rem;\n  }\n  \n  .app-main {\n    padding: 0 0.5rem;\n  }\n  \n  .loading-spinner {\n    padding: 2rem;\n    margin: 1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .app-header h1 {\n    font-size: 1.5rem;\n  }\n  \n  .app-header p {\n    font-size: 0.9rem;\n  }\n  \n  .app-nav button {\n    padding: 0.8rem;\n    font-size: 0.9rem;\n  }\n  \n  .app-main {\n    padding: 0 0.25rem;\n  }\n}\n:root {\n  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-weight: 400;\n\n  color-scheme: light dark;\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #242424;\n\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\na:hover {\n  color: #535bf2;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 320px;\n  min-height: 100vh;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  color: white;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\nbutton:hover {\n  border-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n  outline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n    color: #213547;\n  }\n}\n\n#root {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n";
  document.head.appendChild(__vite_style__);
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m = require$$0$1;
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  const AuthContext = require$$0.createContext(void 0);
  const useAuth = () => {
    const context = require$$0.useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  const AuthProvider = ({ children }) => {
    const [user, setUser] = require$$0.useState(null);
    const [isLoading, setIsLoading] = require$$0.useState(true);
    require$$0.useEffect(() => {
      const initializeDemoAccount = () => {
        const users = JSON.parse(localStorage.getItem("smartscore_users") || "[]");
        const demoExists = users.find((u) => u.email === "demo@smartscore.com");
        if (!demoExists) {
          const demoUser = {
            id: "demo-user-001",
            email: "demo@smartscore.com",
            name: "데모 사용자",
            password: "demo123",
            createdAt: (/* @__PURE__ */ new Date()).toISOString()
          };
          users.push(demoUser);
          localStorage.setItem("smartscore_users", JSON.stringify(users));
        }
      };
      initializeDemoAccount();
      const savedUser = localStorage.getItem("smartscore_user");
      if (savedUser) {
        try {
          const userData = JSON.parse(savedUser);
          setUser(userData);
        } catch (error) {
          console.error("Failed to parse saved user data:", error);
          localStorage.removeItem("smartscore_user");
        }
      }
      setIsLoading(false);
    }, []);
    const login = (credentials) => __async(this, null, function* () {
      setIsLoading(true);
      try {
        const users = JSON.parse(localStorage.getItem("smartscore_users") || "[]");
        const foundUser = users.find((u) => u.email === credentials.email);
        if (!foundUser) {
          throw new Error("사용자를 찾을 수 없습니다.");
        }
        if (foundUser.password !== credentials.password) {
          throw new Error("비밀번호가 틀렸습니다.");
        }
        const _a = foundUser, { password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
        setUser(userWithoutPassword);
        localStorage.setItem("smartscore_user", JSON.stringify(userWithoutPassword));
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    });
    const register = (credentials) => __async(this, null, function* () {
      setIsLoading(true);
      try {
        if (credentials.password !== credentials.confirmPassword) {
          throw new Error("비밀번호가 일치하지 않습니다.");
        }
        if (credentials.password.length < 6) {
          throw new Error("비밀번호는 최소 6자 이상이어야 합니다.");
        }
        const users = JSON.parse(localStorage.getItem("smartscore_users") || "[]");
        const existingUser = users.find((u) => u.email === credentials.email);
        if (existingUser) {
          throw new Error("이미 사용 중인 이메일입니다.");
        }
        const newUser = {
          id: Date.now().toString(),
          email: credentials.email,
          name: credentials.name,
          password: credentials.password,
          // 실제 서비스에서는 해시화 필요
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        users.push(newUser);
        localStorage.setItem("smartscore_users", JSON.stringify(users));
        const _a = newUser, { password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
        setUser(userWithoutPassword);
        localStorage.setItem("smartscore_user", JSON.stringify(userWithoutPassword));
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    });
    const logout = () => {
      setUser(null);
      localStorage.removeItem("smartscore_user");
    };
    const updateProfile = (userData) => __async(this, null, function* () {
      if (!user)
        return;
      const updatedUser = __spreadValues(__spreadValues({}, user), userData);
      setUser(updatedUser);
      localStorage.setItem("smartscore_user", JSON.stringify(updatedUser));
      const users = JSON.parse(localStorage.getItem("smartscore_users") || "[]");
      const userIndex = users.findIndex((u) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = __spreadValues(__spreadValues({}, users[userIndex]), userData);
        localStorage.setItem("smartscore_users", JSON.stringify(users));
      }
    });
    const value = {
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout,
      updateProfile
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
  };
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        console.warn(new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
  }
  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
      return false;
    }
    var date = toDate(dirtyDate);
    return !isNaN(Number(date));
  }
  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }
  var MILLISECONDS_IN_DAY = 864e5;
  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }
  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }
  var MILLISECONDS_IN_WEEK$1 = 6048e5;
  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }
  function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getUTCWeekYear(dirtyDate, options);
    var firstWeek = /* @__PURE__ */ new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, options);
    return date;
  }
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }
  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }
  var formatters$2 = {
    // Year
    y: function y(date, token) {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
      var month = date.getUTCMonth();
      return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return dayPeriodEnumValue.toUpperCase();
        case "aaa":
          return dayPeriodEnumValue;
        case "aaaaa":
          return dayPeriodEnumValue[0];
        case "aaaa":
        default:
          return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function h(date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m2(date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };
  const formatters$3 = formatters$2;
  var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  var formatters = {
    // Era
    G: function G(date, token, localize2) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return localize2.era(era, {
            width: "abbreviated"
          });
        case "GGGGG":
          return localize2.era(era, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return localize2.era(era, {
            width: "wide"
          });
      }
    },
    // Year
    y: function y(date, token, localize2) {
      if (token === "yo") {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize2.ordinalNumber(year, {
          unit: "year"
        });
      }
      return formatters$3.y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize2, options) {
      var signedWeekYear = getUTCWeekYear(date, options);
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
      if (token === "YY") {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      }
      if (token === "Yo") {
        return localize2.ordinalNumber(weekYear, {
          unit: "year"
        });
      }
      return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
      var isoWeekYear = getUTCISOWeekYear(date);
      return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "Q":
          return String(quarter);
        case "QQ":
          return addLeadingZeros(quarter, 2);
        case "Qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "QQQ":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function q2(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "q":
          return String(quarter);
        case "qq":
          return addLeadingZeros(quarter, 2);
        case "qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "qqq":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function M(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "M":
        case "MM":
          return formatters$3.M(date, token);
        case "Mo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "MMM":
          return localize2.month(month, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return localize2.month(month, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function L(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "L":
          return String(month + 1);
        case "LL":
          return addLeadingZeros(month + 1, 2);
        case "Lo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "LLL":
          return localize2.month(month, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return localize2.month(month, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function w(date, token, localize2, options) {
      var week = getUTCWeek(date, options);
      if (token === "wo") {
        return localize2.ordinalNumber(week, {
          unit: "week"
        });
      }
      return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize2) {
      var isoWeek = getUTCISOWeek(date);
      if (token === "Io") {
        return localize2.ordinalNumber(isoWeek, {
          unit: "week"
        });
      }
      return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize2) {
      if (token === "do") {
        return localize2.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        });
      }
      return formatters$3.d(date, token);
    },
    // Day of year
    D: function D(date, token, localize2) {
      var dayOfYear = getUTCDayOfYear(date);
      if (token === "Do") {
        return localize2.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        });
      }
      return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function e(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "e":
          return String(localDayOfWeek);
        case "ee":
          return addLeadingZeros(localDayOfWeek, 2);
        case "eo":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "eee":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "c":
          return String(localDayOfWeek);
        case "cc":
          return addLeadingZeros(localDayOfWeek, token.length);
        case "co":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "ccc":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function i(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
        case "i":
          return String(isoDayOfWeek);
        case "ii":
          return addLeadingZeros(isoDayOfWeek, token.length);
        case "io":
          return localize2.ordinalNumber(isoDayOfWeek, {
            unit: "day"
          });
        case "iii":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function a(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      }
      switch (token) {
        case "b":
        case "bb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function h(date, token, localize2) {
      if (token === "ho") {
        var hours = date.getUTCHours() % 12;
        if (hours === 0)
          hours = 12;
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return formatters$3.h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize2) {
      if (token === "Ho") {
        return localize2.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        });
      }
      return formatters$3.H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize2) {
      var hours = date.getUTCHours() % 12;
      if (token === "Ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function k2(date, token, localize2) {
      var hours = date.getUTCHours();
      if (hours === 0)
        hours = 24;
      if (token === "ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function m2(date, token, localize2) {
      if (token === "mo") {
        return localize2.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        });
      }
      return formatters$3.m(date, token);
    },
    // Second
    s: function s(date, token, localize2) {
      if (token === "so") {
        return localize2.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        });
      }
      return formatters$3.s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
      return formatters$3.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return "Z";
      }
      switch (token) {
        case "X":
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        case "XXXX":
        case "XX":
          return formatTimezone(timezoneOffset);
        case "XXXXX":
        case "XXX":
        default:
          return formatTimezone(timezoneOffset, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "x":
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        case "xxxx":
        case "xx":
          return formatTimezone(timezoneOffset);
        case "xxxxx":
        case "xxx":
        default:
          return formatTimezone(timezoneOffset, ":");
      }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + formatTimezoneShort(timezoneOffset, ":");
        case "OOOO":
        default:
          return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + formatTimezoneShort(timezoneOffset, ":");
        case "zzzz":
        default:
          return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1e3);
      return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };
  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? "-" : "+";
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
  }
  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }
  const formatters$1 = formatters;
  var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
    switch (pattern) {
      case "P":
        return formatLong2.date({
          width: "short"
        });
      case "PP":
        return formatLong2.date({
          width: "medium"
        });
      case "PPP":
        return formatLong2.date({
          width: "long"
        });
      case "PPPP":
      default:
        return formatLong2.date({
          width: "full"
        });
    }
  };
  var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
    switch (pattern) {
      case "p":
        return formatLong2.time({
          width: "short"
        });
      case "pp":
        return formatLong2.time({
          width: "medium"
        });
      case "ppp":
        return formatLong2.time({
          width: "long"
        });
      case "pppp":
      default:
        return formatLong2.time({
          width: "full"
        });
    }
  };
  var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong2);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong2.dateTime({
          width: "short"
        });
        break;
      case "PP":
        dateTimeFormat = formatLong2.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        dateTimeFormat = formatLong2.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        dateTimeFormat = formatLong2.dateTime({
          width: "full"
        });
        break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
  };
  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  const longFormatters$1 = longFormatters;
  var protectedDayOfYearTokens = ["D", "DD"];
  var protectedWeekYearTokens = ["YY", "YYYY"];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format2, input) {
    if (token === "YYYY") {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "YY") {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "D") {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "DD") {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    }
  }
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };
  const formatDistance$1 = formatDistance;
  function buildFormatLongFn(args) {
    return function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format2 = args.formats[width] || args.formats[args.defaultWidth];
      return format2;
    };
  }
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };
  const formatLong$1 = formatLong;
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  };
  const formatRelative$1 = formatRelative;
  function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index2 = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index2];
    };
  }
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function argumentCallback(quarter) {
        return quarter - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };
  const localize$1 = localize;
  function buildMatchFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
        return pattern.test(matchedString);
      }) : findKey(parsePatterns, function(pattern) {
        return pattern.test(matchedString);
      });
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
    return void 0;
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return void 0;
  }
  function buildMatchPatternFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult)
        return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult)
        return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function valueCallback(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function valueCallback(index2) {
        return index2 + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };
  const match$1 = match;
  var locale = {
    code: "en-US",
    formatDistance: formatDistance$1,
    formatLong: formatLong$1,
    formatRelative: formatRelative$1,
    localize: localize$1,
    match: match$1,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  const defaultLocale = locale;
  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions2 = getDefaultOptions();
    var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
    var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale2.localize) {
      throw new RangeError("locale must contain localize property");
    }
    if (!locale2.formatLong) {
      throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
      throw new RangeError("Invalid time value");
    }
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate,
      weekStartsOn,
      locale: locale2,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = longFormatters$1[firstCharacter];
        return longFormatter(substring, locale2.formatLong);
      }
      return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }
      var formatter = formatters$1[firstCharacter];
      if (formatter) {
        if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
        }
        if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
        }
        return formatter(utcDate, substring, locale2.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }
      return substring;
    }).join("");
    return result;
  }
  function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) {
      return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
  }
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
  const createLucideIcon = (iconName, iconNode) => {
    const Component = require$$0.forwardRef(
      (_a, ref) => {
        var _b = _a, { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children } = _b, rest = __objRest(_b, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children"]);
        return require$$0.createElement(
          "svg",
          __spreadValues(__spreadProps(__spreadValues({
            ref
          }, defaultAttributes), {
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" ")
          }), rest),
          [
            ...iconNode.map(([tag, attrs]) => require$$0.createElement(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        );
      }
    );
    Component.displayName = `${iconName}`;
    return Component;
  };
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Calendar = createLucideIcon("Calendar", [
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
    ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
    ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
    ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const EyeOff = createLucideIcon("EyeOff", [
    ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
    [
      "path",
      {
        d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
        key: "9wicm4"
      }
    ],
    [
      "path",
      { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
    ],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Eye = createLucideIcon("Eye", [
    ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Flag = createLucideIcon("Flag", [
    ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
    ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Lock = createLucideIcon("Lock", [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const LogIn = createLucideIcon("LogIn", [
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
    ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
    ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const LogOut = createLucideIcon("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Mail = createLucideIcon("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const MapPin = createLucideIcon("MapPin", [
    ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const PenLine = createLucideIcon("PenLine", [
    ["path", { d: "M12 20h9", key: "t2du7b" }],
    ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Plus = createLucideIcon("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Save = createLucideIcon("Save", [
    ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
    ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
    ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Search = createLucideIcon("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Target = createLucideIcon("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Trash2 = createLucideIcon("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const UserPlus = createLucideIcon("UserPlus", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const User = createLucideIcon("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Users = createLucideIcon("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
  ]);
  /**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const X = createLucideIcon("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]);
  const RoundForm$1 = "";
  const RoundForm = ({ onAddRound }) => {
    const [course, setCourse] = require$$0.useState("");
    const [companions, setCompanions] = require$$0.useState([""]);
    const [holes, setHoles] = require$$0.useState(Array.from({ length: 18 }, (_, i) => ({
      holeNumber: i + 1,
      par: 4,
      // 기본값을 4로 설정
      score: 0,
      regularOn: false,
      twoPutt: false,
      obCount: 0,
      hazardCount: 0,
      drive: { club: "Driver", distance: 0, result: "fair", driverResult: "" },
      wood: { club: "Wood", distance: 0, result: "fair", woodResult: "" },
      irons: [{ club: "Iron", distance: 0, result: "fair", ironNumber: void 0 }],
      putt: { club: "Putter", distance: 0, result: "fair", puttCount: 0 }
    })));
    const addCompanion = () => {
      setCompanions([...companions, ""]);
    };
    const removeCompanion = (index2) => {
      if (companions.length > 1) {
        setCompanions(companions.filter((_, i) => i !== index2));
      }
    };
    const updateCompanion = (index2, value) => {
      const newCompanions = [...companions];
      newCompanions[index2] = value;
      setCompanions(newCompanions);
    };
    const updatePar = (holeIndex, par) => {
      const newHoles = [...holes];
      newHoles[holeIndex] = __spreadProps(__spreadValues({}, newHoles[holeIndex]), { par });
      setHoles(newHoles);
      recalculateHoleScore(holeIndex);
    };
    const addIron = (holeIndex) => {
      const newHoles = [...holes];
      const newIron = { club: "Iron", distance: 0, result: "fair", ironNumber: 7 };
      newHoles[holeIndex].irons.push(newIron);
      setHoles(newHoles);
      recalculateHoleScore(holeIndex);
    };
    const removeIron = (holeIndex, ironIndex) => {
      const newHoles = [...holes];
      newHoles[holeIndex].irons.splice(ironIndex, 1);
      if (newHoles[holeIndex].irons.length === 0) {
        newHoles[holeIndex].irons = [{ club: "Iron", distance: 0, result: "fair", ironNumber: 7 }];
      }
      setHoles(newHoles);
      recalculateHoleScore(holeIndex);
    };
    const updateClubUsage = (holeIndex, clubType, field, value, ironIndex) => {
      const newHoles = [...holes];
      if (clubType === "irons" && ironIndex !== void 0) {
        const newIrons = [...newHoles[holeIndex].irons];
        newIrons[ironIndex] = __spreadProps(__spreadValues({}, newIrons[ironIndex]), { [field]: value });
        newHoles[holeIndex] = __spreadProps(__spreadValues({}, newHoles[holeIndex]), {
          irons: newIrons
        });
      } else {
        newHoles[holeIndex] = __spreadProps(__spreadValues({}, newHoles[holeIndex]), {
          [clubType]: __spreadProps(__spreadValues({}, newHoles[holeIndex][clubType]), { [field]: value })
        });
      }
      setHoles(newHoles);
      recalculateHoleScore(holeIndex);
    };
    const recalculateHoleScore = (holeIndex) => {
      setHoles((prevHoles) => {
        const newHoles = [...prevHoles];
        const hole = newHoles[holeIndex];
        let score = 0;
        if (hole.drive.driverResult) {
          switch (hole.drive.driverResult) {
            case "survival":
              score += 1;
              break;
            case "ob":
              score += 3;
              break;
            case "pa":
              score += 2;
              break;
          }
        }
        if (hole.wood.woodResult) {
          score += 1;
        }
        const selectedIrons = hole.irons.filter((iron) => iron.ironNumber !== void 0);
        score += selectedIrons.length;
        score += hole.putt.puttCount || 0;
        const driveScore = hole.drive.driverResult ? hole.drive.driverResult === "survival" ? 1 : hole.drive.driverResult === "pa" ? 2 : 3 : 0;
        const woodScore = hole.wood.woodResult ? 1 : 0;
        const ironScore = selectedIrons.length;
        const approachScore = driveScore + woodScore + ironScore;
        let regularOn = false;
        if (hole.par === 3) {
          regularOn = approachScore <= 1;
        } else if (hole.par === 4) {
          regularOn = approachScore <= 2;
        } else if (hole.par === 5) {
          regularOn = approachScore <= 3;
        }
        const twoPutt = (hole.putt.puttCount || 0) <= 2;
        newHoles[holeIndex] = __spreadProps(__spreadValues({}, hole), {
          score: score - hole.par,
          // 파 기준으로 상대 스코어 계산
          regularOn,
          twoPutt
        });
        return newHoles;
      });
    };
    const updateScore = (holeIndex, score) => {
      const newHoles = [...holes];
      const hole = newHoles[holeIndex];
      const scoreRelativeToPar = score - hole.par;
      newHoles[holeIndex] = __spreadProps(__spreadValues({}, hole), {
        score: scoreRelativeToPar
      });
      setHoles(newHoles);
    };
    const incrementPutt = (holeIndex) => {
      setHoles((prevHoles) => {
        const currentPuttCount = prevHoles[holeIndex].putt.puttCount || 0;
        const newPuttCount = Math.min(6, currentPuttCount + 1);
        const newHoles = [...prevHoles];
        newHoles[holeIndex] = __spreadProps(__spreadValues({}, newHoles[holeIndex]), {
          putt: __spreadProps(__spreadValues({}, newHoles[holeIndex].putt), { puttCount: newPuttCount })
        });
        return newHoles;
      });
      setTimeout(() => recalculateHoleScore(holeIndex), 0);
    };
    const decrementPutt = (holeIndex) => {
      setHoles((prevHoles) => {
        const currentPuttCount = prevHoles[holeIndex].putt.puttCount || 0;
        const newPuttCount = Math.max(0, currentPuttCount - 1);
        const newHoles = [...prevHoles];
        newHoles[holeIndex] = __spreadProps(__spreadValues({}, newHoles[holeIndex]), {
          putt: __spreadProps(__spreadValues({}, newHoles[holeIndex].putt), { puttCount: newPuttCount })
        });
        return newHoles;
      });
      setTimeout(() => recalculateHoleScore(holeIndex), 0);
    };
    const getScoreDisplay = (score) => {
      if (score === 0)
        return "0";
      if (score > 0)
        return `+${score}`;
      return score.toString();
    };
    const getScoreClass = (score) => {
      if (score === 0)
        return "score-par";
      if (score === 1)
        return "score-bogey";
      if (score >= 2)
        return "score-double";
      return "score-birdie";
    };
    const calculateTotal = (startHole, endHole, field) => {
      return holes.filter((hole) => hole.holeNumber >= startHole && hole.holeNumber <= endHole).reduce((total, hole) => {
        if (field === "par")
          return total + hole.par;
        if (field === "score")
          return total + hole.par + hole.score;
        if (field === "putt")
          return total + (hole.putt.puttCount || 0);
        return total;
      }, 0);
    };
    const calculateToParTotal = (startHole, endHole) => {
      return holes.filter((hole) => hole.holeNumber >= startHole && hole.holeNumber <= endHole).reduce((total, hole) => total + hole.score, 0);
    };
    const calculateOBPAStats = () => {
      const obCount = holes.filter((hole) => hole.drive.driverResult === "ob").length;
      const paCount = holes.filter((hole) => hole.drive.driverResult === "pa").length;
      return { obCount, paCount };
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const { obCount, paCount } = calculateOBPAStats();
      const newRound = {
        id: Date.now().toString(),
        date: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
        course: course || "미지정 코스",
        totalScore: calculateTotal(1, 18, "score"),
        regularOnCount: holes.filter((hole) => hole.regularOn).length,
        twoPuttCount: holes.filter((hole) => hole.twoPutt).length,
        obCount,
        paCount,
        companions: companions.filter((c) => c.trim()),
        holes
      };
      onAddRound(newRound);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-form", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🏌️ 새 라운드 기록" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "골프 라운드 스코어를 입력하세요" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "scorecard-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "course-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "input-icon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "골프장 이름",
                value: course,
                onChange: (e) => setCourse(e.target.value),
                className: "course-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "companions-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "동반자:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "companions-list", children: [
              companions.map((companion, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "companion-input", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "동반자 이름",
                    value: companion,
                    onChange: (e) => updateCompanion(index2, e.target.value)
                  }
                ),
                companions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => removeCompanion(index2),
                    className: "remove-btn",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
                  }
                )
              ] }, index2)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: addCompanion,
                  className: "add-companion-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                    " 동반자 추가"
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "스코어카드" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Front Nine (1-9)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "HOLE" }),
                Array.from({ length: 9 }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: i + 1 }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: "TOTAL" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "PAR" }),
                holes.slice(0, 9).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell par", children: hole.par }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: calculateTotal(1, 9, "par") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "SCORE" }),
                holes.slice(0, 9).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    min: hole.par - 2,
                    max: hole.par + 5,
                    value: hole.par + hole.score,
                    onChange: (e) => updateScore(i, parseInt(e.target.value) || 0),
                    className: `score-input ${getScoreClass(hole.score)}`
                  }
                ) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: calculateTotal(1, 9, "score") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "TO PAR" }),
                holes.slice(0, 9).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-display ${getScoreClass(hole.score)}`, children: hole.score > 0 ? `+${hole.score}` : hole.score }) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-total ${calculateToParTotal(1, 9) > 0 ? "over-par" : calculateToParTotal(1, 9) < 0 ? "under-par" : "even-par"}`, children: calculateToParTotal(1, 9) > 0 ? `+${calculateToParTotal(1, 9)}` : calculateToParTotal(1, 9) }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Back Nine (10-18)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "HOLE" }),
                Array.from({ length: 9 }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: i + 10 }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: "TOTAL" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "PAR" }),
                holes.slice(9, 18).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell par", children: hole.par }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: calculateTotal(10, 18, "par") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "SCORE" }),
                holes.slice(9, 18).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    min: hole.par - 2,
                    max: hole.par + 5,
                    value: hole.par + hole.score,
                    onChange: (e) => updateScore(i + 9, parseInt(e.target.value) || 0),
                    className: `score-input ${getScoreClass(hole.score)}`
                  }
                ) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: calculateTotal(10, 18, "score") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "TO PAR" }),
                holes.slice(9, 18).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-display ${getScoreClass(hole.score)}`, children: hole.score > 0 ? `+${hole.score}` : hole.score }) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-total ${calculateToParTotal(10, 18) > 0 ? "over-par" : calculateToParTotal(10, 18) < 0 ? "under-par" : "even-par"}`, children: calculateToParTotal(10, 18) > 0 ? `+${calculateToParTotal(10, 18)}` : calculateToParTotal(10, 18) }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "total-summary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "total-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total-label", children: "전체 PAR:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total-value", children: calculateTotal(1, 18, "par") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "total-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total-label", children: "전체 SCORE:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total-value", children: calculateTotal(1, 18, "score") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "club-usage-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "상세 클럽 사용 기록" }),
          holes.map((hole, holeIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hole-detail-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hole-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hole-info", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hole-title-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
                    "홀 ",
                    hole.holeNumber
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hole-score-info", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "par-info", children: [
                      "파 ",
                      hole.par
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "score-separator", children: "→" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `hole-score ${getScoreClass(hole.score)}`, children: [
                      hole.par + hole.score,
                      "타"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `score-status ${getScoreClass(hole.score)}`, children: [
                      "(",
                      getScoreDisplay(hole.score),
                      ")"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "par-selector", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "파:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: hole.par,
                      onChange: (e) => updatePar(holeIndex, parseInt(e.target.value)),
                      className: "par-select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "파 3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4, children: "파 4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 5, children: "파 5" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hole-kpis", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: hole.regularOn,
                      disabled: true,
                      className: "kpi-checkbox"
                    }
                  ),
                  "Regular On"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: hole.twoPutt,
                      disabled: true,
                      className: "kpi-checkbox"
                    }
                  ),
                  "2 Putt"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "club-usage", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "club-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "드라이버" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "driver-options", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: hole.drive.driverResult,
                    onChange: (e) => updateClubUsage(holeIndex, "drive", "driverResult", e.target.value),
                    className: "driver-result-select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "드라이버" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "survival", children: "굿샷" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pa", children: "PA" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ob", children: "OB" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "club-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "우드/유틸" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wood-options", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: hole.wood.woodResult,
                    onChange: (e) => updateClubUsage(holeIndex, "wood", "woodResult", e.target.value),
                    className: "wood-result-select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "우드/유틸" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "survival", children: "유틸2" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "club-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "아이언" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "irons-container", children: [
                  hole.irons.map((iron, ironIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "iron-item", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: iron.ironNumber || "",
                        onChange: (e) => updateClubUsage(holeIndex, "irons", "ironNumber", e.target.value ? parseInt(e.target.value) : void 0, ironIndex),
                        className: "iron-number-select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "3번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4, children: "4번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 5, children: "5번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 6, children: "6번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 7, children: "7번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 8, children: "8번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 9, children: "9번 아이언" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 10, children: "P" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 52, children: "52" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 56, children: "56" })
                        ]
                      }
                    ),
                    hole.irons.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => removeIron(holeIndex, ironIndex),
                        className: "remove-iron-btn",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
                      }
                    )
                  ] }, ironIndex)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => addIron(holeIndex),
                      className: "add-iron-btn",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "club-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "퍼터" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "putt-container", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "putt-score", children: hole.putt.puttCount || 0 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "putt-buttons", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => decrementPutt(holeIndex),
                        className: "putt-btn putt-minus",
                        disabled: (hole.putt.puttCount || 0) <= 0,
                        children: "-"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => incrementPutt(holeIndex),
                        className: "putt-btn putt-plus",
                        disabled: (hole.putt.puttCount || 0) >= 6,
                        children: "+"
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          ] }, hole.holeNumber))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "submit-btn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 20 }),
          "라운드 저장"
        ] }) })
      ] })
    ] });
  };
  const RoundList$1 = "";
  const RoundList = ({ rounds, onDeleteRound }) => {
    const [searchTerm, setSearchTerm] = require$$0.useState("");
    const [filterCourse, setFilterCourse] = require$$0.useState("");
    const [filterCompanion, setFilterCompanion] = require$$0.useState("");
    const [sortBy, setSortBy] = require$$0.useState("date");
    const [sortOrder, setSortOrder] = require$$0.useState("desc");
    const [selectedRound, setSelectedRound] = require$$0.useState(null);
    const filteredRounds = rounds.filter((round) => {
      const matchesSearch = round.course.toLowerCase().includes(searchTerm.toLowerCase()) || round.companions.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCourse = !filterCourse || round.course === filterCourse;
      const matchesCompanion = !filterCompanion || round.companions.includes(filterCompanion);
      return matchesSearch && matchesCourse && matchesCompanion;
    }).sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "date":
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case "score":
          aValue = a.totalScore;
          bValue = b.totalScore;
          break;
        case "regularOn":
          aValue = a.regularOnCount;
          bValue = b.regularOnCount;
          break;
        case "twoPutt":
          aValue = a.twoPuttCount;
          bValue = b.twoPuttCount;
          break;
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
      }
      if (sortOrder === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
    const uniqueCourses = Array.from(new Set(rounds.map((r) => r.course)));
    const allCompanions = Array.from(new Set(rounds.flatMap((r) => r.companions)));
    const handleSort = (field) => {
      if (sortBy === field) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortBy(field);
        setSortOrder("desc");
      }
    };
    const handleViewDetails = (round) => {
      setSelectedRound(round);
    };
    const closeModal = () => {
      setSelectedRound(null);
    };
    const getScoreClass = (score) => {
      if (score === 0)
        return "score-par";
      if (score === 1)
        return "score-bogey";
      if (score >= 2)
        return "score-double";
      return "score-birdie";
    };
    const calculateToParTotal = (startHole, endHole, holes) => {
      return holes.filter((hole) => hole.holeNumber >= startHole && hole.holeNumber <= endHole).reduce((total, hole) => total + hole.score, 0);
    };
    if (rounds.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-list empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "저장된 라운드가 없습니다" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "새 라운드를 기록해보세요!" })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-list", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "라운드 목록" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-box", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "골프장명 또는 동반자로 검색...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-controls", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterCourse,
              onChange: (e) => setFilterCourse(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "모든 골프장" }),
                uniqueCourses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: course, children: course }, course))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterCompanion,
              onChange: (e) => setFilterCompanion(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "모든 동반자" }),
                allCompanions.map((companion) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: companion, children: companion }, companion))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sort-controls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "정렬:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: sortBy === "date" ? "active" : "",
            onClick: () => handleSort("date"),
            children: [
              "날짜 ",
              sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: sortBy === "score" ? "active" : "",
            onClick: () => handleSort("score"),
            children: [
              "스코어 ",
              sortBy === "score" && (sortOrder === "asc" ? "↑" : "↓")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: sortBy === "regularOn" ? "active" : "",
            onClick: () => handleSort("regularOn"),
            children: [
              "Regular On ",
              sortBy === "regularOn" && (sortOrder === "asc" ? "↑" : "↓")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: sortBy === "twoPutt" ? "active" : "",
            onClick: () => handleSort("twoPutt"),
            children: [
              "2 Putt ",
              sortBy === "twoPutt" && (sortOrder === "asc" ? "↑" : "↓")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounds-grid", children: filteredRounds.map((round) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-date", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
            format(new Date(round.date), "yyyy년 MM월 dd일")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onDeleteRound(round.id),
              className: "delete-btn",
              title: "삭제",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-course", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
          round.course
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-companions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
          round.companions.length > 0 ? round.companions.join(", ") : "혼자"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-stats", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "총 스코어: ",
              round.totalScore
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Regular On: ",
              round.regularOnCount,
              "/18"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "2 Putt: ",
              round.twoPuttCount,
              "/18"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "OB: ",
              round.obCount
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "PA: ",
              round.paCount
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "round-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "view-btn", onClick: () => handleViewDetails(round), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 }),
          "상세보기"
        ] }) })
      ] }, round.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-summary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "총 ",
        filteredRounds.length,
        "개의 라운드가 있습니다."
      ] }) }),
      selectedRound && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: closeModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "라운드 상세 정보" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "close-btn", onClick: closeModal, children: "×" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(new Date(selectedRound.date), "yyyy년 MM월 dd일") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedRound.course })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedRound.companions.length > 0 ? selectedRound.companions.join(", ") : "혼자" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Front Nine (1-9)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "HOLE" }),
                Array.from({ length: 9 }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: i + 1 }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: "TOTAL" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "PAR" }),
                selectedRound.holes.slice(0, 9).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell par", children: hole.par }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: selectedRound.holes.slice(0, 9).reduce((total, hole) => total + hole.par, 0) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "SCORE" }),
                selectedRound.holes.slice(0, 9).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `score-display ${getScoreClass(hole.score)}`, children: hole.par + hole.score }) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: selectedRound.holes.slice(0, 9).reduce((total, hole) => total + hole.par + hole.score, 0) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "TO PAR" }),
                selectedRound.holes.slice(0, 9).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-display ${getScoreClass(hole.score)}`, children: hole.score > 0 ? `+${hole.score}` : hole.score }) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-total ${calculateToParTotal(1, 9, selectedRound.holes) > 0 ? "over-par" : calculateToParTotal(1, 9, selectedRound.holes) < 0 ? "under-par" : "even-par"}`, children: calculateToParTotal(1, 9, selectedRound.holes) > 0 ? `+${calculateToParTotal(1, 9, selectedRound.holes)}` : calculateToParTotal(1, 9, selectedRound.holes) }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Back Nine (10-18)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "HOLE" }),
                Array.from({ length: 9 }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: i + 10 }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: "TOTAL" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "PAR" }),
                selectedRound.holes.slice(9, 18).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell par", children: hole.par }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: selectedRound.holes.slice(9, 18).reduce((total, hole) => total + hole.par, 0) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "SCORE" }),
                selectedRound.holes.slice(9, 18).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `score-display ${getScoreClass(hole.score)}`, children: hole.par + hole.score }) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: selectedRound.holes.slice(9, 18).reduce((total, hole) => total + hole.par + hole.score, 0) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scorecard-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: "TO PAR" }),
                selectedRound.holes.slice(9, 18).map((hole, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-display ${getScoreClass(hole.score)}`, children: hole.score > 0 ? `+${hole.score}` : hole.score }) }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell total", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `to-par-total ${calculateToParTotal(10, 18, selectedRound.holes) > 0 ? "over-par" : calculateToParTotal(10, 18, selectedRound.holes) < 0 ? "under-par" : "even-par"}`, children: calculateToParTotal(10, 18, selectedRound.holes) > 0 ? `+${calculateToParTotal(10, 18, selectedRound.holes)}` : calculateToParTotal(10, 18, selectedRound.holes) }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "round-summary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "라운드 통계" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stats-grid", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "총 스코어" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-value", children: selectedRound.totalScore })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Regular On" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-value", children: [
                  selectedRound.regularOnCount,
                  "/18"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "2 Putt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-value", children: [
                  selectedRound.twoPuttCount,
                  "/18"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "OB" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-value", children: selectedRound.obCount })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "PA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-value", children: selectedRound.paCount })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] });
  };
  const LoginForm$1 = "";
  const LoginForm = () => {
    const { login, register, isLoading } = useAuth();
    const [isLoginMode, setIsLoginMode] = require$$0.useState(true);
    const [showPassword, setShowPassword] = require$$0.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = require$$0.useState(false);
    const [error, setError] = require$$0.useState("");
    const [loginForm, setLoginForm] = require$$0.useState({
      email: "",
      password: ""
    });
    const [registerForm, setRegisterForm] = require$$0.useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    const handleLoginSubmit = (e) => __async(this, null, function* () {
      e.preventDefault();
      setError("");
      try {
        yield login(loginForm);
      } catch (err) {
        setError(err instanceof Error ? err.message : "로그인에 실패했습니다.");
      }
    });
    const handleRegisterSubmit = (e) => __async(this, null, function* () {
      e.preventDefault();
      setError("");
      try {
        yield register(registerForm);
      } catch (err) {
        setError(err instanceof Error ? err.message : "회원가입에 실패했습니다.");
      }
    });
    const toggleMode = () => {
      setIsLoginMode(!isLoginMode);
      setError("");
      setLoginForm({ email: "", password: "" });
      setRegisterForm({ name: "", email: "", password: "", confirmPassword: "" });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "login-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🏌️ SmartScore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isLoginMode ? "로그인하여 시작하기" : "새 계정 만들기" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "auth-tabs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: isLoginMode ? "active" : "",
            onClick: () => setIsLoginMode(true),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16 }),
              "로그인"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: !isLoginMode ? "active" : "",
            onClick: () => setIsLoginMode(false),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 16 }),
              "회원가입"
            ]
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: error }),
      isLoginMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLoginSubmit, className: "auth-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
            "이메일"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: loginForm.email,
              onChange: (e) => setLoginForm(__spreadProps(__spreadValues({}, loginForm), { email: e.target.value })),
              placeholder: "이메일을 입력하세요",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16 }),
            "비밀번호"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "password-input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: showPassword ? "text" : "password",
                value: loginForm.password,
                onChange: (e) => setLoginForm(__spreadProps(__spreadValues({}, loginForm), { password: e.target.value })),
                placeholder: "비밀번호를 입력하세요",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "password-toggle",
                onClick: () => setShowPassword(!showPassword),
                children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "auth-submit-btn", disabled: isLoading, children: isLoading ? "로그인 중..." : "로그인" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegisterSubmit, className: "auth-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16 }),
            "이름"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: registerForm.name,
              onChange: (e) => setRegisterForm(__spreadProps(__spreadValues({}, registerForm), { name: e.target.value })),
              placeholder: "이름을 입력하세요",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
            "이메일"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: registerForm.email,
              onChange: (e) => setRegisterForm(__spreadProps(__spreadValues({}, registerForm), { email: e.target.value })),
              placeholder: "이메일을 입력하세요",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16 }),
            "비밀번호"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "password-input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: showPassword ? "text" : "password",
                value: registerForm.password,
                onChange: (e) => setRegisterForm(__spreadProps(__spreadValues({}, registerForm), { password: e.target.value })),
                placeholder: "비밀번호를 입력하세요 (최소 6자)",
                required: true,
                minLength: 6
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "password-toggle",
                onClick: () => setShowPassword(!showPassword),
                children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16 }),
            "비밀번호 확인"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "password-input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: showConfirmPassword ? "text" : "password",
                value: registerForm.confirmPassword,
                onChange: (e) => setRegisterForm(__spreadProps(__spreadValues({}, registerForm), { confirmPassword: e.target.value })),
                placeholder: "비밀번호를 다시 입력하세요",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "password-toggle",
                onClick: () => setShowConfirmPassword(!showConfirmPassword),
                children: showConfirmPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "auth-submit-btn", disabled: isLoading, children: isLoading ? "가입 중..." : "회원가입" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "auth-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        isLoginMode ? "계정이 없으신가요?" : "이미 계정이 있으신가요?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggleMode, className: "toggle-mode-btn", children: isLoginMode ? "회원가입" : "로그인" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "demo-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "🎯 데모 계정" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "이메일:" }),
          " demo@smartscore.com"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "비밀번호:" }),
          " demo123"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "위 계정으로 바로 체험해보세요!" })
      ] })
    ] }) });
  };
  const UserProfile$1 = "";
  const UserProfile = () => {
    const { user, logout, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = require$$0.useState(false);
    const [editForm, setEditForm] = require$$0.useState({
      name: (user == null ? void 0 : user.name) || "",
      email: (user == null ? void 0 : user.email) || ""
    });
    if (!user)
      return null;
    const handleSave = () => __async(this, null, function* () {
      try {
        yield updateProfile(editForm);
        setIsEditing(false);
      } catch (error) {
        console.error("프로필 업데이트 실패:", error);
      }
    });
    const handleCancel = () => {
      setEditForm({
        name: user.name,
        email: user.email
      });
      setIsEditing(false);
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-profile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "profile-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "profile-info", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "edit-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: editForm.name,
            onChange: (e) => setEditForm(__spreadProps(__spreadValues({}, editForm), { name: e.target.value })),
            placeholder: "이름",
            className: "edit-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: editForm.email,
            onChange: (e) => setEditForm(__spreadProps(__spreadValues({}, editForm), { email: e.target.value })),
            placeholder: "이메일",
            className: "edit-input"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: user.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
          "가입일: ",
          formatDate(user.createdAt)
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-actions", children: [
        isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSave, className: "save-btn", title: "저장", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "저장" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCancel, className: "cancel-btn", title: "취소", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "취소" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsEditing(true), className: "edit-btn", title: "수정", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "수정" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: logout, className: "logout-btn", title: "로그아웃", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "로그아웃" })
        ] })
      ] })
    ] }) });
  };
  const App$1 = "";
  function App() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const [rounds, setRounds] = require$$0.useState([]);
    const [activeTab, setActiveTab] = require$$0.useState("form");
    require$$0.useEffect(() => {
      if (isAuthenticated && user) {
        const userDataKey = `golfRounds_${user.id}`;
        const savedRounds = localStorage.getItem(userDataKey);
        if (savedRounds) {
          setRounds(JSON.parse(savedRounds));
        } else {
          setRounds([]);
        }
      }
    }, [isAuthenticated, user]);
    require$$0.useEffect(() => {
      if (isAuthenticated && user) {
        const userDataKey = `golfRounds_${user.id}`;
        localStorage.setItem(userDataKey, JSON.stringify(rounds));
      }
    }, [rounds, isAuthenticated, user]);
    const addRound = (round) => {
      setRounds([...rounds, round]);
      setActiveTab("list");
    };
    const deleteRound = (id) => {
      setRounds(rounds.filter((round) => round.id !== id));
    };
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app loading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "loading-spinner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spinner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "로딩 중..." })
      ] }) });
    }
    if (!isAuthenticated) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, {});
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "app-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🏌️ SmartScore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "골프 라운드 스코어 관리 시스템" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserProfile, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "app-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: activeTab === "form" ? "active" : "",
            onClick: () => setActiveTab("form"),
            children: "새 라운드 기록"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: activeTab === "list" ? "active" : "",
            onClick: () => setActiveTab("list"),
            children: "라운드 목록"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "app-main", children: [
        activeTab === "form" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoundForm, { onAddRound: addRound }),
        activeTab === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoundList, { rounds, onDeleteRound: deleteRound })
      ] })
    ] });
  }
  const index = "";
  client.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
  );
})(React, ReactDOM);
