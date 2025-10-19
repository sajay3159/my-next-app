export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const revalidate = 60;

export default async function ProductDetailPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} width={200} />
    </div>
  );
}
