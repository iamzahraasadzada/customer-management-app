import { useState } from "react";
import styles from "./CustomerTable.module.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { userInfo } from "../constants";

function CustomerTable() {
  const updatedData = localStorage.getItem("customers")
    ? [...userInfo, ...JSON.parse(localStorage.getItem("customers"))]
    : [...userInfo];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = updatedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = updatedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.appointment_table}>
      <div className={styles.table_header}>
        <div className={styles.thr}>
          <div className={styles.thd}>FullName</div>
          <div className={styles.thd}>Email</div>
          <div className={styles.thd}>Phone</div>
        </div>
      </div>
      <div className={styles.table_body}>
        {currentItems.map((d, index) => (
          <div key={d.email || index}>
            <div className={styles.tr}>
              <div className={styles.td}>{d.name}</div>
              <div className={styles.td}>{d.email}</div>
              <div className={styles.td}>{d.phone}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.table_footer}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          <FaLongArrowAltLeft className={styles.arrow} />
        </button>

        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index + 1}
              className={`${styles.pageNumber} ${
                currentPage === index + 1 ? styles.active : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <FaLongArrowAltRight className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}

export default CustomerTable;
