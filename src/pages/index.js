import React, { useState, useEffect } from "react"
import data from "../data/data.json"

import Layout from "../components/layout"
import SearchInput from "../components/search-input"
import SearchResults from "../components/search-results"
import CopyEmoji from "../components/copy-emoji"
import SEO from "../components/seo"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [copiedValue, setCopiedValue] = useState("")
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    focusSearchInput()

    if (
      searchTerm === "all" ||
      searchTerm === "emojis" ||
      searchTerm === "emoji"
    ) {
      setSearchResults(data)
    } else {
      const newResults = data.filter(o =>
        Object.values(o).some(i => {
          if (Array.isArray(i)) {
            return i.includes(searchTerm.toLowerCase())
          }
          return i
            .toLowerCase()
            .split(" ")
            .includes(searchTerm.toLowerCase())
        })
      )
      setSearchResults(newResults)
    }
  }, [searchTerm])

  const focusSearchInput = () => {
    const searchInput = document.getElementById("searchInput")
    searchInput.focus()
    document.onkeydown = (e = window.event) => {
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        e.shiftKey ||
        e.keyCode === 8 ||
        e.keyCode === 37 ||
        e.keyCode === 38 ||
        e.keyCode === 39 ||
        e.keyCode === 40 ||
        e.keyCode === 27 ||
        e.keyCode === 20
      ) {
        searchInput.value += ""
        searchInput.focus()
      }
    }

    document.onkeypress = () => {
      searchInput.focus()
    }
  }

  const handleTermChange = e => setSearchTerm(e.target.value)

  const handleCopyToClipboard = value => {
    navigator.clipboard.writeText(value)
    setCopiedValue(value)
    setCopySuccess(true)
    setTimeout(() => {
      setCopySuccess(false)
    }, 1000)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <>
        <SearchInput searchTerm={searchTerm} onTermChange={handleTermChange} />
        <SearchResults
          searchTerm={searchTerm}
          searchResults={searchResults}
          onCopyToClipboard={handleCopyToClipboard}
        />
        <CopyEmoji copySuccess={copySuccess} copiedValue={copiedValue} />
      </>
    </Layout>
  )
}

export default IndexPage
