import React from 'react'
// import { ExtensionPoint } from 'vtex.render-runtime'
import { path } from 'ramda'
import {
  useSearchPage,
  useSearchPageState,
} from 'vtex.search-page-context/SearchPageContext'

const SearchContent = ({ Gallery, NotFound }) => {
  const { searchQuery, showFacets } = useSearchPage()
  const { mobileLayout, showContentLoader } = useSearchPageState()
  const products = path(['data', 'productSearch', 'products'], searchQuery)

  /* No need to show the spinner if it is loading because
   the LoadingOverlay already takes care of this */
  if (showContentLoader === undefined || showContentLoader) {
    return null
  }

  if (!products || products.length === 0) {
    // return <ExtensionPoint id="not-found" />
    return <NotFound />
  }

  return (
    <Gallery
      products={products}
      className="bn"
      mobileLayoutMode={mobileLayout}
      showingFacets={showFacets}
    />
    // <ExtensionPoint
    //   id="gallery"
    //   products={products}
    //   className="bn"
    //   mobileLayoutMode={mobileLayout}
    //   showingFacets={showFacets}
    // />
  )
}

export default SearchContent
