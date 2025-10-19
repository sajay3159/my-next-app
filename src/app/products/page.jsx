import Link from "next/link";

export const revalidate = 60;

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
