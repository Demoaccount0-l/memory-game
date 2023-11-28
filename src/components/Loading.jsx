
import rick from '../assets/icons/rick-icon.png'
import Styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={Styles.loading}>
        <p>Loading....</p>
        <img src={rick} className={Styles.loading_img}></img>      
    </div>
  )
}
