import axios from "axios";
import {atom, selector} from "recoil";


export const NavbarAtoms=atom({
    key:'NavbarItems',
    default: selector({
        key:'navbarnotifications',
        get: async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
})

export const sumnavbar = selector({
    key: 'sumnavbarSelector',
    get: ({ get }) => {
      const { network, job, notif, msg } = get(NavbarAtoms); // Destructure the object
      const Sum = network + job + notif + msg; // Calculate the sum
      return Sum;
    }
  });