import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import AddContacts from "../components/add-contacts";
import ContactList from "../components/contact-list";

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <div className={styles.addressHeader}>
          <h1>Contact Book</h1>
          <ConnectWallet />
        </div>
        {address && (
          <div className={styles.addressListContainer}>
            <div className={styles.addressListHeader}>
              <h3>Contacts:</h3>
              <AddContacts />
            </div>
            <ContactList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
