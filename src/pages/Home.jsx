import React from 'react'

import home from '../assets/img/home.png'
import key from '../assets/img/key.png'
import price from '../assets/img/price.png'
import setting from '../assets/img/setting.png'
import search from '../assets/img/search.png'
import bed from '../assets/img/bed.png'
import bath from '../assets/img/bath.png'
import car from '../assets/img/car.png'
import ruler from '../assets/img/ruler.png'
import icon from '../assets/img/r img1.png'
import icon2 from '../assets/img/r img2.png'
import icon3 from '../assets/img/r img3.png'
import bedroom from '../assets/img/bedroom.png'
import bathroom from '../assets/img/bathroom.png'
import garaj from '../assets/img/garage.png'
import chizgich from '../assets/img/rulerb.png'
import size from '../assets/img/resize 1.png'
import love from '../assets/img/love 1.png'
import bullet from '../assets/img/bullet.png'
import smile from '../assets/img/discord.png'
import house from '../assets/img/house 1.png'
import calc from '../assets/img/calculator.png'
import map from '../assets/img/maps.png'
import dom from '../assets/img/dom.png'
import dom2 from '../assets/img/apartment.png'
import ofis from '../assets/img/business-and-trade.png'
import villa from '../assets/img/villa.png'
import boy from '../assets/img/boy.png'
import location from '../assets/img/pin.png'
import call from '../assets/img/phone.png'
import email from '../assets/img/email 1.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import insta from '../assets/img/insta.png'
import int from '../assets/img/in.png'
import logo from '../assets/img/logo.png'
import up from '../assets/img/up.png'

