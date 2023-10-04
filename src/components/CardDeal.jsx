import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Find a better card deal <br
      className="sm:block hidden"/>
      in a few easy steps.</h2>
      <p className={`${styles.paragaph} max-w-[470px]
      text-dimWhite mt-5`}>
        Arcu tortor, purus in mattis at sed integer
        faucibus. Aliquet quis Aliquet eget mauris tortor.
        Aliquet ultices ac, ametua.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%]
      h-[100%]" />
    </div>
  </section>
)


export default CardDeal
