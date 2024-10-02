// Homepage component (Server-side)
import './styl.css'
import styles from '../../styles/homepage.module.css'
export default function Homepage() {

    return (
        <div className={`text-4xl ${styles.dashboard} `}>
            <div className="w-72 h-72   bg-pink-700 m-auto">
                <div className=" w-32 h-32 absolute -z-10 bg-black m-auto"></div>
            </div>
            <h1>This is homepage</h1>
            <div className="button text-center border-2 ">Hover me</div>

        </div>
    )
}
