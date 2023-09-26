import { useContract, useContractRead } from "@thirdweb-dev/react";
import Contactcard from "./contact-card";

const ContactList = () => {
  const { contract } = useContract(
    "0x3d5B00b0D4d7Bf453Db97EcAEBa0785aBeC93139"
  );
  const { data: contacts, isLoading } = useContractRead(
    contract,
    "getContacts"
  );

  return (
    <div>
      {!isLoading ? (
        contacts?.length > 0 ? (
          contacts.map((contact: any, index: number) => (
            <Contactcard
              key={index}
              index={index}
              name={contact.name}
              wallet={contact.wallet}
            />
          ))
        ) : (
          <p>No Contacts Found.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactList;
