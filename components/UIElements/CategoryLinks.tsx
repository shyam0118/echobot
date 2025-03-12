import React from "react";

import { Package2Icon } from "lucide-react";

const categories = [
  { icon: Package2Icon, label: "Business" },
  { icon: Package2Icon, label: "Business" },
  { icon: Package2Icon, label: "Business" },
  { icon: Package2Icon, label: "Business" },
  { icon: Package2Icon, label: "Business" },
  { icon: Package2Icon, label: "Business" },
];

const CategoryLinks = () => {
  return (
    <div className="mt-10 sm:mt-20">
      {categories.map((category) => (
        <div
          className="m-1 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-neutral-900 text-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  "
          key={category.label}
        >
          <category.icon size={22} />
          <p className="text-2xl">{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryLinks;
