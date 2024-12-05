import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const ModalShoes = (props) => {
  // const [openModal, setOpenModal] = useState(false);

  const { openModal, closeModal, selectedShoes } = props;

  return (
    <div className="container">
      <>
        <Modal
          className="inline-block"
          show={openModal}
          onClose={() => closeModal}
        >
          <Modal.Body>
            <div className="space-y-6 flex">
              <div>
                <img src={selectedShoes.image} alt="" />
                <h1 className="text-center text-xl pb-4 font-bold">
                  {selectedShoes.name}
                </h1>
              </div>
              <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Tên sản phẩm
                    </th>
                    <td className="px-6 py-4">{selectedShoes.name}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Giá:
                    </th>
                    <td className="px-6 py-4">{selectedShoes.price}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Số lượng
                    </th>
                    <td className="px-6 py-4">{selectedShoes.quantity}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Mô tả:
                    </th>
                    <td className="px-6 py-4">{selectedShoes.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex items-start m-4">
            <Button
              className="bg-blue-400 text-white p-2"
              onClick={() => closeModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ModalShoes;
