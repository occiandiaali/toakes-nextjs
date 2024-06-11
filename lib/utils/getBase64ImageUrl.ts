export async function getBase64ImageUrl(imageId: string): Promise<string | undefined> {
    const response = await fetch(`https://api.cloudinary.com/v1_1/daaziue36/w_100/e_blur:1000,q_auto,f_webp${imageId}`);
    const buffer = await response.arrayBuffer();
    const data = Buffer.from(buffer).toString('base64');
    return `data:image/webp;base64,${data}`;
}