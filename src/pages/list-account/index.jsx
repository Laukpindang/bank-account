import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const ListAccount = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.sampleapis.com/fakebank/accounts").then((res) =>{

        })
    }, [])

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return(
        <>
        <h1>Bank Account</h1>
        <br />
        
        <Table dataSource={data} columns={columns} />;
        </>
    );
};

export default ListAccount;