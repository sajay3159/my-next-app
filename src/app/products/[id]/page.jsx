"use client";

import { useParams } from "next/navigation";

export default function ProductDetailClient() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h2>Product {id} details page — content coming soon!</h2>
    </div>
  );
}
