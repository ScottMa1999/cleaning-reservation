import { useEffect, useState } from "react";

function AboutUs() {
  // states
  const longDescription: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ipsa facilis qui nemo deserunt, quidem corporis minima nostrum iure provident cumque? Architecto maiores, accusamus amet recusandae aut repellendus doloremque laborum non ut velit expedita quibusdam esse, at, autem nam id! Soluta voluptatum blanditiis magni, hic tenetur unde voluptates quod sit?"

  const shortDescription: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ipsa facilis qui nemo deserunt, quidem corporis minima nostrum iure provident cumque? Architecto maiores, accusamus amet recusandae aut repellendus ..."

  const [description, setDescription] = useState<string>(longDescription)
  const [screenWidth, setScreenWidth] = useState<number>(window.outerWidth);

  // effects
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.outerWidth);
    window.addEventListener("resize", handleResize);
    // clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (screenWidth < 580) {
      setDescription(shortDescription);
    }
    else {
      setDescription(longDescription);
    }
  }, [screenWidth])


  return (
    <section className="about-us">
      <p className="AboutUs-title">About Us</p>
      <p className="AboutUs-description">{description}</p>
    </section>
  )
}

export default AboutUs;