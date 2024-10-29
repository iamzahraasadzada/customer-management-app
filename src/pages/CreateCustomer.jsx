import CustomerForm from "../components/CustomerForm";
import styles from "./styles/CreateCustomer.module.css";

function CreateCustomer() {
  return (
    <div className={styles.createCustomer}>
      <div className={styles.container}>
        <CustomerForm />
      </div>
    </div>
  );
}

export default CreateCustomer;
