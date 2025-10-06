"use client";
import styles from './SalesforceForm.module.css';

export function SalesforceForm() {
  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd1000004UXtt"
      method="POST"
      className={styles.form}
    >
      <input type="hidden" name="oid" value="00Dd1000004UXtt" />
      <input type="hidden" name="retURL" value="https://meetings.salesloft.com/visuallayer/schedule-a-demo" />

      <label htmlFor="last_name" className={styles.label}>Name</label>
      <input
        id="last_name"
        maxLength="80"
        name="last_name"
        type="text"
        className={styles.input}
        placeholder="Enter your full name"
        required
      />

      <label htmlFor="email" className={styles.label}>Email address</label>
      <input
        id="email"
        maxLength="80"
        name="email"
        type="email"
        className={styles.input}
        placeholder="Enter your business email address"
        required
      />

      <label htmlFor="company" className={styles.label}>Your company website (URL)</label>
      <input
        id="company"
        maxLength="40"
        name="company"
        type="text"
        className={styles.input}
        placeholder="Your company website"
        required
      />

      <label htmlFor="description" className={styles.label}>
        <strong>What's your biggest visual data challenge today?</strong>
      </label>
      <textarea
        name="description"
        id="description"
        className={styles.textarea}
        placeholder="What would you most like to focus on when we meet up?"
      />

      <input
        type="submit"
        name="submit"
        value="Submit"
        className={styles.submitButton}
      />
    </form>
  );
}
