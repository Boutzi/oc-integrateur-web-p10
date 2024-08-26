
import DocumentTitle from "../../components/DocumentTitle"
import Hero from "../../components/Hero/Hero"
import Features from "../../components/Features/Features"

export default function Home() {
const title = "";

  return (
    <>
      <DocumentTitle title={title}/>
      <main className="main">
      <Hero />
      <Features />
      </main>
    </>
  )
}
