import { getServerSideSitemap } from 'next-sitemap';
import load from '../../api/load';
const URL = "https://www.farawlatech.com";

const Sitemap = () => { reutrn (null) }

async function getBlogs() {
    // Fetch data from external API
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const repo = await res.json()
    // Pass data to the page via props
    const data = await load()
    const info = data.map((_, i)=>{
        return {
          slug: _.get("slug"),
        }
      }) 
    return info
}

export async function GET(request) {
    const posts = []
    const routes = []
    for(let i=0; i<2; i++){
        let locale = i==0? 'en': 'ar'
        await getBlogs().then(data=>{
          data.forEach(_=>
            posts.push({
              url: `${URL}/${locale}/blogs/${encodeURI(_.slug)}`,
              lastModified: new Date().toISOString(),
              priority: .6,
            })
          )
          
        }).catch(e=>{
          posts.push({url: e.message})
        })
        const siteStaticRoutes = ["", "about", "contact", "news", "blogs"]
    siteStaticRoutes.forEach(element => {
          if(element === ""){
            routes.push({
              url: `${URL}/${locale}`,
              lastModified: new Date().toISOString(),
              priority: 1
            })
          }else{
            routes.push({
              url: `${URL}/${locale}/${element}`,
              lastModified: new Date().toISOString(),
              priority: .8
            })
          }
    });
        // .forEach((route) => {
        // });
    }
    console.log('routes', routes)
    console.log('posts', posts)
//   return [...routes, ...posts];

  return getServerSideSitemap([...routes, ...posts])
}

export default Sitemap