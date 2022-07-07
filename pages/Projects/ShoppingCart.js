//TODO: add images
import Image from "next/image";
// style
import styles from "../../styles/pages/shoppingCart.module.scss";

export default function ShoppingCart() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Shopping Cart</h1>
        </div>
        <div className={styles.overview}>
          <div className={styles.info}>
            <p>
              The objective of this project is to implement a shopping cart
              functionality using React Context API.
            </p>
          </div>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <p>React</p>
            </div>
            <div className={styles.skill}>
              <p>Styled Components</p>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Features</h2>
            <ul>
              <li>Add and remove items to the cart</li>
              <li>View, update, close the cart modal</li>
              <li>Show active states of the cart</li>
              <li>Display the number of items in the cart on a badge</li>
              <li>Mobile responsive</li>
            </ul>
          </div>
          <div className={styles.image}>
            <Image
              src="/projectImages/shoppingCart/shoppingCart-desktop-mockup.png"
              width={736}
              height={356}
              alt=""
            />
          </div>

          <div className={styles.images}></div>
        </div>
      </div>
    </div>
  );
}
