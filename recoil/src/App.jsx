import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { NavbarAtoms, sumnavbar } from "./atoms"
import { useEffect } from "react"


export default function App() {
  return < RecoilRoot >
      <Navbar />
    </RecoilRoot >

}


function Navbar() {

  const [Navbar,setNavbar]=useRecoilState(NavbarAtoms)
  const sumnavbarcount=useRecoilValue(sumnavbar)



  return <>
    <button>Home</button>

    <button>My Networks {Navbar.network > 99 ? "99+" : Navbar.network} </button>
    <button>Jobs {Navbar.job}</button>
    <button>Messages {Navbar.msg}</button>
    <button>Notification{Navbar.notif}</button>

    <button>me {sumnavbarcount}</button>
  </>
}