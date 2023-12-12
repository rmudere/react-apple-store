import {Form, useLoaderData} from "react-router-dom";
import {getProduct} from "../productsService";

export async function loader({params}){
    const product = await getProduct(Number.parseInt(params.productId));
    console.log(`The product is ${JSON.stringify(product)} For id `)

    return {product}
}
export default function Product() {
    const { product } = useLoaderData();

    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
    };

    return (
        <div id="contact">
            <div>
                <img
                    key={product.image}
                    src={product.image || null}
                />
            </div>

            <div>
                <h1>
                    {product.name  ? (
                        <>
                            {product.name}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Favorite contact={contact} />
                </h1>
                <h2>
                    {product.price ? (
                        <>
                            {product.price}
                        </>
                    ) : (
                        <i>" "</i>
                    )}
                </h2>
                {product.description && (
                    <p>
                        {product.description}

                    </p>
                )}


                <div>

                </div>
            </div>
        </div>
    );
}

function Favorite({ contact }) {
    // yes, this is a `let` for later
    let favorite = contact.favorite;
    return (
        <Form method="post">
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
        </Form>
    );
}
