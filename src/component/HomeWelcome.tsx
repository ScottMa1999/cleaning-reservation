import BackgroundVideo from "../assets/background.mp4";

type HomeWelcomePropTypes = {
  title: string,
  description: string
}

function HomeWelcome({title, description}: HomeWelcomePropTypes) {
  return (
    <section className="HomeWelcome">
      <h1 className="HomeWelcome-title">{title}</h1>
      <p className="HomeWelcome-description">{description}</p>
      <video autoPlay muted loop>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </section>
  )
}

export default HomeWelcome;