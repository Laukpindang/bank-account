import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const ListAccount = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.sampleapis.com/fakebank/accounts").then((res) =>{
            setData(res.data)
        })
    }, [])

      const columns = [
        {
          title: 'Transaction Date',
          dataIndex: 'transactionDate',
          key: 'transactionDate',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Debit',
          dataIndex: 'debit',
          key: 'debit',
        },
        {
            title: 'Credit',
            dataIndex: 'credit',
            key: 'credit',
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