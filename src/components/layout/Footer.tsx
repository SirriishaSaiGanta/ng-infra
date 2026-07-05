const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} NG Infra Developers. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
