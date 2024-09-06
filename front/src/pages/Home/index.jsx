import DocumentTitle from "../../components/DocumentTitle"
import Hero from "../../components/Hero/Hero"
import Features from "../../components/Features/Features"

export default function Home() {
  const title = ""

  return (
    <>
      <DocumentTitle title={title} />
      <main className="main">
        <Hero
          title="Promoted Content"
          subtitle={["No fees", "No minimum deposit.", "High interest rates."]}
          content="Open a savings account with Argent Bank today!"
        />
        <Features />
      </main>
    </>
  )
}
