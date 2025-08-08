import Button from './Button'
import Container from './Container'
import backgroundImage from '../images/background-call-to-action.jpg'

export default function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-indigo-600 py-32"
    >
      <img
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized="true"
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Start automating your restoration communications and impress your customers from day one.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Try HoneyFlow for free
          </Button>
        </div>
      </Container>
    </section>
  )
}
