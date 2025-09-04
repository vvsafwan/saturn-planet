import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import { Loader } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import sectionbg from "../assets/blueCommon.jpg";

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [categoryList] = useState(["laboratory", "school", "office", "interior"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const fetchProducts = async (category = "", currentPage = 1) => {
    setLoading(true);
    try {
      const response = await getProductsByCategory(category, currentPage);
      console.log(response);
      setProducts(response.products);
      setPages(response.pages);
    } catch (err) {
      console.error("Failed to load products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  useEffect(() => {
    setSelectedCategory(category || "laboratory");
  }, [category]);

  useEffect(() => {
    fetchProducts(selectedCategory, page);
  }, [selectedCategory, page]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPage(1); // reset page when category changes
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-[600px]" style={{ backgroundImage: `url(${sectionbg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay with 60% opacity */}

        {/* Your content can go here */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white forum-font">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Products</h1>
          <p className="text-lsm sm:text-md md:text-lg font-light">
            Explore our wide range of high-quality furniture designed for modern
            laboratories, efficient office spaces, engaging school environments, and elegant interiors.
            We take pride in offering tailored solutions that blend functionality with design.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto p-6 gap-6 bg-gray-50 py-20 raleway-font">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-4 rounded shadow h-fit">
          <div className="text-gray-500 text-sm md:text-md lg:text-lg font-light tracking-widest uppercase px-4 py-5">
            Categories
          </div>
          <ul className="space-y-2">
            {categoryList.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`block w-full text-left px-4 py-2 rounded capitalize ${selectedCategory === cat ? "bg-[#025876] text-white font-semibold" : "hover:bg-[#0b9ba6] hover:text-white"
                    }`}
                >
                  {cat} furniture
                </button>
              </li>
            ))}
          </ul>

          <hr className="mt-5 border-gray-300" />

          <div className="text-gray-500 text-sm md:text-md lg:text-lg font-light tracking-widest uppercase px-4 py-5">
            Contact Us
          </div>

          <div className="space-y-4 text-sm text-gray-700 px-4 pb-2">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 text-[#0b9ba6]" size={18} />
              <p>
                Saturnplanet furniture llc.sp,<br />
                Al nabbah street, sharjah, uae
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-[#0b9ba6]" size={18} />
              <a href="mailto:info@bokalabsystem.com" className="hover:underline">
                info@bokalabsystem.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="text-[#0b9ba6]" size={18} />
              {/* <a href="tel:+8615899568868" className="hover:underline"> */}
              +971 56 779 6927
              {/* </a> */}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full md:w-3/4">
          <div className="text-gray-500 text-sm md:text-md lg:text-lg font-light tracking-widest uppercase py-5">
            {`${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Furniture`}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Loader className="animate-spin h-6 w-6 text-gray-600" />
            </div>
          ) : products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded">
                {products.map((product) => (
                  <div key={product._id} className="bg-white shadow">
                    <Link to={`/product/${product._id}`}>
                      <img
                        // src={`http://localhost:5000${product.images[0]}`}
                        src={`https://saturnplanetfurniture.com${product.images[0]}`}
                        alt={product.category}
                        className="w-full h-90 object-cover hover:scale-105 transition duration-500 cursor-pointer rounded"
                      />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center space-x-2">
                {Array.from({ length: pages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded ${page === i + 1
                      ? "bg-[#0b9ba6] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}
