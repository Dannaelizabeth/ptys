import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const Order = () => {
    const status =0;

    const statusClass = (index)=>{
        if(index - status < 1 ) return styles.done;
        if(index - status === 1 ) return styles.inProgress;
        if(index - status > 1) return styles.undone;
    }
  return (


    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td>
                                    <span className={styles.id}>123654789</span>
                                </td>
                                <td>
                                    <span className={styles.name}>Username one</span>
                                </td>
                                <td className={styles.address}>
                                    JFGN KFJS jf 12.5
                                </td>
                                <td>
                                    <span className={styles.total}>
                                        $40.00
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src='/icons/paid.svg' width={30} height={30} alt=''/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/icons/check.svg' width={20} height={20} alt='' />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src='/icons/bake.svg' width={30} height={30} alt=''/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/icons/check.svg' width={20} height={20} alt='' />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src='/icons/bike.svg' width={30} height={30} alt=''/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/icons/check.svg' width={20} height={20} alt='' />
                    </div>
                </div>
                <div className={statusClass(4)}>
                    <Image src='/icons/delivery.svg' width={30} height={30} alt=''/>
                    <span>Delivery</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/icons/check.svg' width={20} height={20} alt='' />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b>Totall:</b>$40.00
                </div>
                <button disable className={styles.button}>PAID</button>
            </div>

        </div>
    </div>
  )
}

export default Order