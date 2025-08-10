import React, { useEffect, useState } from "react";
import { Loader, Trash2 } from "lucide-react";
import { getProducts, deleteProductById } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 5;
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getProducts(page, limit);
      setProducts(response.products);
      setTotal(response.total);
    } catch (err) {
      console.error("Failed to fetch products", err);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProductById(id);
        toast.success("Product deleted successfully");
        fetchData(); // Refresh list
      } catch (err) {
        console.error("Delete failed", err);
        toast.error("Failed to delete product");
      }
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-6 py-15">
        <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader className="animate-spin h-6 w-6 text-gray-600" />
        </div>
      ) : products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded shadow border border-gray-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Images</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4">{(page - 1) * limit + index + 1}</td>
                    <td className="px-6 py-4 capitalize">{product.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {product.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={`http://localhost:5000${img}`}
                            alt={`product-${index}-img-${idx}`}
                            className="w-16 h-16 object-cover rounded border"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-3 py-1 text-sm font-medium text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
