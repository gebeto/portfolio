import fs from 'fs'
import path from 'path'

export type BlogPostMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type ProjectMetadata = {
  title: string
  publishedAt: string
  link: string
  summary: string
  description?: string;
  cardType: 'small' | 'wide'
  image?: string
}

type Metadata = BlogPostMetadata | ProjectMetadata;

function parseFrontmatter<T extends Metadata>(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<T> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim()] = value
  })

  return { metadata: metadata as T, content }
}


function getMDXFiles(dir: string) {
  const projectFolders = fs
    .readdirSync(dir)
    .map(folder => path.join(dir, folder))
    .filter(folderPath => fs.statSync(folderPath).isDirectory())
  const files = projectFolders
    .map(folder => path.join(folder, "index.mdx"))
    .filter(md => fs.statSync(md).isFile())
  return files
}

function readMDXFile<T extends Metadata>(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter<T>(rawContent)
}

function getMDXData<T extends Metadata>(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile<T>(path.join(file))
    let slug = path.basename(path.dirname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}


export function getBlogPosts() {
  return getMDXData<BlogPostMetadata>(path.join(process.cwd(), 'content', 'posts'))
}

export function getProjects() {
  return getMDXData<ProjectMetadata>(path.join(process.cwd(), 'content', 'projects'))
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
