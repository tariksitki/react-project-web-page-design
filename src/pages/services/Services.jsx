

import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import SectionMiddle from '../../components/sectionMiddle/SectionMiddle';
import { ServicesMain, ServicesMainLeft, ServicesMainRight } from './ServicesStyles';


const Services = () => {
  return (
    <>
      <Navbar />
      <SectionMiddle />
      <ServicesMain>
        <ServicesMainLeft>
            <div className='left-first-div' >
              <h3>SERVICES</h3>
            </div>
            <div>
                <h3>Website Design</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dicta laboriosam eaque a harum reprehenderit id dolor. Impedit </p>

                <p>Pricing: $1.000 - $3.000</p>
            </div>

            <div>
                <h3>Website Maintenance</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit quasi placeat enim veniam dignissimos earum </p>
                <p>Pricing: $250 per Month</p>
            </div>

            <div>
                <h3>Website Hosting</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt temporibus autem culpa dolore cumque voluptas nemo quod</p>

                <p>Pricing: $25 per Month</p>
            </div>
        </ServicesMainLeft>

        <ServicesMainRight>
            <h3>Get A Quote</h3>
            <form action="result.html" class="services_main_right_form">
                
                <label for="name">Name</label> <br/>
                <input type="text" name="name" id="name" placeholder="Name" required /> <br/>

                <label for="form_email">E-Mail Address</label> <br/>
                <input type="email" name="email" id="form_email" placeholder="E-Mail Address" required /> <br/>

                <label for="message">Message</label> <br/>
                <textarea name="message" id="message" cols="22" rows="5" placeholder="Enter Your Message" maxlength="100"></textarea> <br/>

                <div className='button-div'>
                  <button type="submit" class="services_form_submit">SUBMIT</button>
                </div>

            </form>

        </ServicesMainRight>
      </ServicesMain>

      <Footer />
    </>
  )
}

export default Services;