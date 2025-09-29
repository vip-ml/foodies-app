import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "./meals-grid";

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it your self!</p>
                <p className={styles.cta}>
                    <Link href="./share">Share your favourite recipe</Link>
                </p>

            </header>
            <main className={styles.main}></main>
            <MealsGrid meals={[]} />

        </>
    );
}