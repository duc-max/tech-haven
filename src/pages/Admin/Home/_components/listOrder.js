import { Table } from "antd";
import clsx from "clsx";
import { useState } from "react";
import style from "../home.module.scss";
import { createStyles } from "antd-style";
const useStyle = createStyles(({ css, token }) => {
  return {
    customTable: css`
      .ant-table {
        .ant-table-container {
          .ant-table-body,
          .ant-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
      .ant-pagination .ant-pagination-item-active {
        border-color: transparent;
        color: rgb(255, 255, 255);
        background-color: rgb(96, 91, 255);
        border-radius: 50%;
      }
    `,
  };
});

const data = [
  {
    no: "#1001",
    name: "DSLR Camera",
    price: "$1,500",
    stock: 120,
    img: "../assets/images/ip01.jpg",
    total: 100,
    pending: 12,
    canceled: 2,
    delivered: 85,
    balance: "$150,000",
  },
  {
    no: "#1002",
    name: "Laptop",
    price: "$2,500",
    stock: 200,
    img: "../assets/images/ip01.jpg",
    total: 150,
    pending: 20,
    canceled: 5,
    delivered: 125,
    balance: "$250,000",
  },
  {
    no: "#1003",
    name: "Smartphone",
    price: "$1,000",
    stock: 300,
    img: "../assets/images/ip01.jpg",
    total: 250,
    pending: 30,
    canceled: 10,
    delivered: 210,
    balance: "$100,000",
  },
  {
    no: "#1004",
    name: "Tablet",
    price: "$800",
    stock: 150,
    img: "../assets/images/ip01.jpg",
    total: 120,
    pending: 10,
    canceled: 3,
    delivered: 107,
    balance: "$96,000",
  },
];

const columns = [
  {
    title: "Tracking no",
    dataIndex: "no",
    key: "no",
    sorter: (a, b) => a.no.localeCompare(b.no),
    width: 150,
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name, record) => {
      return (
        <div className={clsx(style.productName)}>
          <img src={record.img} alt="img" />
          <span>{name}</span>
        </div>
      );
    },
    width: 200,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price.localeCompare(b.price),
    width: 150,
  },
  {
    title: "In Stock",
    dataIndex: "stock",
    key: "price",
    sorter: (a, b) => a.stock - b.stock,
    width: 150,
  },
  {
    title: "Total Order",
    dataIndex: "total",
    key: "total",
    sorter: (a, b) => a.total - b.total,
    width: 150,
  },
  {
    title: "Pending",
    dataIndex: "pending",
    key: "pending",
    sorter: (a, b) => a.pending - b.pending,
    width: 150,
  },
  {
    title: "Canceled",
    dataIndex: "canceled",
    key: "canceled",
    sorter: (a, b) => a.canceled - b.canceled,
    width: 150,
  },
  {
    title: "Delivered",
    dataIndex: "delivered",
    key: "delivered",
    sorter: (a, b) => a.delivered - b.delivered,
    width: 150,
  },
];

function ListOrder() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { styles } = useStyle();

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={clsx(style.listWrap)}>
      <div className={clsx(style.listBlock)}>
        <h3>Recent Orders</h3>
      </div>

      <div className={clsx(style.tableCustom)}>
        <Table
          className={styles.customTable}
          rowSelection={rowSelection}
          dataSource={data}
          columns={columns}
          rowKey="no"
          scroll={{
            x: "max-content",
          }}
        />
      </div>
    </div>
  );
}

export default ListOrder;
