import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const AddContacts = () => {
  const router = useRouter();
  const [addContact, setAddContact] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function resetForm() {
    setName("");
    setAddress("");
  }

  return (
    <div>
      {!addContact ? (
        <button
          className={styles.addContactTriggerButton}
          onClick={() => {
            setAddContact(true);
          }}
        >
          Add Contact
        </button>
      ) : (
        <div className={styles.addContactContainer}>
          <div className={styles.addContactCard}>
            <button onClick={() => setAddContact(false)} className={styles.closebtn}>Close</button>
            <div className={styles.addContactForm}>
              <h3>Add Contacts:</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="address"
                placeholder="0x0000.."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Web3Button
              contractAddress="0x3d5B00b0D4d7Bf453Db97EcAEBa0785aBeC93139"
              action={(contract) => {
                contract.call("addContact", [name, address]);
              }}
              onSuccess={async () => {
                resetForm();
                setAddContact(false);
              }}
            >
              Add Contact
            </Web3Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContacts;
