import Link from "next/link";

// Sample product data
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Keyboard" },
  { id: 5, name: "Mouse" },
  { id: 6, name: "Monitor" },
  { id: 7, name: "Printer" },
  { id: 8, name: "Camera" },
  { id: 9, name: "Tablet" },
  { id: 10, name: "Smartwatch" },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
