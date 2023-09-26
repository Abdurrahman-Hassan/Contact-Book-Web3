import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

type Props = {
  index: number;
  name: string;
  wallet: string;
};

export default function Contactcard({ index, name, wallet }: Props) {
  return (
    <div className={styles.contactCardContainer}>
      <div className={styles.contactCardInfo}>
        <h2>{name}</h2>
        <p>Wallet Address:</p>
        <p>{wallet}</p>
      </div>
      <Web3Button
        className={styles.removeContactButton}
        contractAddress="0x3d5B00b0D4d7Bf453Db97EcAEBa0785aBeC93139"
        action={(contract) => {
          contract.call("removeContact", [index]);
        }}
      >
        x
      </Web3Button>
    </div>
  );
}
