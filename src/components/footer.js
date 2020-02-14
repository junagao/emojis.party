import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Footer = ({ siteAuthor, siteGithub }) => (
  <footer className="footer">
    <div className="made-with-love">
      made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      by <a href="http://junagao.com">{siteAuthor}</a>
    </div>
    <nav className="footer-nav">
      <Link href="/about">about</Link>
      <span className="divider">|</span>
      <a href={siteGithub}>github</a>
    </nav>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
  siteGithub: PropTypes.string.isRequired,
}

export default Footer
