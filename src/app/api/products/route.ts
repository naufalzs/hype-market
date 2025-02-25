import { Product, ProductImageData, ProductNameData } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const [_productsName, _productImages] = await Promise.all([
      axios.get("https://www.giovankov.com/api/product.json"),
      axios.get("https://www.giovankov.com/api/image.json"),
    ]);

    const productNames: ProductNameData[] = _productsName.data.data;
    const productImages: ProductImageData[] = _productImages.data.data;

    const imageMap = new Map();
    productImages.forEach((imageObj) => {
      imageObj.id.forEach((id) => {
        imageMap.set(id, imageObj.image);
      });
    });

    const parsedData: Product[] = productNames.map((product) => ({
      ...product,
      image: imageMap.get(product.id),
    }));

    return NextResponse.json({ data: parsedData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
