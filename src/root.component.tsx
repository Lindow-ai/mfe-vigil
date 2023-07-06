import './styles.css'

export default function Root(props) {
  return <section className='background-vigil'>
    <h1>{props.name} is mounted!</h1>
    <h2>This application allows you to view the application project Vigil.</h2>
  </section>;
}
