import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav className="grid grid-cols-3 items-center bg-[rgb(17,17,17)] text-white text-xl">
        <ul className="flex space-x-7 justify-end col-start-1 ">
          <li><a href="/">Home</a></li>
          <li><a href="/Players">Players</a></li>
          <li><a href="#">Map Pool</a></li>
        </ul>
        <div className="flex-1 flex justify-center">
        <img className="flex justify-center col-start-2" src={logo}></img>
        </div>
    </nav>
  )
}