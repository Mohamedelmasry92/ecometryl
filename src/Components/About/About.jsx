import React from 'react'
import aboutImg from '../../assets/images/about.jpeg'
import goals from '../../assets/images/goals.png'
import hero from '../../assets/images/hero.jpg'
import sdg from '../../assets/images/sdg.jpg'
import sdg3 from '../../assets/images/sdg3.jpg'


export default function About() {
  return <>    

    <div className="title pb-3 text-center">
        <h2 className='mt-5 fw-bold'>Who We Are?</h2>
        <div className="line translate-middle"></div>
    </div>
    
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img src={aboutImg} className='w-100' alt='About' loading='lazy' />
        </div>      
        <div className='col-md-6 text-center'>
          
          <p className='fs-5'>online platform where researchers can list their excess chemicals and materials for sale or exchange. This creates a marketplace that connects researchers with surplus resources to those who need them, reducing waste and promoting efficient resource utilization.</p>
          <p className='fs-5 mt-3'>Supporting Egypt Vision 2030 by fostering economic diversification, scientific research, environmental sustainability, and partnerships for sustainable development. Through reduced waste, cost savings, enhanced collaboration, and environmental responsibility, our startup contributes to a more sustainable and efficient research ecosystem in Egypt</p>

        </div>      
      </div>      
    </div>      

    <div className='container-fluid my-5 p-5 bg-light'>
         <h3 className='mt-5 fw-bold text-center'>Goals</h3>
         <div className="line translate-middle"></div>

      <div className='row align-items-center mt-5'>

        <div className='col-md-6 '>

          <ul className='text-decoration-none'>
            <li className='lead'><span className='fw-bold'>1) Reduce Waste: </span>Facilitate the reuse and recycling of surplus research materials to significantly decrease the amount of chemical waste generated by research institutions.</li>
            <li className='mt-2 lead'><span className='fw-bold'>2) Cost Savings:</span>  Provide researchers with a cost-effective solution to acquire necessary materials, saving them money on purchasing new supplies.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 3) Resource Efficiency: </span> Maximize the utilization of existing research materials, contributing to more sustainable research practices and minimizing the need for new production.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 4) Collaboration: </span> Foster collaboration and knowledge exchange among researchers by creating a platform that encourages interaction and resource sharing.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 5) Environmental Impact: </span> Contribute to a greener environment by minimizing the improper disposal of chemicals and materials that can harm ecosystems and human health.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 6) Research Advancement: </span> Accelerate the pace of research and innovation by ensuring researchers have access to the materials they need in a timely manner.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 7) Economic Growth: </span> stimulate a new industry centered around recycling and reuse of research materials, generating job opportunities and economic growth.</li>
          </ul>

        </div>      
        
        <div className='col-md-6'>
          <img src={goals} className='w-100' alt='Goals' loading='lazy'/>
          <img src={hero} className='w-100 mt-4' alt='Hero' loading='lazy'/>
        </div>      
      </div>      
    </div>      

    <div className='container-fluid my-5 p-5 '>
         <h3 className='mt-5 fw-bold text-center'>SDGs</h3>
         <div className="line translate-middle"></div>

      <div className='row  mt-5'>

      <div className='col-md-6'>
          <img src={sdg3} className='w-100 ' alt='SDG3' loading='lazy'/>
          <img src={sdg} className='w-100 mt-4' alt='SDG' loading='lazy'/>
        </div>  

        <div className='col-md-6 '>

          <ul className='text-decoration-none'>
            <li className='lead'><span className='fw-bold'>1) SDG 9: </span> Industry, Innovation, and Infrastructure: our platform promotes innovation by creating an efficient way for researchers to share and acquire surplus materials, contributing to improved research infrastructure.</li>
            <li className='mt-2 lead'><span className='fw-bold'>2) SDG 12:</span>  Responsible Consumption and Production: our startup addresses responsible consumption by reducing waste and encouraging the reuse of research materials, aligning with sustainable production practices.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 3) SDG 13: </span>  Climate Action: By minimizing chemical waste and improper disposal, our project contributes to environmental protection and reducing the negative impacts on climate.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 4) SDG 17:  </span> Partnerships for the Goals: our platform fosters collaboration and partnerships within the scientific community, supporting knowledge exchange and resource sharing.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 5) SDG 4: </span>  Quality Education: our project indirectly supports quality education by providing researchers and educational institutions with access to affordable materials, enhancing the learning and research experience.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 6) SDG 8: </span> Decent Work and Economic Growth: The potential creation of a new industry for recycling and reuse could contribute to economic growth and the creation of decent job opportunities.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 7) SDG 6:  </span> Clean Water and Sanitation: By reducing pollution from chemical waste, our project contributes to cleaner water sources and environmental sustainability.</li>
            <li className='mt-2 lead'><span className='fw-bold'> 8) SDG 15:  </span> Life on Land: Minimizing improper disposal helps protect terrestrial ecosystems from the harmful effects of chemical waste.</li>
          </ul>

        </div>      
        
    
      </div>      
    </div>   


  </>
}
