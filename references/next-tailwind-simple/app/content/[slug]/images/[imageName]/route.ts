import { getProjects } from "app/blog/utils"
import fs from "fs"
import path from "path"

export async function generateStaticParams() {
  const projects = getProjects()
  const images = projects
    .filter(p => p.metadata.image)
    .map(p => ({
      slug: p.slug,
      imageName: p.metadata.image,
    }))
  const lightImages = projects
    .filter(p => p.metadata.image)
    .map(p => ({
      slug: p.slug,
      imageName: p.metadata.image,
    }))
  // const imagesMap = projects
  //   .map(
  //     p =>
  //       p.metadata.images?.map(i => ({
  //         slug: p.slug,
  //         imageName: i,
  //       })) ?? []
  //   )
  //   .flat()
  return [...images, ...lightImages]
}

export async function GET(
  _request: Request,
  opts: { params: Promise<{ slug: string; imageName: string }> }
) {
  const params = await opts.params;
  const _path = path.join("content", "projects", params.slug, params.imageName)
  const s = fs.createReadStream(_path)
  return new Response(s as any)
}
