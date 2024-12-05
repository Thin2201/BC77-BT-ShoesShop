import React from "react";

const Detail = (props) => {
  const { detailProduct } = props;
  return (
    <div className="flex border-2 shadow-lg shadow-slate-500 rounded-xl">
      <div className="image w-1/3  ">
        <img src={detailProduct.image} alt="" />
      </div>
      <div className="content w-2/3 my-5 ">
        <h3 className="text-2xl text-green-500">Thông tin sản phẩm</h3>
        <div className="relative overflow-x-auto ">
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tên sản phẩm
                </th>
                <td className="px-6 py-4">{detailProduct.name}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Giá:
                </th>
                <td className="px-6 py-4">{detailProduct.price}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Số lượng
                </th>
                <td className="px-6 py-4">{detailProduct.quantity}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Mô tả:
                </th>
                <td className="px-6 py-4">{detailProduct.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Detail;
