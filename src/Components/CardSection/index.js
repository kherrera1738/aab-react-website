import React from 'react';
import Card from './Card';
import { CardContainer, CardBodyContainer } from './CardElements';

import img1 from '../../Imgs/img1.jpg';
import img2 from '../../Imgs/img2.jpg';
import img3 from '../../Imgs/img3.jpg';
import img4 from '../../Imgs/img4.jpg';

function CardSection() {
  return (
    <CardContainer className="py-5">
      <CardBodyContainer>
        <Card img={img1} title="Quality" text="Our goal is to produce high quality collision repairs and paint at the best price possible without sacrificing quality and safety. Our belief is that the best path for our continued growth and success lies internally with our employees, and externally by meeting our customers’ expectations. We are committed to the process of continuous improvement in all aspects of our business. We intend to remain strong in the industry, providing outstanding collision repairs while keeping up to date with the latest technology in our field to achieve excellence in our work."/>
        <Card img={img2} title="Professionalism" text="We base ourselves on ideas that hold the integrity, quality, and efficiency of our services. We hold ourselves to ethical business practices when it comes not only to our workers, but also when dealing with our clients and insurance companies. It is clear to us it’s not just about the car but it’s mainly about the customer. Our standard has allowed us to establish great relationships and trust with our collaborators. Another part of our professionalism is based on the use of the right materials and the proper techniques when dealing with vehicles regardless of how small or large the job is or how old or new the vehicle is." />
        <Card img={img3} title="Wheel Repair Services" text="We will repair your wheels and rims to a nice brand new finish. Advanced Autobody offers the following repair services:
            •Wheel refurbishment or reconditioning
            •Alloy and steel wheel straightening to manufacture specifications.
            •Professional wheel paint (Factory brand)
            We can fix it for a fraction of what buying a new rim would cost. Our service is affordable and guaranteed to be excellent." />
        <Card img={img4} title="Environmentally Friendly" text="Advanced Auto Body is committed to reducing impact in both the community and the environment. The quality and impact of our materials is very important to us. That is why we take pride in using PPG Envirobase products. Using water borne factory quality paint with our computerized matching system, we are doing our part to make this planet last a little bit longer and assure our customers the best job possible. We want to keep your car looking as good as new, while helping the planet one car at a time." />    

      </CardBodyContainer>
    </CardContainer>
  )
}

export default CardSection;
