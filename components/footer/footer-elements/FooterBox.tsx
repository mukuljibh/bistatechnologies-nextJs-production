import Address from "../company-address/Address"
import FooterElement from "./FooterElement"
export default function FooterBox() {
    return (
        <div className=" lg:p-0 pl-5 lg:flex gap justify-evenly mt-10">
            <Address />
            <FooterElement />
        </div>
    )
}