import CustomerTable from "../components/CustomerTable";
import styles from "./styles/Dashboard.module.css";

function DashBoard() {
  return (
    <div className={styles.dashBoard}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.header}>
            <p>Customer Information</p>
          </div>
          <CustomerTable />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
