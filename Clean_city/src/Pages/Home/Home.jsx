import Button from '../../Components/Button/Button';
import styles from './Home.module.css'
const Home = () => {
    const styling = styles.btn_2
       
   
   
    return(
        <>
        <div className={styles.homepage} >  
                <div className={styles.homepage_container}>
                    
                    <div className={styles.container1}>
                        <h1>Experience a</h1>
                        <h1>cleaner Lagos</h1>
                        <p className={styles.container2}>Discover the power of responsible waste management and <br />
                        recycling right at your fingertips.</p>
                    </div>
                    <div className={styles.btn_1}>
                        <Button>Get started today</Button>
                        <Button styling = {styling}>See how it works</Button>
                    </div>
                </div>
                
        </div>
        </>
    )
}
export default Home;