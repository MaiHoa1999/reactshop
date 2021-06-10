import { NavLink } from "react-router-dom";
import { useTranslate } from "../../core/Translate";

export function Header(){
  let {t, selectLang, lang} = useTranslate()
  function changeLang(lan){

    selectLang(lan)
  }
    return(
        <>
        <div className="modal fade" id="modalNewsletterHorizontal" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            {/* Close */}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Content */}
            <div className="row no-gutters">
              <div className="col-12 col-lg-5">
                {/* Image */}
                <img className="img-fluid" src="/img/covers/cover-25.jpg" alt="..." />
              </div>
              <div className="col-12 col-lg-7 d-flex flex-column px-md-8">
                {/* Body */}
                <div className="modal-body my-auto py-10">
                  {/* Heading */}
                  <h4>Subscribe to Newsletter and get 15% Discount</h4>
                  {/* Text */}
                  <p className="mb-7 font-size-lg">
                    On your next purchase
                  </p>
                  {/* Form */}
                  <form>
                    <div className="form-row">
                      <div className="col">
                        {/* Input */}
                        <label className="sr-only" htmlFor="modalNewsletterHorizontalEmail">Enter Email *</label>
                        <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />
                      </div>
                      <div className="col-auto">
                        {/* Button */}
                        <button className="btn btn-sm btn-dark" type="submit">
                          <i className="fe fe-send" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Footer */}
                <div className="modal-footer pt-0">
                  {/* Checkbox */}
                  <div className="custom-control custom-checkbox">
                    {/* Input */}
                    <input className="custom-control-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />
                    {/* Label */}
                    <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterHorizontalCheckbox">
                      Prevent this Pop-up
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter: Vertical */}

      <div className="modal fade" id="modalNewsletterVertical" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Close */}
            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Body */}
            <div className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white" style={{backgroundImage: 'url(/img/covers/cover-26.jpg)'}}>
              {/* Heading */}
              <h4>{t('Subscribe to Newsletter and get 15% Discount')}</h4>
              {/* Text */}
              <p className="mb-0 font-size-lg">
                On your next purchase
              </p>
            </div>
            {/* Body */}
            <div className="modal-body py-9">
              {/* Form */}
              <form>
                <div className="form-row">
                  <div className="col">
                    {/* Input */}
                    <label className="sr-only" htmlFor="modalNewsletterVerticalEmail">Enter Email *</label>
                    <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />
                  </div>
                  <div className="col-auto">
                    {/* Button */}
                    <button className="btn btn-sm btn-dark" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Footer */}
            <div className="modal-footer justify-content-center pt-0">
              {/* Checkbox */}
              <div className="custom-control custom-checkbox">
                {/* Input */}
                <input className="custom-control-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />
                {/* Label */}
                <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterVerticalCheckbox">
                  Prevent this Pop-up
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="modal fixed-right fade" id="modalSidebar" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-vertical" role="document">
          <div className="modal-content">
            {/* Close */}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Body */}
            <div className="modal-body px-10 my-auto">
              {/* Nav */}
              <ul className="nav nav-vertical nav-unstyled font-size-h2" id="sidebarNav">
                <li className="nav-item">
                  {/* Toggle */}
                  <NavLink className="nav-link dropdown-toggle" data-toggle="collapse" to="/">
                    Home
                  </NavLink>
                  {/* Collapse */}
                 
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <NavLink className="nav-link dropdown-toggle" data-toggle="collapse" to="/auth">
                    Auth
                  </NavLink>
                  {/* Collapse */}
                  
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <NavLink className="nav-link dropdown-toggle" data-toggle="collapse" to="/shop">
                    Shop
                  </NavLink>
                  {/* Collapse */}
                 
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarPages">
                    s
                  </a>
                  {/* Collapse */}
                  
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarBlog">
                    Blog
                  </a>
                  {/* Collapse */}
                  
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./docs/getting-started.html">Docs</a>
                </li>
              </ul>
            </div>
            {/* Body */}
            <div className="moda-body px-10 py-9">
              {/* Social links */}
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="text-gray-350" href="#!">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-gray-350" href="#!">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-gray-350" href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-gray-350" href="#!">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-gray-350" href="#!">
                    <i className="fab fa-medium-m" />
                  </a>
                </li>
              </ul>
              {/* Footer */}
              <div className="font-size-xxs text-gray-350">
                © 2019 All rights reserved. Designed by Unvab.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Size Chart */}
     
      {/* Wait List */}
     


      {/* NAVBAR */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
          </div>
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                  <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">USD</a>
                  <a className="dropdown-item" href="#!">EUR</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                {
                  lang === 'en'? 'English' :
                  lang === 'china'? 'china' :  'tieng viet'
                }
             </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#" onClick={e => changeLang('en')}>English</a>
                  <a className="dropdown-item" href="#" onClick={e => changeLang('vn')}>Tieng viet</a>
                  <a className="dropdown-item" href="#" onClick={e => changeLang('china')}>china</a>
                
                </div>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <a className="nav-link" href="./shipping-and-returns.html">{t('Shipping')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq.html">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact-us.html">Contact</a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="./overview.html">
            Shopper.
          </a>
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink exact className="nav-link" to="/">Home</NavLink>
                {/* Menu */}
               
              </li>
              <li className="nav-item dropdown position-static">
                {/* Toggle */}
                <NavLink className="nav-link" to="/auth">Auth</NavLink>
                {/* Menu */}
               
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                {/* Menu */}
               
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" to="/faq">Faq</NavLink>
                {/* Menu */}
                
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                {/* Menu */}
               
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <NavLink className="nav-link"  to="#modalSearch">
                  <i className="fe fe-search" />
                </NavLink>
              </li>
              <li className="nav-item ml-lg-n4">
                <NavLink className="nav-link" to="/account/personalinfo">
                  <i className="fe fe-user" />
                </NavLink>
              </li>
              <li className="nav-item ml-lg-n4">
                <NavLink className="nav-link" to="/account/wishlist">
                  <i className="fe fe-heart" />
                </NavLink>
              </li>
              <li className="nav-item ml-lg-n4">
                <NavLink className="nav-link"  to="#modalShoppingCart">
                  <span data-cart-items={2}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
}