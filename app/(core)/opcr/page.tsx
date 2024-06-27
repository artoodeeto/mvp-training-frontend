import Link from "next/link";
import React, {useState} from "react";

const OPCRList = () => {
  // const [opcrList, setOPCR] = useState([]);

  return (
    <div>
      <Link href={"/opcr/new"}>Create OPCR</Link>
      <div>
        <ul>
          {/* {opcrList.map(() => (
            <li></li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default OPCRList;
