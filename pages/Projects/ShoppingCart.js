//TODO: add images
//
// style
import styles from "../../styles/pages/shoppingCart.module.scss";

export default function ShoppingCart() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Shopping Cart</h1>
          <p>
            The objective of this project is to implement a shopping cart
            functionality using React Context API.
          </p>
        </div>
        <div className={styles.content}>
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
          <div className={styles.images}></div>
        </div>
      </div>
    </div>
  );
}
