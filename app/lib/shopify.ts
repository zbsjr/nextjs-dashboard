export async function fetchProducts() {
    const storeUrl = process.env.SHOPIFY_STORE_URL;
    const token = process.env.SHOPIFY_ADMIN_TOKEN;
    if (!storeUrl || !token) {
        throw new Error('Missing SHOPIFY_STORE_URL or SHOPIFY_ADMIN_TOKEN');
    }

    const res = await fetch(`https://${storeUrl}/admin/api/2024-01/products.json`, {
        headers: {
            'X-Shopify-Access-Token': token,
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    return res.json();
}

export async function fetchProductsGraphQl() {
    const storeUrl = process.env.SHOPIFY_STORE_URL;
    const token = process.env.SHOPIFY_ADMIN_TOKEN;
    if (!storeUrl || !token) {
        throw new Error('Missing SHOPIFY_STORE_URL or SHOPIFY_ADMIN_TOKEN');
    }

    const res = await fetch(`https://${storeUrl}/admin/api/2026-04/graphql.json`, {
        headers: {
            'X-Shopify-Access-Token': token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            query: `{
                products(first: 3) {
                    edges {
                        node {
                            id
                            title
                        }
                    }
                }
            }`,
        }),
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    return res.json();
}