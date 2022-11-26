import React from 'react'
import '../styles/Home.scss'
import vg from "../asserts/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai"


const Home = () => {
  return (<>
      <div className='home'  id='home'>
        <main>
            <h1>Tech Solution</h1>
            <p>Solution to all you Tech problems</p>
        </main>
    </div>
    <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        Whether you are a new business preparing to begin operating, a company wishing to expand, an individual looking to advance their set-up or an organisation looking to revise their technology - our IT infrastructure will cater to meet your unique requirements.
        </p>
    </div>

    
     

    </div>
    <div className="home3" id="about">
        <div>
            <h1>How we are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt illo numquam atque eligendi quibusdam illum maiores provident nemo in recusandae quod, iste tenetur voluptate id? Laborum soluta distinctio repudiandae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maiores modi necessitatibus assumenda libero. Minus accusantium, reiciendis esse nisi quaerat blanditiis veritatis repudiandae vero ea fuga animi. Nihil, tenetur minus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi natus unde rerum nisi reprehenderit. Quas voluptas dolorum aperiam ipsum excepturi, inventore omnis, consequuntur harum enim esse veritatis voluptate beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt illo numquam atque eligendi quibusdam illum maiores provident nemo in recusandae quod, iste tenetur voluptate id? Laborum soluta distinctio repudiandae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maiores modi necessitatibus assumenda libero. Minus accusantium, reiciendis esse nisi quaerat blanditiis veritatis repudiandae vero ea fuga animi. Nihil, tenetur minus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi natus unde rerum nisi reprehenderit. Quas voluptas dolorum aperiam ipsum excepturi, inventore omnis, consequuntur harum enim esse veritatis voluptate beatae</p>
        </div>
    </div>


    <div className="home4" id="brands">
        <div>
        <h1>Brand</h1>
        <article>
            <div style={{
                animationDelay:"0.3s",
            }}>

            <AiFillGoogleCircle/>
            <p>Google</p>
            </div>

            <div style={{
                animationDelay:"0.5s",
            }}>

            <AiFillYoutube/>
            <p>Youtube/</p>
            </div>

            <div style={{
                animationDelay:"0.7s",
            }}>

            <AiFillInstagram/>
            <p>Instaram</p>
            </div>

            <div style={{
                animationDelay:"0.1s",
            }}>

            <AiFillAmazonCircle/>
            <p>Amazon</p>
            </div>
        </article>

        </div>
    </div>
  </>
    
  )
}

export default Home