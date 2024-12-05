import { Button } from "flowbite-react";
import React from "react";

const ProductCard = (props) => {
  const { detail, setOpenModal, setSelectedShoes } = props;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={detail.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {detail.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {detail.price}
        </p>
        <Button
          className="bg-blue-500 p-1"
          onClick={() => {
            setOpenModal(true);
            setSelectedShoes(detail);
          }}
        >
          Xem chi tiết sản phẩm
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
