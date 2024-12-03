import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../widgets/Productitem";
import Title from "../widgets/Title";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";

const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);

  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(
    location.state?.category ? [location.state.category] : [] // Initialize category from state
  );
  const [sortType, setSortType] = useState("relevant");

  // Categories to display
  const categoriesList = [
    "Electronics",
    "Fashion",
    "Games",
    "Home Accessories",
  ];

  const toggleCategory = (cat) => {
    setCategory((prev) =>
      prev.includes(cat) ? prev.filter((item) => item !== cat) : [...prev, cat]
    );
  };

  const applyFilter = () => {
    let productscopy = [...products];

    if (search) {
      productscopy = productscopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productscopy);
    setIsFilterOpen(false); // Close modal
  };

  const sortProduct = () => {
    const sorted = [...filterProducts];

    switch (sortType) {
      case "low-high":
        setFilterProducts(sorted.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(sorted.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter(); // Reset to relevance
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  return (
    <div className="py-10 border-t">
      {/* Header with Filters and Sorting */}
      <div className="flex items-center justify-between mb-6">
        <Title text="All Products" />
        <div className="flex gap-4 items-center">
          {/* Sorting Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Sort:{" "}
                {sortType === "relevant"
                  ? "Popularity"
                  : sortType === "low-high"
                  ? "Low to High"
                  : "High to Low"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2">
              <Command>
                <CommandList>
                  <CommandItem onSelect={() => setSortType("relevant")}>
                    Popularity
                  </CommandItem>
                  <CommandItem onSelect={() => setSortType("low-high")}>
                    Low to High
                  </CommandItem>
                  <CommandItem onSelect={() => setSortType("high-low")}>
                    High to Low
                  </CommandItem>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Filter Button */}
          <Button
            onClick={() => setIsFilterOpen(true)}
            size="sm"
            className="bg-blue-500 text-white"
          >
            Filters
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProducts.length > 0 ? (
          filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
              discountPercentage={item.discountPercentage}
              discountPrice={item.discountPrice}
              rating={item.rating}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            <p>No products found.</p>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Options</DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 mt-4">
            {categoriesList.map((cat) => (
              <Badge
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`cursor-pointer ${
                  category.includes(cat) ? "bg-blue-500 text-white" : ""
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={applyFilter} className="bg-blue-500 text-white">
              Apply Filters
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Collection;
