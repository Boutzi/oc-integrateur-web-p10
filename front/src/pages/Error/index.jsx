import DocumentTitle from "../../components/DocumentTitle"

export default function Error() {

  const title = "404"
    return (
      <>
        <DocumentTitle title={title}/>
        <div>
        <h1>{title} - Page not found</h1>
        <h2>The page you are looking for cannot be found</h2>
        </div>
      </>
    )
  }
  