import { IconButton } from "@mui/material";
import React from "react";
import useProducts from "../../../hooks/useProducts";
import DeleteIcon from "@mui/icons-material/Delete";
import useAxios from "../../../hooks/useAxios";
import { useSnackbar } from "notistack";
const OrderReview = ({ order, orders, setOrders }) => {
  const { client } = useAxios();
  const [products] = useProducts();
  const { orderItems } = order;

  const { enqueueSnackbar } = useSnackbar();
  let prod = [];
  let orderPd = [];
  if (orderItems) {
    // console.log(order);
    for (const element of orderItems) {
      prod = products.filter((pd) => pd._id === element.item_id);
      prod = prod.map((obj) => ({ ...obj, quantity: element.quantity }));

      orderPd.push(...prod);
      // console.log(orderPd);
    }
    //console.log(orderPd);
  }
  const handleDeleteOrder = (orderId, productId) => {
    const proceed = window.confirm(
      "are you sure, you want to cancel your order?"
    );
    if (proceed) {
      client
        .put(`/singleOrder?orderId=${orderId}&productId=${productId}`)
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            enqueueSnackbar("product removed  successfully");
            const remaining = orders.filter((order) => order._id !== orderId);
            setOrders(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="">
      <div className="flex flex-col mt-9">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-white ">
                <thead className="bg-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      ProductID
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
                  {orderPd?.map((person) => (
                    <tr key={person?._id}>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person?.img}
                              alt="broken"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">
                              {person?.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="text-left px-3 text-sm text-white">
                          ${person?.price}
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="px-3 text-left text-sm text-white">
                              quantity : {person?.quantity}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-left text-sm font-medium text-white">
                              {person?._id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 text-left py-4 whitespace-nowrap">
                        <IconButton
                          onClick={() =>
                            handleDeleteOrder(order?._id, person?._id)
                          }
                          sx={{ p: 0 }}
                        >
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
