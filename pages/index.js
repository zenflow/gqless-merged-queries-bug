import dynamic from 'next/dynamic'
import { useState, Suspense } from 'react'
import { graphql } from '@gqless/react'
import { query, setOnRequestInfo } from '../gqless'

const NoSsr = dynamic(() => Promise.resolve(props => (<>{props.children}</>)), {ssr: false})

const IndexPage = () => {
  const [numberOfPages, setNumberOfPages] = useState(1)
  return (
    <main>
      <div>
        <strong>Number of pages: </strong>
        <input
          type="number"
          value={numberOfPages}
          onChange={e => setNumberOfPages(e.target.value)}
        />
        <NoSsr>
          {Array.from({length: numberOfPages}).map((_, index) => (
            <Suspense key={index} fallback={<div>Loading page {index + 1}...</div>}>
              <PageOfPosts pageIndex={index}/>
            </Suspense>
          ))}
        </NoSsr>
      </div>
      <div>
        <LastGraphqlRequest/>
      </div>
      <style jsx>{`
        main { display: flex; }
        div { flex: 1; }
      `}</style>
    </main>
  )
}

const pageSize = 5;
const PageOfPosts = graphql(({pageIndex}) => {
  const posts = query.allPosts({skip: pageIndex * pageSize, first: pageSize})
  return (
    <>
      <h5>Page {pageIndex + 1}</h5>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  )
})

const LastGraphqlRequest = () => {
  // not bothering to use useRef & useEffect here like I should in a real app
  const [info, setInfo] = useState(null)
  setOnRequestInfo(setInfo)
  return (
    <div>
      <h3>Last graphql request:</h3>
      {info && (<>
        <h4>Query</h4>
        <pre>{info.query}</pre>
        <h4>Variables</h4>
        <pre>{JSON.stringify(info.variables)}</pre>
        <h4>Errors</h4>
        <pre>{JSON.stringify(info.errors, null, 2)}</pre>
      </>)}

    </div>
  )
}

export default IndexPage
