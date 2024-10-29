import { useForm } from "react-hook-form";
import styles from "./CustomerForm.module.css";

function CustomerForm() {
  const data = localStorage.getItem("customers")
    ? JSON.parse(localStorage.getItem("customers"))
    : [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
    return match ? `+${match[1]}-${match[2]}-${match[3]}-${match[4]}` : phone;
  }

  function onSubmit(d) {
    const formattedPhone = formatPhoneNumber(d.phone);
    const updatedData = [...data, { ...d, phone: formattedPhone }];
    localStorage.setItem("customers", JSON.stringify(updatedData));
    reset();
  }

  return (
    <div className={styles.customerForm}>
      <p>Add New Customer</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form_row}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            id="name"
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.form_row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
            id="email"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.form_row}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            maxLength="11"
            placeholder="Enter phone number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{11}$/,
                message: "Phone number must be 11 digits",
              },
            })}
            id="phone"
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </div>

        <input className={styles.button} type="submit" value="Add Customer" />
      </form>
    </div>
  );
}

export default CustomerForm;
