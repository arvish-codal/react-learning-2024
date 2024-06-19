// Destructuring the props as params. The params object contains the route parameters as key value pairs.

export default function ProductDetails( { params }: {
    params: { productId: string}
}) {
    return <h1>Details about product - {params.productId}</h1>
}