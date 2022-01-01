import React, { useEffect, useState } from "react";

import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import OrderReview from "../OrderReview/OrderReview";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
const MyOrders = () => {
  const { user } = useAuth();
  const { client } = useAxios();
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const email = user.email;
  useEffect(() => {
    client
      .get(`/order?email=${email}`)
      .then((response) => {
        setOrders(response.data);
        setOrderStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, orderStatus]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "are you sure, you want to cancel your order?"
    );
    if (proceed) {
      client.delete(`order/${id}`).then((response) => {
        if (response.data.deletedCount > 0) {
          enqueueSnackbar("order cancelled successfully");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
    }
  };
  return (
    <div className="overflow-hidden">
      <h1 className="text-white text-left">User Order Info</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-white">
                <thead className="bg-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Order_Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Address/Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Order_ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Total_Price
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Payment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-300 divide-y divide-white">
                  {orders.map((person) => (
                    <tr key={person?._id}>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-left text-sm font-medium text-white">
                              {person?.name}
                            </div>
                            <div className="text-left text-sm text-white">
                              {person?.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className=" text-left text-sm text-white">
                          {person?.date}
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-left text-sm font-medium text-white">
                              +{person?.phone}
                            </div>
                            <div className="text-left text-sm text-white">
                              {person?.address}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-left text-sm font-medium text-white">
                              {person?._id.slice(0, 10)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-left text-sm font-medium text-white">
                              ${person?.grandTotal}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 text-left py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-white">
                          {person?.status}
                        </span>
                      </td>
                      <td className="px-5 text-left py-4 whitespace-nowrap">
                        <span>
                          {person.payment ? (
                            <h1 className="text-white"> Paid</h1>
                          ) : (
                            <Link to={`/dashboard/payment/${person._id}`}>
                              <button className="bg-purple-800 text-white px-2 rounded-md py-1 shadow-lg">
                                pay
                              </button>
                            </Link>
                          )}
                        </span>
                      </td>
                      <td className="px-5 text-left py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-white">
                          <IconButton
                            onClick={() => handleDeleteOrder(person._id)}
                            sx={{ p: 0 }}
                          >
                            <DeleteIcon sx={{ color: "red" }} />
                          </IconButton>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white mt-9 text-left">Order History</h1>
      {/* order reviews */}

      {orders.map((order) => (
        <>
          <h1 className="text-white mt-9 text-left">Date : {order.date}</h1>
          <OrderReview
            key={orders.date}
            order={order}
            setOrders={setOrders}
            orders={orders}
            setOrderStatus={setOrderStatus}
          />
        </>
      ))}
    </div>
  );
};

export default MyOrders;
