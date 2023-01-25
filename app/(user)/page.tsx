import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { previewData } from "next/headers";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";

const query = groq`
*[_type == 'post']{
    ...,
    author ->,
    categories[] ->
} | order(_createdAt desc)
`;

export const revalidate = 30;

export default async function HomePage(){
    if(previewData()){
          
    return(
        
       <PreviewSuspense fallback={(
        <div role="status">
            <p className= "text-center text-lg animate-pulse text-[#F7AB0A]">Loadin preview data...</p>

        </div>
       )} > 
       <PreviewBlogList query={query} />
       </PreviewSuspense> 
    );
    }
    const posts = await client.fetch(query);

   
 return(<BlogList posts={posts} /> )

};