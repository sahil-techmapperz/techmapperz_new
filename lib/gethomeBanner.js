export default async function gethomeBanner(){
    // fetch data from blog API
    // return the fetched data
    // In Server Components, we need to use the full URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    let url= `${baseUrl}/api/banner`;
    console.log(url);
    let results = await fetch(url,{
        next:{
            revalidate:10
        }
    });

    return results.json();
}