export default function Home() {
  return (
    <div>





      {/*  */}




      <div className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-up">
              <div className="header-box1">
                <img src={home} alt="" />
                <p className='header-box-text'>Enter an address, neighborhood, city, or ZIP code</p>
              </div>
              <div className="header-box2">
                <img src={key} alt="" />
                <p className='header-box-text'>Status</p>
              </div>
              <div className="header-box3">
                <img src={price} alt="" />
                <p className='header-box-text'>Price</p>
              </div>
              <div className="header-box4">
                <img src={setting} alt="" />
                <p className='header-box-text'>Advanced</p>
              </div>
              <div className="header-box5">
                <img src={search} alt="" />
                <p className='header-box-text'>Search</p>
              </div>
            </div>
            <div className="header-down">
              <h4 className="header-title">Skyper Pool Partment</h4>
              <h3 className="header-text">112 Glenwood Ave Hyde Park, Boston, MA</h3>
              <div className="header-center">
                <div className="header-rooms">
                  <img className='header-img' src={bed} alt="" />
                  <div className="header-tags">4 beds</div>
                </div>
                <div className="header-rooms">
                  <img className='header-img' src={bath} alt="" />
                  <div className="header-tags">5 Baths</div>
                </div>
                <div className="header-rooms">
                  <img className='header-img' src={car} alt="" />
                  <div className="header-tags">1 Garage</div>
                </div>
                <div className="header-rooms">
                  <img className='header-img' src={ruler} alt="" />
                  <div className="header-tags">1200 Sq Ft</div>
                </div>
              </div>
              <div className="header-price">
                1200 Sq Ft
              </div>
              <button className='header-btn'>Read more</button>
            </div>
          </div>
        </div>
      </div>










      {/*  */}








      <div className="recomend">
        <div className="container">
          <div className="recomend-content">
            <h3 className="recomend-title">Recommended</h3>
            <p className='recomend-text'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            <div className='recomend-flex'>
              <div className="recomend-card">
                <div className="rec-cardup">
                  <h1 className='rec-cardup-title1'>FEATURED</h1>
                  <h1 className='rec-cardup-title2'>FOR SALE</h1>
                </div>
                <div className="rec-carddown">
                  <img className='rec-icon' src={icon} alt="" />
                  <div className="rec-carddown-title">New Apartment Nice Wiew</div>
                  <div className="rec-carddown-text">Quincy St, Brooklyn, NY, USA</div>
                  <div className="recomend-rooms">
                    <div className="rec-room">
                      <img src={bedroom} alt="" />
                      <div className="rec-room-title">4 Beds</div>
                    </div>
                    <div className="rec-room">
                      <img src={bathroom} alt="" />
                      <div className="rec-room-title">5 Baths</div>
                    </div>
                    <div className="rec-room">
                      <img src={garaj} alt="" />
                      <div className="rec-room-title">1 Garage</div>
                    </div>
                    <div className="rec-room">
                      <img src={chizgich} alt="" />
                      <div className="rec-room-title">1200 Sq Ft</div>
                    </div>
                  </div>
                  <div className='recomend-line'></div>
                  <div className='rec-price'>
                    <div className='rec-prices'>
                      <div className="rec-price-title1">$2,800/mo</div>
                      <h4 className='rec-price-title2'>$7,500/mo</h4>
                    </div>
                    <img className='rec-size' src={size} alt="" />
                    <img className='rec-love' src={love} alt="" />
                  </div>
                </div>
              </div>
              <div className="recomend-card">
                <div className="rec-cardup2">
                  <h1 className='rec-cardup-title1'>FEATURED</h1>
                  <h1 className='rec-cardup-title2'>FOR SALE</h1>
                </div>
                <div className="rec-carddown">
                  <img className='rec-icon' src={icon2} alt="" />
                  <div className="rec-carddown-title">New Apartment Nice Wiew</div>
                  <div className="rec-carddown-text">Quincy St, Brooklyn, NY, USA</div>
                  <div className="recomend-rooms">
                    <div className="rec-room">
                      <img src={bedroom} alt="" />
                      <div className="rec-room-title">4 Beds</div>
                    </div>
                    <div className="rec-room">
                      <img src={bathroom} alt="" />
                      <div className="rec-room-title">5 Baths</div>
                    </div>
                    <div className="rec-room">
                      <img src={garaj} alt="" />
                      <div className="rec-room-title">1 Garage</div>
                    </div>
                    <div className="rec-room">
                      <img src={chizgich} alt="" />
                      <div className="rec-room-title">1200 Sq Ft</div>
                    </div>
                  </div>
                  <div className='recomend-line'></div>
                  <div className='rec-price'>
                    <div className='rec-prices'>
                      <div className="rec-price-title1">$2,800/mo</div>
                      <h4 className='rec-price-title2'>$7,500/mo</h4>
                    </div>
                    <img className='rec-size' src={size} alt="" />
                    <img className='rec-love' src={love} alt="" />
                  </div>
                </div>
              </div>
              <div className="recomend-card">
                <div className="rec-cardup3">
                  <h1 className='rec-cardup-title1'>FEATURED</h1>
                  <h1 className='rec-cardup-title2'>FOR SALE</h1>
                </div>
                <div className="rec-carddown">
                  <img className='rec-icon' src={icon3} alt="" />
                  <div className="rec-carddown-title">New Apartment Nice Wiew</div>
                  <div className="rec-carddown-text">Quincy St, Brooklyn, NY, USA</div>
                  <div className="recomend-rooms">
                    <div className="rec-room">
                      <img src={bedroom} alt="" />
                      <div className="rec-room-title">4 Beds</div>
                    </div>
                    <div className="rec-room">
                      <img src={bathroom} alt="" />
                      <div className="rec-room-title">5 Baths</div>
                    </div>
                    <div className="rec-room">
                      <img src={garaj} alt="" />
                      <div className="rec-room-title">1 Garage</div>
                    </div>
                    <div className="rec-room">
                      <img src={chizgich} alt="" />
                      <div className="rec-room-title">1200 Sq Ft</div>
                    </div>
                  </div>
                  <div className='recomend-line'></div>
                  <div className='rec-price'>
                    <div className='rec-prices'>
                      <div className="rec-price-title1">$2,800/mo</div>
                      <h4 className='rec-price-title2'>$7,500/mo</h4>
                    </div>
                    <img className='rec-size' src={size} alt="" />
                    <img className='rec-love' src={love} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <a href="">
              <img className='rec-bullet' src={bullet} alt="" />
            </a>
          </div>
        </div>
      </div>










      {/*  */}













      <div className="chos">
        <div className="container">
          <div className="chos-title">Why Choose Us?</div>
          <p className='chos-text'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          <div className="chos-content">
            <div className="chos-blog">
              <img src={smile} alt="" />
              <h4 className="chos-blog-title">Trusted By Thousands</h4>
              <p className='chos-blog-text'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            </div>
            <div className="chos-blog">
              <img src={house} alt="" />
              <h4 className="chos-blog-title">Wide Renge Of Properties</h4>
              <p className='chos-blog-text'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            </div>
            <div className="chos-blog">
              <img src={calc} alt="" />
              <h4 className="chos-blog-title">Financing Made Easy</h4>
              <p className='chos-blog-text'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            </div>
            <div className="chos-blog">
              <img src={map} alt="" />
              <h4 className="chos-blog-title">See Neighborhoods</h4>
              <p className='chos-blog-text'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            </div>
          </div>
        </div>
      </div>













      {/*  */}
















      <div className="cate">
        <div className="container">
          <h4 className="cate-title">Category</h4>
          <p className="cate-text">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          <div className="cate-content">
            <div className="cate-blog1">
              <img src={dom} alt="" />
              <h4 className='cate-blog-title'>House</h4>
            </div>
            <div className="cate-blog2">
              <img src={dom2} alt="" />
              <h4 className='cate-blog-title'>Apartment</h4>
            </div>
            <div className="cate-blog3">
              <img src={ofis} alt="" />
              <h4 className='cate-blog-title'>Office</h4>
            </div>
            <div className="cate-blog4">
              <img src={villa} alt="" />
              <h4 className='cate-blog-title'>House</h4>
            </div>
          </div>
          <a href="">
            <img className='cate-bullet' src={bullet} alt="" />
          </a>
        </div>
      </div>










      {/*  */}









      <div className="container">
        <div className="vero">
          <h3 className="vero-title">Vermont Farmhouse With Antique Jail Is
            the Week's Most Popular Home</h3>
          <button className='vero-btn'>Read more</button>
        </div>
      </div>





      {/*  */}









      <div className="prop">
        <div className="container">
          <div className="recomend-content">
            <h3 className="recomend-title">Recent Properties for Rent</h3>
            <p className='recomend-text'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            <div className='recomend-flex'>
              <div className="recomend-card">
                <div className="rec-cardup">
                  <h1 className='rec-cardup-title1'>FEATURED</h1>
                  <h1 className='rec-cardup-title2'>FOR SALE</h1>
                </div>
                <div className="rec-carddown">
                  <img className='rec-icon' src={icon} alt="" />
                  <div className="rec-carddown-title">New Apartment Nice Wiew</div>
                  <div className="rec-carddown-text">Quincy St, Brooklyn, NY, USA</div>
                  <div className="recomend-rooms">
                    <div className="rec-room">
                      <img src={bedroom} alt="" />
                      <div className="rec-room-title">4 Beds</div>
                    </div>
                    <div className="rec-room">
                      <img src={bathroom} alt="" />
                      <div className="rec-room-title">5 Baths</div>
                    </div>
                    <div className="rec-room">
                      <img src={garaj} alt="" />
                      <div className="rec-room-title">1 Garage</div>
                    </div>
                    <div className="rec-room">
                      <img src={chizgich} alt="" />
                      <div className="rec-room-title">1200 Sq Ft</div>
                    </div>
                  </div>
                  <div className='recomend-line'></div>
                  <div className='rec-price'>
                    <div className='rec-prices'>
                      <div className="rec-price-title1">$2,800/mo</div>
                      <h4 className='rec-price-title2'>$7,500/mo</h4>
                    </div>
                    <img className='rec-size' src={size} alt="" />
                    <img className='rec-love' src={love} alt="" />
                  </div>
                </div>
              </div>
              <div className="recomend-card">
                <div className="rec-cardup2">
                  <h1 className='rec-cardup-title1'>FEATURED</h1>
                  <h1 className='rec-cardup-title2'>FOR SALE</h1>
                </div>
                <div className="rec-carddown">
                  <img className='rec-icon' src={icon2} alt="" />
                  <div className="rec-carddown-title">New Apartment Nice Wiew</div>
                  <div className="rec-carddown-text">Quincy St, Brooklyn, NY, USA</div>
                  <div className="recomend-rooms">
                    <div className="rec-room">
                      <img src={bedroom} alt="" />
                      <div className="rec-room-title">4 Beds</div>
                    </div>
                    <div className="rec-room">
                      <img src={bathroom} alt="" />
                      <div className="rec-room-title">5 Baths</div>
                    </div>
                    <div className="rec-room">
                      <img src={garaj} alt="" />
                      <div className="rec-room-title">1 Garage</div>
                    </div>
                    <div className="rec-room">
                      <img src={chizgich} alt="" />
                      <div className="rec-room-title">1200 Sq Ft</div>
                    </div>
                  </div>
                  <div className='recomend-line'></div>
                  <div className='rec-price'>
                    <div className='rec-prices'>
                      <div className="rec-price-title1">$2,800/mo</div>
                      <h4 className='rec-price-title2'>$7,500/mo</h4>
                    </div>
                    <img className='rec-size' src={size} alt="" />
                    <img className='rec-love' src={love} alt="" />
                  </div>
                </div>
              </div>
              <div className="recomend-card">
                <div className="rec-cardup3">
                  <h1 className='rec-cardup-title1'>FEATURED</h1>
                  <h1 className='rec-cardup-title2'>FOR SALE</h1>
                </div>
                <div className="rec-carddown">
                  <img className='rec-icon' src={icon3} alt="" />
                  <div className="rec-carddown-title">New Apartment Nice Wiew</div>
                  <div className="rec-carddown-text">Quincy St, Brooklyn, NY, USA</div>
                  <div className="recomend-rooms">
                    <div className="rec-room">
                      <img src={bedroom} alt="" />
                      <div className="rec-room-title">4 Beds</div>
                    </div>
                    <div className="rec-room">
                      <img src={bathroom} alt="" />
                      <div className="rec-room-title">5 Baths</div>
                    </div>
                    <div className="rec-room">
                      <img src={garaj} alt="" />
                      <div className="rec-room-title">1 Garage</div>
                    </div>
                    <div className="rec-room">
                      <img src={chizgich} alt="" />
                      <div className="rec-room-title">1200 Sq Ft</div>
                    </div>
                  </div>
                  <div className='recomend-line'></div>
                  <div className='rec-price'>
                    <div className='rec-prices'>
                      <div className="rec-price-title1">$2,800/mo</div>
                      <h4 className='rec-price-title2'>$7,500/mo</h4>
                    </div>
                    <img className='rec-size' src={size} alt="" />
                    <img className='rec-love' src={love} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <a href="">
              <img className='rec-bullet' src={bullet} alt="" />
            </a>
          </div>
        </div>
      </div>







      {/*  */}







      <div className="testi">
        <div className="container">
          <div className="testi-title">Testimonials</div>
          <p className='testi-text'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          <div className="testi-content">
            <div className="testi-blog">
              <div className="testi-card">
                <p className='testi-card-text'>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                <img className='testi-boy' src={boy} alt="" />
              </div>
              <div className="testi-name">Marvin McKinney</div>
              <div className="testi-job">Designer</div>
            </div>
            <div className="testi-blog">
              <div className="testi-card">
                <p className='testi-card-text'>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                <img className='testi-boy' src={boy} alt="" />
              </div>
              <div className="testi-name">Marvin McKinney</div>
              <div className="testi-job">Designer</div>
            </div>
            <div className="testi-blog">
              <div className="testi-card">
                <p className='testi-card-text'>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                <img className='testi-boy' src={boy} alt="" />
              </div>
              <div className="testi-name">Marvin McKinney</div>
              <div className="testi-job">Designer</div>
            </div>
          </div>
        </div>
      </div>







      {/*  */}





      <div className="foot">
        <div className="container">
          <div className="foot-content">
            <div className="foot-blog1">
              <div className="foot-title">Contact Us</div>
              <div className="foot-flex">
                <img src={location} alt="" />
                <p className='foot-text'>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
              </div>
              <div className="foot-flex">
                <img src={call} alt="" />
                <p className='foot-text'>123 456 7890</p>
              </div>
              <div className="foot-flex">
                <img src={email} alt="" />
                <p className='foot-text'>support@houzing.com</p>
              </div>
              <div className="foot-images">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <img src={int} alt="" />
              </div>
            </div>
            <div className="foot-blog2">
              <h4 className="foot-title">Discover</h4>
              <p className='foot-textt'>Chicago</p>
              <p className='foot-textt'>Los Angeles</p>
              <p className='foot-textt'>Miami</p>
              <p className='foot-textt'>New York</p>
            </div>
            <div className="foot-blog3">
              <h4 className="foot-title">Lists by Category</h4>
              <p className='foot-textt'>Apartments</p>
              <p className='foot-textt'>Condos</p>
              <p className='foot-textt'>Houses</p>
              <p className='foot-textt'>Offices</p>
              <p className='foot-textt'>Retail</p>
              <p className='foot-textt'>Villas</p>
            </div>
            <div className="foot-blog3">
              <h4 className="foot-title">Lists by Category</h4>
              <p className='foot-textt'>About Us</p>
              <p className='foot-textt'>Terms & Conditions</p>
              <p className='foot-textt'>Support Center</p>
              <a href="/contacts">
                <p className='foot-textt'>Contact Us</p>
              </a>
            </div>
          </div>
        </div>
        <div className="foot-line"></div>
        <div className="container">
          <div className="foot-foot">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <div className='foot-f'>
              <div className="foot-foot-text">Copyright © 2021 CreativeLayers. All Right Reserved.</div>
              <img src={up} alt="" />
            </div>
          </div>
        </div>
      </div>








      {/*  */}







    </div>
  )
}
