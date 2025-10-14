// import { useRouter } from 'next/router'

export async function loader(){
    const strapiDataJson = await fetch("http://localhost:1337/api/pages?populate=*")
    const strapiData = await strapiDataJson.json()
    return strapiData.data.map( page => {
        return {slug:page.slug, title:page.title}
    })
}
// http://localhost:3000/authorPage/home
 
export default async function AuthorPageSlug(params) {
//   const router = useRouter()
//   const pageSlug = router.query 
//   return <p>Post: {router.query.slug}</p>
    const pages = await getPages()
    const slug = params?.slug

    const matched = pages.filter(p => p.slug === slug)
return(
    <div>
        {
            pages.map(p => <div key={p.slug}>{p.title}: {p.slug}</div>)
            // loaderData?.map( page => {
            //     return(<div>{page.title}: {page.slug}</div>)
            // })
        }
    </div>
)
}