import { Metadata } from 'next'
import { allPages, Page } from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'
import CategoryHeader from '../../components/CategoryHeader'

// Get page data
const contact = allPages.find((contact: Page) => contact?.slug === 'contact') as Page

export function generateMetadata(): Metadata {
  return {
    title: contact?.title || 'contact',
    description: contact?.description || 'Welcome to the contact page',
    openGraph: {
      url: `${SITE_URL}/contact/`,
      title: `${contact?.title}`,
      description: `${contact?.description}`,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/berkayopak-tr-homepage.png`,
          width: 1600,
          height: 800,
          alt: 'banner',
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function Contact() {
  return (
    <Layout>
      <section className="flex flex-col gap-12 my-24 mx-auto max-w-5xl text-center">
        <CategoryHeader
          title={contact?.title}
          templateKey="contact"
        />
        <div className="flex flex-col gap-8 px-4">
          <ReactMarkdown remarkPlugins={[gfm]} children={contact?.description} />
        </div>
        <div className="flex flex-wrap justify-center gap-2"></div>
      </section>
    </Layout>
  )
}
